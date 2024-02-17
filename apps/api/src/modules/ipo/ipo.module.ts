import { Module } from '@nestjs/common';
import { IpoService } from './ipo.service';
import { IpoController } from './ipo.controller';

@Module({
  providers: [IpoService],
  controllers: [IpoController]
})
export class IpoModule {}
