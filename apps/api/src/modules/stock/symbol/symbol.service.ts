import { PaginateFunction, Prisma, paginator } from '@loar/database';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/providers/prisma/prisma.service';

@Injectable()
export class SymbolService {
  constructor(private readonly prisma: PrismaService) {}

  async getSymbols({
    where,
    orderBy,
    page,
    perPage = 20,
  }: {
    where?: Prisma.StockSymbolWhereInput;
    orderBy?: Prisma.StockSymbolOrderByWithRelationInput;
    page?: number;
    perPage?: number;
  }) {
    const paginate: PaginateFunction = paginator({ perPage });

    return await paginate(
      this.prisma.stockSymbol,
      {
        where,
        orderBy,
      },
      {
        page,
      },
    );
  }

  async createStockSymbol(payload: any) {
    const { id, ...data } = payload;

    if (!!id) {
      return await this.prisma.stockSymbol.update({
        where: {
          id,
        },
        data: {
          ...data,
          symbol: data.code,
          showName: data.name,
        },
      });
    }

    return await this.prisma.stockSymbol.create({
      data: {
        ...data,
        symbol: data.code,
        showName: data.name,
      },
    });
  }
}
