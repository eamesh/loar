import { Module } from '@nestjs/common';
import { UsStockTask } from './task/stock/us/us-stock.task';
import { UsStockEvent } from './event/stock/us/us-stock.event';
import { HttpModule } from '@nestjs/axios';
import { StockModule } from '../stock/stock.module';
import { HkStockTask } from './task/stock/hk/hk-stock.task';
import { HkStockEvent } from './event/stock/hk/hk-stock.event';
import { FinanceModule } from 'src/providers/finance/finance.module';

@Module({
  imports: [HttpModule, StockModule, FinanceModule],
  providers: [UsStockTask, UsStockEvent, HkStockTask, HkStockEvent],
  exports: [],
})
export class ScheduleModule {}
