import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import { CreateMarketDto } from './dto/create-market.dto';
import { PaginateFunction, Prisma, paginator } from '@loar/database';

@Injectable()
export class MarketService {
  constructor(private readonly prisma: PrismaService) {}

  async getMarkets(
    orderBy: any = {
      id: 'desc',
    },
    where: any = {},
  ) {
    return await this.prisma.stockMarket.findMany({
      orderBy,
      where,
    });
  }

  async getMarketLists({
    where,
    orderBy,
    page,
    perPage = 20,
  }: {
    where?: Prisma.StockMarketWhereInput;
    orderBy?: Prisma.StockMarketOrderByWithRelationInput;
    page?: number;
    perPage?: number;
  }) {
    const paginate: PaginateFunction = paginator({ perPage });

    return await paginate(
      this.prisma.stockMarket,
      {
        where,
        orderBy,
      },
      {
        page,
      },
    );
  }

  async createMarket(data: CreateMarketDto) {
    const {
      code,
      currency,
      maxWithdrawal,
      minWithdrawal,
      feeRate,
      minFee,
      lever,
      mmr,
      allocationRate,
      frequency,
      bindingHours,
      headSymbols,
    } = data;

    return await this.prisma.stockMarket.create({
      data: {
        code,
        currency,
        maxWithdrawal,
        minWithdrawal,
        feeRate,
        minFee,
        lever,
        mmr,
        allocationRate,
        frequency,
        bindingHours,
        headSymbols,
      },
    });
  }

  async updateMarket(id: number, data: any) {
    return await this.prisma.stockMarket.update({
      where: {
        id,
      },
      data: data,
    });
  }

  async getMarketDetailById(id: number) {
    return await this.prisma.stockMarket.findFirst({
      where: {
        id,
      },
    });
  }
}
