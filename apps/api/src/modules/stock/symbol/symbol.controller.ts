import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { SymbolService } from './symbol.service';
import { UserGuard } from 'src/modules/user/guard/user.guard';

@Controller('stock/symbol')
export class SymbolController {
  constructor(private readonly symbol: SymbolService) {}
  @Post('list')
  @HttpCode(HttpStatus.OK)
  @UseGuards(UserGuard)
  async getStockSymbols(@Body() payload: any) {
    const { page, code, market, pageSize } = payload;
    const { data, meta } = await this.symbol.getSymbols({
      where: {
        code,
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

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(UserGuard)
  async createStockSymbol(@Body() payload: any) {
    return await this.symbol.createStockSymbol(payload);
  }
}
