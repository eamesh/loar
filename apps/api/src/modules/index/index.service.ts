import { Inject, Injectable } from '@nestjs/common';
import { CountryService } from 'src/providers/country/country.service';
import {
  FinanceService,
  IFinanceType,
} from 'src/providers/finance/finance.service';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { StockService } from '../stock/stock.service';
import { PrismaService } from 'src/providers/prisma/prisma.service';

@Injectable()
export class IndexService {
  constructor(
    private readonly countryService: CountryService,
    private readonly stockService: StockService,
    private readonly financeService: FinanceService,
    private readonly prisma: PrismaService,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}
  async home(type: IFinanceType) {
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

    const hot = await this.prisma.stockSymbol.findMany({
      where: {
        market: type,
        changePercent: {
          not: 'Infinity',
        },
      },
      orderBy: {
        changePercent: 'desc',
      },
      take: 3,
    });

    const gainers = await this.prisma.stockSymbol.findMany({
      where: {
        market: type,
        changePercent: {
          not: 'Infinity',
        },
      },
      orderBy: {
        changePercent: 'desc',
      },
      take: 20,
    });

    const losers = await this.prisma.stockSymbol.findMany({
      where: {
        market: type,
        changePercent: {
          not: 'Infinity',
        },
      },
      orderBy: {
        changePercent: 'asc',
      },
      take: 20,
    });

    const turnover = await this.prisma.stockSymbol.findMany({
      where: {
        market: type,
        changePercent: {
          not: 'Infinity',
        },
      },
      orderBy: {
        volume: 'desc',
      },
      take: 20,
    });

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
