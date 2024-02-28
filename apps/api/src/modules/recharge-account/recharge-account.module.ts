import { Module } from '@nestjs/common';
import { RechargeAccountController } from './recharge-account.controller';
import { RechargeAccountService } from './recharge-account.service';

@Module({
  controllers: [RechargeAccountController],
  providers: [RechargeAccountService]
})
export class RechargeAccountModule {}
