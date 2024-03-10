import { StockSymbol } from '@loar/database';
import { Injectable } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import { WebsocketGateway } from '../websocket.gateway';
import Decimal from 'decimal.js';
import { StockService } from 'src/modules/stock/stock.service';

@Injectable()
export class PositionEvent {
  constructor(
    private readonly prisma: PrismaService,
    private readonly eventEmitter: EventEmitter2,
    private readonly socketGateway: WebsocketGateway,
    private readonly stockService: StockService,
  ) {}

  @OnEvent('HANDLE_POSITION')
  async handlePosition(symbol: StockSymbol) {
    this.handlePosition(symbol);
    this.handleRegistration(symbol);
  }

  async handleRegistration(symbol: StockSymbol) {
    console.log('处理挂单');
    // 获取正在挂单
    const positions = await this.prisma.stockPosition.findMany({
      where: {
        stockSymbolId: symbol.id,
        status: 4,
      },
    });

    if (!positions.length) return;

    positions.forEach(async (item) => {
      // 判断价格是否在范围内
      if (new Decimal(symbol.newPrice).lte(item.price)) {
        // 修改价格
        await this.prisma.stockPosition.update({
          where: {
            id: item.id,
          },
          data: {
            price: symbol.newPrice,
          },
        });

        // 持仓
        await this.stockService.updatePostionType(item.id, {});
      }
    });
  }

  async position(symbol: StockSymbol) {
    console.log('处理持仓');

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
