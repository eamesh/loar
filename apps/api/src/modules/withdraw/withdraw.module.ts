import { Module } from '@nestjs/common';
import { WithdrawService } from './withdraw.service';
import { WithdrawController } from './withdraw.controller';

@Module({
  providers: [WithdrawService],
  controllers: [WithdrawController],
})
export class WithdrawModule {}
