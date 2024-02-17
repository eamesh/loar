import { HttpService } from '@nestjs/axios';
import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OnEvent } from '@nestjs/event-emitter';
import {
  HK,
  HK_EVERY_20_SECONDS,
  HK_EVERY_2_HOURS,
  HK_EVERY_5_MINUTES,
} from 'src/modules/schedule/task/stock/constants';
import { AKSHARE_URL } from 'src/constants/env';
import { bufferCount, firstValueFrom, from, map } from 'rxjs';
import { StockService } from 'src/modules/stock/stock.service';
import { FinanceService } from 'src/providers/finance/finance.service';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import * as opencc from 'node-opencc';

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
    private readonly stockService: StockService,
    private readonly financeService: FinanceService,
    @Inject(CACHE_MANAGER) readonly cacheManager: Cache,
  ) {
    this.akshareUrl = this.configService
      .get<string>(AKSHARE_URL)
      .replace(/\/$/, '');
  }

  async onModuleInit() {
    // await this.syncStock();
    // await this.syncRank();
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
            const cname = opencc.simplifiedToHongKong(name);
            // const cname = name;
            return {
              name: engname,
              cname,
              symbol,
              code: symbol,
              type: HK,
            };
          }),
        )
        .pipe(bufferCount(100))
        .subscribe(async (item) => {
          // console.log(item);

          await this.stockService.createManyStock(item);
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

  @OnEvent(HK_EVERY_5_MINUTES)
  async syncRank() {
    try {
      Logger.log(`${HK} rank 开始同步`, HkStockEvent.name);

      const hot = await this.financeService.hot(HK);
      await this.cacheManager.set(`${HK}.hot`, hot);

      const gainers = await this.financeService.gainers(HK);
      await this.cacheManager.set(`${HK}.gainers`, gainers);

      const losers = await this.financeService.losers(HK);
      await this.cacheManager.set(`${HK}.losers`, losers);

      const turnover = await this.financeService.turnover(HK);
      await this.cacheManager.set(`${HK}.turnover`, turnover);
      Logger.log(`${HK} rank 同步完成`, HkStockEvent.name);
    } catch (error) {
      Logger.error(
        `${HK} rank 同步失败 ${error.getMessage()}`,
        HkStockEvent.name,
      );
    }
  }
}
