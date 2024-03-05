import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { KlineDto } from './dto/kline.dto';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import { StockSymbol } from '@loar/database';
import * as qs from 'qs';
import { firstValueFrom } from 'rxjs';
import * as dayjs from 'dayjs';
import { StockDto } from './dto/stock.dto';
// import * as orderBy from 'lodash.orderby';

@Injectable()
export class KlineService {
  constructor(
    private readonly http: HttpService,
    private readonly prisma: PrismaService,
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getKline(data: KlineDto, num: number = 2000) {
    let stock: StockSymbol;
    try {
      stock = await this.prisma.stockSymbol.findFirstOrThrow({
        where: {
          id: +data.id,
        },
      });
    } catch (error) {}

    const mapMarket = {
      US: 'USA',
      HKEX: 'HK',
    };

    // const url = 'http://ds.cnshuhai.com/stock.php';
    const url = `http://101.200.133.133/t/luckday/${mapMarket[stock.market]}/index.php`;
    console.log(url);
    const symbol = stock.cat ? `${stock.cat}.${stock.code}` : stock.code;

    let l = +data.min;

    switch (data.level) {
      case 'day':
        l = 101;
        break;

      case 'week':
        l = 102;
        break;
      case 'month':
        l = 103;
        break;
    }

    const query: any = {
      order: 0,
      num,
      code: symbol,
      l,
      date: dayjs().subtract(1, 'day').format('YYYYMMDD'),
      enddate: dayjs().format('YYYYMMDD'),
    };

    if (data.start && data.end) {
      query.date = dayjs(+data.start).subtract(2, 'day').format('YYYYMMDD');
      query.enddate = +dayjs(+data.end).format('YYYYMMDD');
    }
    // console.log(query);

    if (+l === 1) {
      query.to = '5d';
    }

    // const symbol = `${stock.syncMarket}${stock.code}`.toUpperCase();
    // const line = data.level !== 'day' ? `min,${data.min}` : 'day';
    // const query: any = {
    //   type: 'kline',
    //   u: 'emesh',
    //   symbol,
    //   // st: +data.start / 1000,
    //   // et: +data.end / 1000,
    //   line,
    //   num: 2000,
    //   sort: 'Date desc',
    //   // stamp: dayjs().unix(),
    // };

    // if (data.start && data.end) {
    //   query.st = +data.start / 1000;
    //   query.et = +data.end / 1000;
    // }

    // if (num) {
    //   query.num = num;
    // }

    const params = qs.stringify(query);
    const target = url + '?' + params;

    try {
      const result = await this.http.get(target);
      // await this.sleep();
      const results = (await firstValueFrom(result)).data;
      return results.map((item) => {
        return {
          ...item,
          date: item.time,
          time: dayjs(item.time).unix(),
        };
      });
    } catch (error) {
      // console.log(error);
      return [];
    }
    // return orderBy(results, ['Date', 'asc']);
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
