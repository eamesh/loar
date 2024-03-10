import { Inject, Injectable } from '@nestjs/common';
import { CountryService } from 'src/providers/country/country.service';
import {
  FinanceService,
  IFinanceType,
} from 'src/providers/finance/finance.service';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { StockService } from '../stock/stock.service';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import axios from 'axios';

@Injectable()
export class IndexService {
  constructor(
    private readonly countryService: CountryService,
    private readonly stockService: StockService,
    private readonly financeService: FinanceService,
    private readonly prisma: PrismaService,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}
  async home(type: any) {
    // const lower = type.toLocaleLowerCase();
    // const key = lower.includes('hk') ? 'hk' : lower;
    // console.log(key);
    // 热门
    // 涨幅榜
    // 跌幅榜
    // 交易额榜单
    // const hot = await this.cacheManager.get(`${key}.hot`);
    // const gainers = await this.cacheManager.get(`${key}.gainers`);
    // const losers = await this.cacheManager.get(`${key}.losers`);
    // const turnover = await this.cacheManager.get(`${key}.turnover`);

    const map = {
      US: 'USA',
      HKEX: 'HK',
    };
    console.log(type);
    const target = `http://101.200.133.133/t/luckday/${map[type]}/index.php`;
    // const hot = await this.prisma.stockSymbol.findMany({
    //   where: {
    //     market: type,
    //     changePercent: {
    //       not: 'Infinity',
    //     },
    //   },
    //   orderBy: {
    //     changePercent: 'desc',
    //   },
    //   take: 3,
    // });

    const hotResult = await axios.get(`${target}?to=up`);
    const gainerResult = await axios.get(`${target}?to=up`);
    const loserResult = await axios.get(`${target}?to=down`);
    const turnoverResult = await axios.get(`${target}?to=vol`);
    const hot = (
      await Promise.all(
        hotResult.data.map(async (item) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const [_, code] =
            type === 'US' ? item.code.split('.') : ['', item.code];
          const stock = await this.prisma.stockSymbol.findFirst({
            where: {
              code,
              market: type,
            },
          });
          return stock
            ? {
                ...stock,
                change: item.change,
                changePercent: item.change_percent,
                newPrice: item.price,
                volume: item.vol,
              }
            : false;
        }),
      )
    ).filter(Boolean);

    const gainers = (
      await Promise.all(
        gainerResult.data.map(async (item) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const [_, code] =
            type === 'US' ? item.code.split('.') : ['', item.code];
          const stock = await this.prisma.stockSymbol.findFirst({
            where: {
              code,
              market: type,
            },
          });
          return stock
            ? {
                ...stock,
                change: item.change,
                changePercent: item.change_percent,
                newPrice: item.price,
                volume: item.vol,
              }
            : false;
        }),
      )
    ).filter(Boolean);

    const losers = (
      await Promise.all(
        loserResult.data.map(async (item) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const [_, code] =
            type === 'US' ? item.code.split('.') : ['', item.code];
          const stock = await this.prisma.stockSymbol.findFirst({
            where: {
              code,
              market: type,
            },
          });
          return stock
            ? {
                ...stock,
                change: item.change,
                changePercent: item.change_percent,
                newPrice: item.price,
                volume: item.vol,
              }
            : false;
        }),
      )
    ).filter(Boolean);

    const turnover = (
      await Promise.all(
        turnoverResult.data.map(async (item) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const [_, code] =
            type === 'US' ? item.code.split('.') : ['', item.code];
          const stock = await this.prisma.stockSymbol.findFirst({
            where: {
              code,
              market: type,
            },
          });
          return stock
            ? {
                ...stock,
                change: item.change,
                changePercent: item.change_percent,
                newPrice: item.price,
                volume: item.vol,
              }
            : false;
        }),
      )
    ).filter(Boolean);

    // const [hot, gainers, losers, turnover] = res.map((item) =>
    //   item.filter(Boolean),
    // );

    // const gainers = await this.prisma.stockSymbol.findMany({
    //   where: {
    //     market: type,
    //     changePercent: {
    //       not: 'Infinity',
    //     },
    //   },
    //   orderBy: {
    //     changePercent: 'desc',
    //   },
    //   take: 20,
    // });

    // const losers = await this.prisma.stockSymbol.findMany({
    //   where: {
    //     market: type,
    //     changePercent: {
    //       not: 'Infinity',
    //     },
    //   },
    //   orderBy: {
    //     changePercent: 'asc',
    //   },
    //   take: 20,
    // });

    // const turnover = await this.prisma.stockSymbol.findMany({
    //   where: {
    //     market: type,
    //     changePercent: {
    //       not: 'Infinity',
    //     },
    //   },
    //   orderBy: {
    //     volume: 'desc',
    //   },
    //   take: 20,
    // });

    return {
      hot,
      gainers,
      losers,
      turnover,
    };
  }

  async country() {
    return await this.countryService.listTree();
  }

  async stocks(type: IFinanceType, page: number = 1) {
    return await this.stockService.findStocks({
      where: {
        market: type,
      },
      orderBy: {
        date: 'desc',
      },
      page,
    });
  }
}
