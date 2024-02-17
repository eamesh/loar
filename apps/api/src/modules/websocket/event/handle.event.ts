import { Injectable } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import { WebsocketGateway } from '../websocket.gateway';

@Injectable()
export class HandleEvent {
  constructor(
    private readonly prisma: PrismaService,
    private readonly eventEmitter: EventEmitter2,
    private readonly socketGateway: WebsocketGateway,
  ) {}

  @OnEvent('HANDLE_STOCK')
  async handleStock(stock: any) {
    const { symbol, newPrice, open, close, high, amount, volume, low, date } =
      stock;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, market, code] = symbol.match(/^(HK|US)(.*)/i);

    try {
      const stockSymbol = await this.prisma.stockSymbol.findFirstOrThrow({
        where: {
          code,
          syncMarket: market,
        },
      });

      const change = +newPrice - +open;

      let changePercent = '0';
      if (open !== 0) {
        changePercent = `${((change / +open) * 100).toFixed(3)}`;
      }

      const newStockSymbol = await this.prisma.stockSymbol.update({
        where: {
          id: stockSymbol.id,
        },
        data: {
          newPrice: `${newPrice}`,
          open: `${open}`,
          close: `${close}`,
          high: `${high}`,
          low: `${low}`,
          amount: `${amount}`,
          volume: `${volume}`,
          date: date.toString(),
          change: `${change}`,
          changePercent,
          sync: JSON.stringify(stock),
        },
      });

      // 触发持仓数据更新
      this.eventEmitter.emit('HANDLE_POSITION', stockSymbol);
      // 推送客户端已订阅
      // console.log(
      //   `推送订阅 `,
      //   `ws.market.${stockSymbol.market}.${stockSymbol.code}`,
      // );
      this.socketGateway.server
        .to(`ws.market.${stockSymbol.market}.${stockSymbol.code}`)
        .emit('events', {
          type: 'market',
          data: newStockSymbol,
        });
    } catch (error) {
      // Logger.error(`未匹配到 ${market} ${symbol} 丢弃`);
    }
  }
}