import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { WithdrawService } from './withdraw.service';
import { MemberGuard } from '../member/guard/member.guard';
import { Member } from '@loar/database';
import { UserGuard } from '../user/guard/user.guard';

@Controller('withdraw')
export class WithdrawController {
  constructor(private readonly withdraw: WithdrawService) {}

  @Post()
  @UseGuards(MemberGuard)
  async createWithdraw(@Body() payload: any, @Req() req) {
    return await this.withdraw.createWithdraw(payload, req.user as Member);
  }

  @Post('list')
  @UseGuards(UserGuard)
  async getListByUser(@Body() payload: any) {
    const { page, market, email, memberId, pageSize } = payload;

    const where: any = {};
    const params = { market };
    Object.keys(params).forEach((key) => {
      if (params[key] !== '' && params[key] !== undefined)
        where[key] = params[key];
    });

    if (email !== '' && email !== undefined) {
      where.member = {
        email,
      };
    }

    if (memberId !== '' && memberId !== undefined) {
      where.memberId = +memberId;
    }

    const { data, meta } = await this.withdraw.getListByUser({
      where,
      orderBy: {
        createdAt: 'desc',
      },
      page,
      perPage: pageSize,
    });

    return {
      page: meta.currentPage,
      pageSize: meta.perPage,
      pageCount: meta.lastPage,
      itemCount: meta.total,
      list: data,
    };
  }

  @Post(':id/refuse')
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(UserGuard)
  async refuseRecharge(@Param('id') id: number) {
    return await this.withdraw.refuseWithdraw(id);
  }

  @Post(':id/pass')
  @UseGuards(UseGuards)
  async passWithdraw(@Param('id') id: number) {
    return await this.withdraw.passWithdraw(id);
  }
}
