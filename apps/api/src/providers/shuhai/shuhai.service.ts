import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
// import * as qs from 'qs';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ShuhaiService {
  constructor(private readonly http: HttpService) {}

  async getSymbolDetail(symbol: string, market: string) {
    console.log(market);
    // const symbolMarket = `${market}${symbol}`.toUpperCase();

    const target = market === 'US' ? 'USA' : market;
    const url = `http://101.200.133.133/t/luckday/${target}/index.php?to=info&code=${symbol}`;
    // const url = 'http://ds.cnshuhai.com/stock.php';
    console.log(url);
    // const query = {
    //   type: 'stock',
    //   u: 'emesh',
    //   symbol: symbolMarket,
    // };

    // const params = qs.stringify(query);
    // const target = url + '?' + params;
    const result = await this.http.get(url);

    const detail = (await firstValueFrom(result)).data;
    return {
      lastClose: detail.previous_close,
      open: detail.open,
      high: detail.high,
      low: detail.low,
      price: detail.now,
      volume: detail.Volume,
      amount: detail.average_volume,
      chg: (+detail.change).toFixed(3),
      chgV: (+detail.percent_change).toFixed(3),
      a: detail.percent_change,
    };
  }
}
