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

@Injectable()
export class HandleStockService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly shuhai: ShuhaiService,
    private setting: SettingService,
  ) {}

  async buy(payload: BuyDto, member: Member) {
    // 判断市场状态
    // 组装数据
    const { amount, code, stopLoss, takeProfit, mode } = payload;
    const symbol = await this.prisma.stockSymbol.findFirst({
      where: {
        id: +code,
      },
    });
    const detail = await this.shuhai.getSymbolDetail(
      symbol.code,
      symbol.syncMarket,
    );

    // 保证金
    const bond = new Decimal(detail.price).mul(new Decimal(payload.amount));
    // 预估爆仓价
    const blast = new Decimal(detail.price).mul(2).toFixed(3);

    let bondDecimal = bond;

    // 当前市场不是US
    let unBalance = member.unBalance;

    if (symbol.market !== 'US') {
      bondDecimal = await this.setting.handleToUSDT(bondDecimal, symbol.market);
    }
    console.log('冻结余额', unBalance);
    unBalance = unBalance.add(bondDecimal);

    // 判断用户可用余额

    if (member.balance.lt(bond)) {
      throw new BadRequestException('保证金余额不足');
    }
    console.log(12313);
    // 插入持仓
    await this.prisma.stockPosition.create({
      data: {
        amount: +amount,
        stopLoss: `${stopLoss}`,
        takeProfit: `${takeProfit}`,
        price: `${detail.price}`,
        mode,
        bond: `${bond.toFixed(3)}`,
        blast: `${blast}`,
        market: symbol.market,
        status: 0,
        memberId: member.id,
        stockSymbolId: symbol.id,
        // currentPrice: `${detail.price}`,
        pl: '0',
        rate: '0',
      },
    });

    // 修改用户余额
    await this.prisma.member.update({
      where: {
        id: member.id,
      },
      data: {
        balance: member.balance.sub(bond),
        unBalance,
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
    // const market = await this.prisma.stockMarket.findFirst({
    //   where: {
    //     code: stockSymbol.market,
    //   },
    // });

    const { value } = await this.setting.getKey('fee_rate');

    const feeRate = new Decimal(value.value || 0);

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

    let allProfitDecimal = new Decimal(allProfit);
    let bondDecimal = new Decimal(position.bond);
    if (stockSymbol.market !== 'US') {
      allProfitDecimal = await this.setting.handleToUSDT(
        allProfitDecimal,
        stockSymbol.market,
      );
      bondDecimal = await this.setting.handleToUSDT(
        bondDecimal,
        stockSymbol.market,
      );
    }

    // 可用余额
    const balance = member.balance.add(allProfitDecimal).add(bondDecimal);
    // 冻结余额
    const unBalance = member.unBalance.sub(bondDecimal);

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
    // 修改用户余额
    await this.prisma.member.update({
      where: {
        id: member.id,
      },
      data: {
        balance,
        unBalance: unBalance.lt(0) ? 0 : unBalance,
      },
    });
  }
}