import { Controller, Get, Headers, Query } from '@nestjs/common';
import { IndexService } from './index.service';
import { IFinanceType } from 'src/providers/finance/finance.service';
import { DEFAULT_TYPE } from 'src/constants/env';

@Controller('index')
export class IndexController {
  constructor(private readonly indexService: IndexService) {}

  @Get()
  async index(@Headers('stock-type') type: IFinanceType) {
    type = type ?? DEFAULT_TYPE;
    return await this.indexService.home(type);
  }

  @Get('stocks')
  async stocks(
    @Headers('stock-type') type: IFinanceType,
    @Query('page') page: number = 1,
  ) {
    type = type ?? DEFAULT_TYPE;

    return await this.indexService.stocks(type, page);
  }

  @Get('country')
  async country() {
    return this.indexService.country();
  }
}
