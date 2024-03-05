import { Injectable } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { Base } from './base';
import * as dayjs from 'dayjs';

@Injectable()
export class HkexEvent extends Base {
  url = 'http://101.200.133.133/t/luckday/HK/index.php';

  constructor(private readonly eventEmitter: EventEmitter2) {
    super();
  }

  @OnEvent('HKEX')
  async hkex(codes: any[]) {
    const result: any = await this.requestList({
      lists: codes.join(','),
    });
    // console.log(result);
    result.data.forEach((item) => {
      const data = {
        symbol: `HK${item.symbol}`,
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
  }
}
