import { Module } from '@nestjs/common';
import { IndexService } from './index.service';
import { IndexController } from './index.controller';
import { CountryModule } from 'src/providers/country/country.module';
import { StockModule } from '../stock/stock.module';
import { FinanceModule } from 'src/providers/finance/finance.module';

@Module({
  imports: [CountryModule, StockModule, FinanceModule],
  providers: [IndexService],
  controllers: [IndexController],
})
export class IndexModule {}
