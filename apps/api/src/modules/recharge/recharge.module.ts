import { Module } from '@nestjs/common';
import { RechargeController } from './recharge.controller';
import { RechargeService } from './recharge.service';

@Module({
  controllers: [RechargeController],
  providers: [RechargeService],
})
export class RechargeModule {}
