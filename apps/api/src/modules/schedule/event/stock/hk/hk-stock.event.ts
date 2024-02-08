import { HttpService } from '@nestjs/axios';
import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OnEvent } from '@nestjs/event-emitter';
import {
  HK,
  HK_EVERY_20_SECONDS,
  HK_EVERY_2_HOURS,
} from 'src/modules/schedule/task/stock/constants';
import { AKSHARE_URL } from 'src/constants/env';
import { bufferCount, firstValueFrom, from, map } from 'rxjs';
import { StockService } from 'src/modules/stock/stock.service';

export interface StockHkSpot {
  symbol: string;
  name: string;
  engname: string;
  tradetype: string;
  lasttrade: string;
  prevclose: string;
  open: string;
  high: string;
  low: string;
  volume: string;
  amount: string;
  ticktime: string;
  buy: string;
  sell: string;
  pricechange: string;
  changepercent: string;
}

export interface HkStockName {
  name: string;
  cname: string;
  symbol: string;
}

@Injectable()
export class HkStockEvent implements OnModuleInit {
  private readonly akshareUrl: string;

  constructor(
    private readonly http: HttpService,
    private readonly configService: ConfigService,
    private readonly stockServer: StockService,
  ) {
    this.akshareUrl = this.configService
      .get<string>(AKSHARE_URL)
      .replace(/\/$/, '');
  }

  async onModuleInit() {
    await this.syncStock();
  }

  @OnEvent(HK_EVERY_2_HOURS, { async: true })
  async syncStock() {
    Logger.log(`==> 开始同步港股所有股票代码`, HkStockEvent.name);
    const api = `${this.akshareUrl}/api/public/stock_hk_spot`;

    try {
      const result = await firstValueFrom(
        this.http.get<StockHkSpot[]>(api, {
          timeout: 1000 * 60 * 30,
        }),
      );

      const data = result.data ?? [];

      from(data)
        .pipe(
          map(({ name, engname, symbol }) => {
            return {
              name: engname,
              cname: name,
              symbol,
              code: symbol,
              type: HK,
            };
          }),
        )
        .pipe(bufferCount(100))
        .subscribe(async (item) => {
          // console.log(item);
          await this.stockServer.createManyStock(item);
        });
      Logger.log(
        `同步港股所有股票代码完成: ${data.length} <==`,
        HkStockEvent.name,
      );
    } catch (error) {
      console.log(`港股同步失败`, HkStockEvent.name);
    }
  }

  @OnEvent(HK_EVERY_20_SECONDS)
  syncStockPrice() {
    console.log('港股同步价格');
  }
}
