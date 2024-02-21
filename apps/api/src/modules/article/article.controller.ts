import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ArticleService } from './article.service';
import { UserGuard } from '../user/guard/user.guard';

@Controller('article')
export class ArticleController {
  constructor(private readonly article: ArticleService) {}

  @Post('list')
  async getList(@Body() payload: any) {
    // eslint-disable-next-line prefer-const
    let { page, pageSize, lang, market } = payload;

    const maps = {
      en: 'US',
      'zh-Hant': 'HKEX',
    };

    if (lang) {
      market = maps[lang];
    }

    const where: any = {};
    const params = { market };
    Object.keys(params).forEach((key) => {
      if (params[key] !== '' && params[key] !== undefined)
        where[key] = params[key];
    });

    const { data, meta } = await this.article.getList({
      where,
      orderBy: {
        createdAt: 'desc',
      },
      page,
      perPage: pageSize,
    });

    return {
      page: meta.currentPage,
      pageSize: meta.perPage,
      pageCount: meta.lastPage,
      itemCount: meta.total,
      list: data,
    };
  }

  @Get(':id')
  async detail(@Param('id') id: number) {
    return await this.article.detail(id);
  }

  @Post()
  @UseGuards(UserGuard)
  async create(@Body() payload: any) {
    return await this.article.create(payload);
  }

  @Post(':id')
  @UseGuards(UserGuard)
  async update(@Body() payload: any, @Param('id') id: number) {
    return await this.article.update(id, payload);
  }
}
