import { HttpService } from '@nestjs/axios';
import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OnEvent } from '@nestjs/event-emitter';
import {
  US,
  US_EVERY_20_SECONDS,
  US_EVERY_2_HOURS,
  US_EVERY_5_MINUTES,
} from 'src/modules/schedule/task/stock/constants';
import { AKSHARE_URL } from 'src/constants/env';
import { bufferCount, firstValueFrom, from, map } from 'rxjs';
import { StockService } from 'src/modules/stock/stock.service';
import { FinanceService } from 'src/providers/finance/finance.service';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';

export interface StockUsSpot {
  name: string;
  cname: string;
  category: string;
  symbol: string;
  price: string;
  diff: string;
  chg: string;
  preclose: string;
  open: string;
  hight: string;
  low: string;
  amplitude: string;
  volume: string;
  mktcap: string;
  pe: string;
  market: string;
  category_id: string;
}

export interface UsStockName {
  name: string;
  cname: string;
  symbol: string;
}

@Injectable()
export class UsStockEvent implements OnModuleInit {
  private readonly akshareUrl: string;

  constructor(
    private readonly http: HttpService,
    private readonly configService: ConfigService,
    private readonly stockServer: StockService,
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

  @OnEvent(US_EVERY_2_HOURS, { async: true })
  async syncStock() {
    Logger.log(`==> 开始同步美股所有股票代码`, UsStockEvent.name);
    const api = `${this.akshareUrl}/api/public/get_us_stock_name`;

    try {
      const result = await firstValueFrom(
        this.http.get<UsStockName[]>(api, {
          timeout: 1000 * 60 * 30,
        }),
      );

      const data = result.data ?? [];

      from(data)
        .pipe(
          map((stock) => {
            return {
              ...stock,
              code: stock.symbol,
              type: US,
            };
          }),
        )
        .pipe(bufferCount(100))
        .subscribe(async (item) => {
          // console.log(item);
          await this.stockServer.createManyStock(item);
        });
      Logger.log(
        `同步美股所有股票代码完成: ${data.length} <==`,
        UsStockEvent.name,
      );
    } catch (error) {
      console.log(`美股同步失败`, UsStockEvent.name);
    }
  }

  @OnEvent(US_EVERY_20_SECONDS)
  syncStockPrice() {
    console.log('美股同步价格');
  }

  @OnEvent(US_EVERY_5_MINUTES, { async: true })
  async syncRank() {
    try {
      Logger.log(`${US} rank 开始同步`, UsStockEvent.name);

      const hot = await this.financeService.hot(US);
      await this.cacheManager.set(`${US}.hot`, hot);

      const gainers = await this.financeService.gainers(US);
      await this.cacheManager.set(`${US}.gainers`, gainers);

      const losers = await this.financeService.losers(US);
      await this.cacheManager.set(`${US}.losers`, losers);

      const turnover = await this.financeService.turnover(US);
      await this.cacheManager.set(`${US}.turnover`, turnover);
      Logger.log(`${US} rank 同步完成`, UsStockEvent.name);
    } catch (error) {
      Logger.error(
        `${US} rank 同步失败 ${error.getMessage()}`,
        UsStockEvent.name,
      );
    }
  }
}
