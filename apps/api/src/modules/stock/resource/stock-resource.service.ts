import { PaginateFunction, Prisma, paginator } from '@loar/database';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/providers/prisma/prisma.service';

@Injectable()
export class StockResourceService {
  constructor(private readonly prisma: PrismaService) {}

  async create(payload: any) {
    return await this.prisma.stockResource.create({
      data: payload,
    });
  }

  async update(id: number, payload: any) {
    return await this.prisma.stockResource.update({
      where: {
        id,
      },
      data: payload,
    });
  }

  async getResources({
    where,
    orderBy,
    page,
    perPage = 20,
  }: {
    where?: Prisma.StockResourceWhereInput;
    orderBy?: Prisma.StockResourceOrderByWithRelationInput;
    page?: number;
    perPage?: number;
  }) {
    const paginate: PaginateFunction = paginator({ perPage });

    return await paginate(
      this.prisma.stockResource,
      {
        where,
        orderBy,
      },
      {
        page,
      },
    );
  }

  async getById(id: number) {
    return await this.prisma.stockResource.findFirst({
      where: {
        id,
      },
    });
  }
}
