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
      },
    });
  }

  async detail(id: number) {
    const result = await this.prisma.article.findFirst({
      where: {
        id,
      },
    });

    return result;
  }

  async createCrawler(articles: any[], market: string) {
    console.log(articles);
    for (let index = 0; index < articles.length; index++) {
      const article = articles[index];

      // 判断是否已经添加
      const is = await this.prisma.article.findFirst({
        where: {
          source: article.source,
          market,
        },
      });

      if (!is) {
        await this.prisma.article.create({
          data: {
            market,
            title: article.title,
            content: article.content,
            thumb: '',
            crawlerThumb: article.thumb,
            source: article.source,
          },
        });
      }
    }
  }

  async delete(id: number) {
    return await this.prisma.article.delete({
      where: {
        id,
      },
    });
  }
}
