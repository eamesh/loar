import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { MarketService } from './market.service';
import { UserGuard } from 'src/modules/user/guard/user.guard';
import { CreateMarketDto } from './dto/create-market.dto';

@Controller('/stock/market')
export class MarketController {
  constructor(private readonly market: MarketService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getMarkets() {
    return await this.market.getMarkets(
      {
        sort: 'asc',
      },
      {
        online: 1,
      },
    );
  }

  @Post('list')
  @HttpCode(HttpStatus.OK)
  @UseGuards(UserGuard)
  async getMarketLists(@Body() payload: any) {
    const { page, code, currency, pageSize } = payload;

    const where = {};
    const params = { code, currency };
    Object.keys(params).forEach((key) => {
      if (params[key] !== '' && params[key] !== undefined)
        where[key] = params[key];
    });
    console.log(where);
    const { data, meta } = await this.market.getMarketLists({
      where: where,
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

  @Get('admin')
  @HttpCode(HttpStatus.OK)
  @UseGuards(UserGuard)
  async getMarketsByAdmin() {
    return await this.market.getMarkets();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(UserGuard)
  async createMarket(@Body() data: CreateMarketDto) {
    return await this.market.createMarket(data);
  }

  @Put(':id')
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(UserGuard)
  async updateMarket(@Param('id') id: number, @Body() data: any) {
    return await this.market.updateMarket(id, data);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(UserGuard)
  async getMarketDetail(@Param('id') id: number) {
    return await this.market.getMarketDetailById(id);
  }
}
