import { Module } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';
import { UsStockService } from './type/us-stock.service';
import { MarketController } from './market/market.controller';
import { MarketService } from './market/market.service';
import { HandleStockService } from './logic/handle-stock.service';
import { ShuhaiModule } from 'src/providers/shuhai/shuhai.module';
import { StockSubscribeService } from './subcrib/stock-subcribe.service';
import { SymbolService } from './symbol/symbol.service';
import { SymbolController } from './symbol/symbol.controller';
import { StockResourceController } from './resource/stock-resource.controller';
import { StockResourceService } from './resource/stock-resource.service';

@Module({
  imports: [ShuhaiModule],
  providers: [
    StockService,
    UsStockService,
    MarketService,
    HandleStockService,
    StockSubscribeService,
    SymbolService,
    StockResourceService,
  ],
  controllers: [
    StockController,
    MarketController,
    SymbolController,
    StockResourceController,
  ],
  exports: [StockService, UsStockService],
})
export class StockModule {}
