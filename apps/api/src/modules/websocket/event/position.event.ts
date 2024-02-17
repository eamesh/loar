import { StockSymbol } from '@loar/database';
import { Injectable } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import { WebsocketGateway } from '../websocket.gateway';

@Injectable()
export class PositionEvent {
  constructor(
    private readonly prisma: PrismaService,
    private readonly eventEmitter: EventEmitter2,
    private readonly socketGateway: WebsocketGateway,
  ) {}

  @OnEvent('HANDLE_POSITION')
  async handlePosition(symbol: StockSymbol) {
    // 获取正在持仓
    const positions = await this.prisma.stockPosition.findMany({
      where: {
        stockSymbolId: symbol.id,
        status: 0,
      },
    });

    if (!positions.length) {
      // Logger.log(`${symbol.code} 没有持仓`);
      return;
    }

    // 获取市场费率
    // const market = await this.prisma.stockMarket.findFirst({
    //   where: {
    //     code: symbol.market,
    //   },
    // });

    // 计算
    positions.forEach(async (position) => {
      // 计算盈亏
      /**
       * 买多  当前总价 - 开仓总价
       * 买跌  开仓总价 - 当前总价
       */
      const allSellPrice = +symbol.newPrice * position.amount;
      const allBuyPrice = +position.price * position.amount;

      // 盈亏
      let profitLoss = 0;
      if (+position.mode === 0) {
        profitLoss = allSellPrice - allBuyPrice;
      } else {
        profitLoss = allBuyPrice - allSellPrice;
      }

      // const feeRate = +market?.feeRate || 0;

      // 计算手续费
      // const buyFee = feeRate * allBuyPrice;
      // 计算总盈亏
      // let allProfit = (profitLoss - buyFee).toFixed(3);

      // allProfit = +allProfit === 0 ? '0.000' : allProfit;
      const rate = `${((+profitLoss / allBuyPrice) * 100).toFixed(3)}`;

      await this.prisma.stockPosition.update({
        where: {
          id: position.id,
        },
        data: {
          currentPrice: `${symbol.newPrice}`,
          pl: `${profitLoss.toFixed(3)}`,
          rate,
        },
      });

      // 触发客户端推送
      this.eventEmitter.emit('MEMBER_POSITION', position.id);
      this.socketGateway.server
        .to(
          `ws.position.${symbol.market}.${symbol.code}.${position.memberId}.${position.id}`,
        )
        .emit('events', {
          type: 'position',
          data: {
            ...position,
            stockSymbol: symbol,
          },
        });
    });
  }
}
