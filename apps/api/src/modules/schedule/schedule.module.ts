import { Module } from '@nestjs/common';
import { UsStockTask } from './task/stock/us/us-stock.task';
import { UsStockEvent } from './event/stock/us/us-stock.event';
import { HttpModule } from '@nestjs/axios';
import { StockModule } from '../stock/stock.module';
import { HkStockTask } from './task/stock/hk/hk-stock.task';
import { HkStockEvent } from './event/stock/hk/hk-stock.event';
import { FinanceModule } from 'src/providers/finance/finance.module';
import { IpoTask } from './ipo.task';
import { UsNewsTask } from './news/us-news.task';
import { HkNewsTask } from './news/hk-news.task';
import { ArticleModule } from '../article/article.module';

@Module({
  imports: [HttpModule, StockModule, FinanceModule, StockModule, ArticleModule],
  providers: [
    UsStockTask,
    UsStockEvent,
    HkStockTask,
    HkStockEvent,
    IpoTask,
    UsNewsTask,
    HkNewsTask,
  ],
  exports: [],
})
export class ScheduleModule {}
