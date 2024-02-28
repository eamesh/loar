import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { WithdrawService } from './withdraw.service';
import { MemberGuard } from '../member/guard/member.guard';
import { Member } from '@loar/database';

@Controller('withdraw')
export class WithdrawController {
  constructor(private readonly withdraw: WithdrawService) {}

  @Post()
  @UseGuards(MemberGuard)
  async createWithdraw(@Body() payload: any, @Req() req) {
    return await this.withdraw.createWithdraw(payload, req.user as Member);
  }

  @Post(':id/pass')
  @UseGuards(UseGuards)
  async passWithdraw() {}
}
