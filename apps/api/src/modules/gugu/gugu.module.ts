import { Module } from '@nestjs/common';
import { GuguService } from './gugu.service';

@Module({
  providers: [GuguService]
})
export class GuguModule {}
