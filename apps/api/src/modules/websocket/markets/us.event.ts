import { Injectable } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { Base } from './base';
import { WebsocketGateway } from '../websocket.gateway';
import * as dayjs from 'dayjs';

@Injectable()
export class UsEvent extends Base {
  url = 'http://101.200.133.133/t/luckday/USA/index.php';

  constructor(
    private readonly eventEmitter: EventEmitter2,
    private readonly socketGateway: WebsocketGateway,
  ) {
    super();
  }

  @OnEvent('US')
  async us(codes: any[]) {
    const result: any = await this.requestList({
      lists: codes.join(','),
    });

    result.data.forEach((item) => {
      const data = {
        symbol: `US${item.symbol}`,
        newPrice: item.price,
        open: item.open,
        close: item.close,
        high: item.high,
        amount: item.amount || 0,
        volume: item.volume,
        low: item.low,
        change: item.change,
        changePercent: item.change_percent,
        date: dayjs().unix(),
      };

      this.eventEmitter.emit('HANDLE_STOCK', data);
    });

    // 处理数据
    // const { symbol, newPrice, open, close, high, amount, volume, low, date } =
    //   result;

    // 触发持仓数据更新
    // this.eventEmitter.emit('HANDLE_STOCK', data);
  }
}
