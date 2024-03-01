import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { KlineDto } from './dto/kline.dto';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import { StockSymbol } from '@loar/database';
import * as qs from 'qs';
import { firstValueFrom } from 'rxjs';
import * as dayjs from 'dayjs';
import { StockDto } from './dto/stock.dto';
import * as orderBy from 'lodash.orderby';

@Injectable()
export class KlineService {
  constructor(
    private readonly http: HttpService,
    private readonly prisma: PrismaService,
  ) {}

  async getKline(data: KlineDto, num: number = 0) {
    let stock: StockSymbol;
    try {
      stock = await this.prisma.stockSymbol.findFirstOrThrow({
        where: {
          id: +data.id,
        },
      });
    } catch (error) {}

    const url = 'http://ds.cnshuhai.com/stock.php';

    const symbol = `${stock.syncMarket}${stock.code}`.toUpperCase();
    const line = data.level !== 'day' ? `min,${data.min}` : 'day';
    const query = {
      type: 'kline',
      u: 'emesh',
      symbol,
      st: +data.start / 1000,
      et: +data.end / 1000,
      line,
      num: num ?? 2000,
      sort: 'Date desc',
      stamp: dayjs().unix(),
    };

    const params = qs.stringify(query);
    const target = url + '?' + params;
    const result = await this.http.get(target);

    await this.sleep();
    const results = (await firstValueFrom(result)).data;
    return orderBy(results, ['Date', 'asc']);
  }

  async sleep() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 500);
    });
  }

  async getStock(data: StockDto) {
    // const url = 'http://ds.cnshuhai.com/stock.php';

    // const symbol = `${data.type}${data.symbol}`.toUpperCase();
    // const query = {
    //   type: 'stock',
    //   u: 'emesh',
    //   symbol,
    //   market: data.type,
    // };

    // const params = qs.stringify(query);
    // const target = url + '?' + params;
    // console.log(target);
    // const result = await this.http.get(target);

    // await this.sleep();
    // return (await firstValueFrom(result)).data;
    const type = data.type.toLowerCase();
    const code = type === 'hk' ? data.symbol.padStart(5, '0') : data.symbol;
    return await this.prisma.stock.findFirst({
      where: {
        code,
        type,
      },
    });
  }
}
