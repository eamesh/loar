import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { RechargeAccountService } from './recharge-account.service';
import { UserGuard } from '../user/guard/user.guard';
import { MemberGuard } from '../member/guard/member.guard';

@Controller('recharge-account')
export class RechargeAccountController {
  constructor(private readonly rechargeAccount: RechargeAccountService) {}

  @Post()
  @UseGuards(UserGuard)
  async createAccount(@Body() payload: any) {
    return await this.rechargeAccount.createAccount(payload);
  }

  @Get('enable')
  @UseGuards(MemberGuard)
  async getAccountsByEnable() {
    return await this.rechargeAccount.getAccountsByEnable();
  }

  @Get()
  @UseGuards(UserGuard)
  async getAccounts() {
    return await this.rechargeAccount.getAccounts();
  }

  @Post(':id/disable')
  async disableAccount(@Param('id') id: number) {
    return await this.rechargeAccount.disableAccount(id);
  }
}
