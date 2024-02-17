import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UserGuard } from 'src/modules/user/guard/user.guard';
import { StockResourceService } from './stock-resource.service';

@Controller('stock/resource')
export class StockResourceController {
  constructor(private readonly stockResource: StockResourceService) {}
  @Post()
  @UseGuards(UserGuard)
  async createStockResource(@Body() payload: any) {
    return await this.stockResource.create(payload);
  }

  @Put(':id')
  @UseGuards(UserGuard)
  async updateStockResource(@Body() payload: any, @Param('id') id: number) {
    return await this.stockResource.update(id, payload);
  }

  @Post('list')
  @UseGuards(UserGuard)
  async getList(@Body() payload: any) {
    const { page, market, pageSize } = payload;
    const { data, meta } = await this.stockResource.getResources({
      where: {
        market,
      },
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
  @UseGuards(UserGuard)
  async getResource(@Param('id') id: number) {
    return await this.stockResource.getById(id);
  }
}
