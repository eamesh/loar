import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import * as qs from 'qs';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ShuhaiService {
  constructor(private readonly http: HttpService) {}

  async getSymbolDetail(symbol: string, market: string) {
    console.log(market);
    const symbolMarket = `${market}${symbol}`.toUpperCase();

    const url = 'http://ds.cnshuhai.com/stock.php';

    const query = {
      type: 'stock',
      u: 'emesh',
      symbol: symbolMarket,
    };

    const params = qs.stringify(query);
    const target = url + '?' + params;
    const result = await this.http.get(target);

    const detail = (await firstValueFrom(result)).data[0];
    console.log();
    return {
      lastClose: detail.LastClose,
      open: detail.Open,
      high: detail.High,
      low: detail.Low,
      price: detail.NewPrice,
      volume: detail.Volume,
      amount: detail.Amount,
      chg: ((detail.NewPrice - detail.LastClose) / detail.LastClose).toFixed(3),
      chgV: (detail.NewPrice - detail.LastClose).toFixed(3),
      a: detail.PriceChangeRatio,
    };
  }
}
