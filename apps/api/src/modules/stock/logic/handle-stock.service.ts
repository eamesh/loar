import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import { BuyDto } from './dto/buy.dto';
import { ShuhaiService } from 'src/providers/shuhai/shuhai.service';
import { Member } from '@loar/database';

@Injectable()
export class HandleStockService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly shuhai: ShuhaiService,
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
    const bond = (+detail.price * +payload.amount).toFixed(3);
    // 预估爆仓价
    const blast = (+detail.price * 2).toFixed(3);

    // 判断用户余额

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
        status: 0,
        memberId: member.id,
        stockSymbolId: symbol.id,
        currentPrice: `${detail.price}`,
        pl: '0',
        rate: '0',
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
    const market = await this.prisma.stockMarket.findFirst({
      where: {
        code: stockSymbol.market,
      },
    });

    const feeRate = +market.feeRate || 0;

    // 计算手续费
    const buyFee = feeRate * allBuyPrice;
    // 计算总盈亏
    const allProfit = (profitLoss - buyFee).toFixed(3);
    // 用户余额不足取消平仓
    // 修改用户余额

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
  }
}
