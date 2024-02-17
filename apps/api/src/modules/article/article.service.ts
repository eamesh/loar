import { PaginateFunction, Prisma, paginator } from '@loar/database';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/providers/prisma/prisma.service';

@Injectable()
export class ArticleService {
  constructor(private readonly prisma: PrismaService) {}
  async getList({
    where,
    orderBy,
    page,
    perPage = 20,
  }: {
    where?: Prisma.ArticleWhereInput;
    orderBy?: Prisma.ArticleOrderByWithRelationInput;
    page?: number;
    perPage?: number;
  }) {
    const paginate: PaginateFunction = paginator({ perPage });

    return await paginate(
      this.prisma.article,
      {
        where,
        orderBy,
      },
      {
        page,
      },
    );
  }

  async create(payload: any) {
    return await this.prisma.article.create({
      data: {
        ...payload,
        content: JSON.stringify(payload.content),
      },
    });
  }

  async update(id: number, payload: any) {
    return await this.prisma.article.update({
      where: {
        id,
      },
      data: {
        ...payload,
        content: JSON.stringify(payload.content),
      },
    });
  }

  async detail(id: number) {
    const result = await this.prisma.article.findFirst({
      where: {
        id,
      },
    });

    return {
      ...result,
      content: JSON.parse(result.content),
    };
  }
}
