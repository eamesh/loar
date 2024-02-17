import { Body, Controller, Post, Query } from '@nestjs/common';
import { KlineDto } from './dto/kline.dto';
import { KlineService } from './kline.service';
import { StockDto } from './dto/stock.dto';

@Controller('kline')
export class KlineController {
  constructor(private readonly klineService: KlineService) {}

  @Post('symbol')
  async symbol(@Body() data: KlineDto, @Query('num') num: number) {
    return await this.klineService.getKline(data, num);
  }

  @Post('stock')
  async stock(@Body() data: StockDto) {
    return await this.klineService.getStock(data);
  }
}
