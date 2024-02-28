import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { RechargeService } from './recharge.service';
import { MemberGuard } from '../member/guard/member.guard';
import { Member } from '@loar/database';
import { UserGuard } from '../user/guard/user.guard';

@Controller('recharge')
export class RechargeController {
  constructor(private readonly recharge: RechargeService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(MemberGuard)
  async create(@Body() payload: any, @Req() req) {
    return await this.recharge.createRecharge(payload, req.user as Member);
  }

  @Post('list')
  @UseGuards(UserGuard)
  async getListByUser(@Body() payload: any) {
    const { page, market, pageSize } = payload;

    const where: any = {};
    const params = { market };
    Object.keys(params).forEach((key) => {
      if (params[key] !== '' && params[key] !== undefined)
        where[key] = params[key];
    });

    const { data, meta } = await this.recharge.getListByUser({
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

  @Get('member/list')
  @UseGuards(MemberGuard)
  async getListByMember(@Req() req) {
    return await this.recharge.getListByMember(req.user as Member);
  }

  @Post(':id/pass')
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(UserGuard)
  async passRecharge(@Param('id') id: number, @Body() payload: any) {
    return await this.recharge.passRecharge(id, payload);
  }

  @Post(':id/refuse')
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(UserGuard)
  async refuseRecharge(@Param('id') id: number) {
    return await this.recharge.refuseRecharge(id);
  }
}
