import { Module } from '@nestjs/common';
import { KlineController } from './kline.controller';
import { KlineService } from './kline.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [KlineController],
  providers: [KlineService],
})
export class KlineModule {}
