import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import { BuyDto } from './dto/buy.dto';
import { ShuhaiService } from 'src/providers/shuhai/shuhai.service';
import { Member } from '@loar/database';
import { Decimal } from '@loar/database/generated/prisma-client/runtime/library';
import { SettingService } from 'src/modules/setting/setting.service';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import * as timezone from 'dayjs/plugin/timezone';
import * as isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isBetween);

@Injectable()
export class HandleStockService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly shuhai: ShuhaiService,
    private setting: SettingService,
  ) {}

  async getTradingPhase(code: string) {
    const market = await this.prisma.stockMarket.findFirst({
      where: {
        code,
      },
    });
    const marketTime = dayjs().tz(market.timezone);

    // Check if it's weekend
    const dayOfWeek = marketTime.day();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      return 0;
    }

    const [[mStart, mEnd], [aStart, aEnd]] = market.openTime
      .split(',')
      .map((item) => item.split(':'));

    const [pStart, pEnd] = market.beforeTime.split(':');
    const preMarketStartTime = dayjs(pStart, 'HH:mm').tz(market.timezone);
    const preMarketEndTime = dayjs(pEnd, 'HH:mm').tz(market.timezone);
    const morningStartTime = dayjs(mStart, 'HH:mm').tz(market.timezone);
    const morningEndTime = dayjs(mEnd, 'HH:mm').tz(market.timezone);
    const afternoonStartTime = dayjs(aStart, 'HH:mm').tz(market.timezone);
    const afternoonEndTime = dayjs(aEnd, 'HH:mm').tz(market.timezone);

    if (
      marketTime.isBetween(preMarketStartTime, preMarketEndTime, null, '[]')
    ) {
      return 2;
    } else if (
      marketTime.isBetween(morningStartTime, morningEndTime, null, '[]') ||
      marketTime.isBetween(afternoonStartTime, afternoonEndTime, null, '[]')
    ) {
      return 1;
    } else {
      return 0;
    }
  }

  async buy(payload: BuyDto, member: Member, isPosition = false) {
    console.log(isPosition);
    // 判断市场状态
    // 组装数据
    const { amount, code, stopLoss, takeProfit, mode, type, price } = payload;
    const symbol = await this.prisma.stockSymbol.findFirst({
      where: {
        id: +code,
      },
    });

    const tradeStatus = await this.getTradingPhase(symbol.syncMarket);

    if (tradeStatus === 0) {
      throw new BadRequestException(5001);
    }

    let isBefore = false;

    if (tradeStatus === 2) isBefore = true;

    const detailCode = symbol.cat
      ? `${symbol.cat}.${symbol.code}`
      : symbol.code;
    const detail =
      +type !== 1
        ? await this.shuhai.getSymbolDetail(detailCode, symbol.syncMarket)
        : {
            price,
          };

    // 保证金
    // const bond = isPosition
    //   ? new Decimal(0)
    //   : new Decimal(detail.price).mul(new Decimal(payload.amount));

    let bond = new Decimal(0);

    // 限价计算保证金
    if (+type === 2 || isBefore) {
      bond = new Decimal(detail.price).mul(new Decimal(payload.amount));
    }

    // 预估爆仓价
    console.log(detail);
    const blast = new Decimal(detail.price).mul(2).toFixed(3);

    const bondDecimal = bond;

    const accountBalance = member.accountBalance;

    const account = accountBalance[symbol.market];

    let unBalance = new Decimal(account.unBalance);
    let balance = new Decimal(account.balance);

    // if (symbol.market !== 'US') {
    //   bondDecimal = await this.setting.handleToUSD(bondDecimal, symbol.market);
    // }
    console.log('冻结余额', unBalance);
    unBalance = unBalance.add(bondDecimal);
    balance = balance.sub(bondDecimal);

    // 判断用户可用余额

    if (balance.lt(bond)) {
      throw new BadRequestException('余额不足');
    }

    // 插入持仓
    await this.prisma.stockPosition.create({
      data: {
        amount: +amount,
        stopLoss: `${stopLoss}`,
        takeProfit: `${takeProfit}`,
        price: `${detail.price}`,
        mode,
        bond: `${bond}`,
        blast: `${blast}`,
        market: symbol.market,
        // 0 持仓 1 平仓 2 限价审核 4 盘前交易市价待审核 5 盘前交易限价待审核 6 盘前交易拒绝 7 挂单
        // 0 持仓 1 平仓 2 限价审核 3 拒绝 4 挂单
        status: +type === 1 || isBefore ? 2 : 0,
        memberId: member.id,
        stockSymbolId: symbol.id,
        // currentPrice: `${detail.price}`,
        pl: '0',
        rate: '0',
        type,
        isBefore,
      },
    });

    accountBalance[symbol.market] = {
      balance,
      unBalance,
      lock: 0,
    };

    // 修改用户余额
    await this.prisma.member.update({
      where: {
        id: member.id,
      },
      data: {
        accountBalance: accountBalance,
      },
    });
  }

  async sell(id: number) {
    // 获取持仓
    const position = await this.prisma.stockPosition.findFirst({
      where: {
        id,
      },
      include: {
        stockSymbol: true,
        member: true,
      },
    });

    const tradeStatus = await this.getTradingPhase(
      position.stockSymbol.syncMarket,
    );

    if (tradeStatus !== 1) {
      throw new BadRequestException(5001);
    }

    // 检查持仓状态
    if (position.status !== 0) {
      throw new NotFoundException(4001);
    }

    // 获取股票
    const { stockSymbol } = position;
    stockSymbol;
    // 获取最新价
    const detail = await this.shuhai.getSymbolDetail(
      stockSymbol.code,
      stockSymbol.syncMarket,
    );
    // 获取用户余额
    // 计算盈亏
    /**
     * 买多  当前总价 - 开仓总价
     * 买跌  开仓总价 - 当前总价
     */
    const allSellPrice = detail.price * position.amount;
    const allBuyPrice = +position.price * position.amount;

    // 盈亏
    let profitLoss = 0;
    if (+position.mode === 0) {
      profitLoss = allSellPrice - allBuyPrice;
    } else {
      profitLoss = allBuyPrice - allSellPrice;
    }
    // 获取市场费率
    const market = await this.prisma.stockMarket.findFirst({
      where: {
        code: stockSymbol.market,
      },
    });

    // const { value } = await this.setting.getKey('fee_rate');

    const feeRate = new Decimal(market.feeRate || 0);

    // 计算手续费
    const buyFee = feeRate.mul(new Decimal(allBuyPrice));
    // 计算总盈亏
    const allProfit = new Decimal(profitLoss)
      .sub(new Decimal(buyFee))
      .toNumber()
      .toFixed(3);
    // 用户余额不足取消平仓
    // 修改用户余额
    const member = await this.prisma.member.findFirst({
      where: {
        id: position.memberId,
      },
    });

    const allProfitDecimal = new Decimal(allProfit);
    const bondDecimal = new Decimal(position.bond);
    // if (stockSymbol.market !== 'US') {
    //   allProfitDecimal = await this.setting.handleToUSD(
    //     allProfitDecimal,
    //     stockSymbol.market,
    //   );
    //   bondDecimal = await this.setting.handleToUSD(
    //     bondDecimal,
    //     stockSymbol.market,
    //   );
    // }

    const accountBalance = member.accountBalance;
    const account = accountBalance[stockSymbol.market];

    // 可用余额
    const balance = new Decimal(account.balance)
      .add(allProfitDecimal)
      .add(bondDecimal);
    // 冻结余额
    const unBalance = new Decimal(account.unBalance).sub(bondDecimal);

    // 平仓
    const rate = `${((+allProfit / allBuyPrice) * 100).toFixed(3)}`;
    await this.prisma.stockPosition.update({
      where: {
        id: position.id,
      },
      data: {
        currentPrice: `${detail.price}`,
        pl: `${allProfit}`,
        rate,
        status: 1,
      },
    });
    console.log('可用余额', balance, allProfitDecimal);

    accountBalance[stockSymbol.market] = {
      balance,
      unBalance,
      lock: 0,
    };
    // 修改用户余额
    await this.prisma.member.update({
      where: {
        id: member.id,
      },
      data: {
        accountBalance,
      },
    });
  }
}
