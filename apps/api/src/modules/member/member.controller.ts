import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Req,
  Request,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { MemberEntity } from './entities/member.entity';
import { MemberGuard } from './guard/member.guard';
import { MemberService } from './member.service';
import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';
import { AccountService } from './account/account.service';
import { Member } from '@loar/database';
import { AccountListDto } from './dto/account-list.dto';
import { PasswordDto } from './dto/password.dto';
import { UserGuard } from '../user/guard/user.guard';

@Controller('member')
@UseInterceptors(ClassSerializerInterceptor)
export class MemberController {
  constructor(
    private readonly member: MemberService,
    private readonly accountService: AccountService,
  ) {}
  @Post('signin')
  @HttpCode(HttpStatus.OK)
  async signin(@Body() payload: SigninDto) {
    return await this.member.signin(payload);
  }

  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  async signup(@Body() payload: SignupDto) {
    return await this.member.signup(payload);
  }

  @Get()
  @UseGuards(MemberGuard)
  profile(@Request() request) {
    return new MemberEntity(request.user);
  }

  @Post('account/list')
  @UseGuards(MemberGuard)
  @HttpCode(HttpStatus.OK)
  async account(@Req() req, @Body() payload: AccountListDto) {
    return await this.accountService.list(req.user as Member, payload);
  }

  @Post('password')
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(MemberGuard)
  async changePassword(@Body() payload: PasswordDto, @Req() req) {
    return await this.member.changePassword(payload, req.user as Member);
  }

  @Post('list')
  @HttpCode(HttpStatus.OK)
  @UseGuards(UserGuard)
  async getMembers(@Body() payload: any) {
    const { page, id, email, type, pageSize } = payload;

    const where = {};
    const params = { id, email, type };
    Object.keys(params).forEach((key) => {
      if (params[key] !== '' && params[key] !== undefined)
        where[key] = params[key];
    });
    const { data, meta } = await this.member.getMembers({
      where: where,
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
      list: data.map((item: any) => {
        return new MemberEntity(item);
      }),
    };
  }

  @Put(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(UserGuard)
  async updateMemberType(@Param('id') id: number, @Body() payload: any) {
    return await this.member.updateMemberType(payload.type, id);
  }

  @Post('recharge/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(UserGuard)
  async updateMemberRecharge(@Body() payload: any, @Param('id') id: number) {
    return await this.member.changeRecharge(id, payload);
  }

  @Post('recharge/:id/status')
  @UseGuards(UserGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async passMemberRecharge(@Param('id') id: number, @Body() payload: any) {
    return await this.member.passMemberRecharge(id, payload);
  }

  @Post('admin')
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(UserGuard)
  async createMemberByAdmin(@Body() payload: any) {
    return await this.member.createMemberByAdmin(payload);
  }

  @Put(':id/admin')
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(UserGuard)
  async updateMemberByAdmin(@Body() payload: any, @Param('id') id: number) {
    return await this.member.updateMemberByAdmin(id, payload);
  }

  @Get(':id/admin')
  @HttpCode(HttpStatus.OK)
  @UseGuards(UserGuard)
  async getMemberDetail(@Param('id') id: number) {
    return await this.member.getMemberDetail(id);
  }

  @Post('recharge')
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(MemberGuard)
  async recharge(@Body() payload: any, @Req() req) {
    console.log(123);
    return await this.member.uploadRecharge(payload, req.user as Member);
  }

  @Get('recharge')
  @HttpCode(HttpStatus.OK)
  @UseGuards(MemberGuard)
  async getRecharge(@Req() req) {
    return await this.member.getRechargeList(req.user as Member);
  }

  @Post('withdraw')
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(MemberGuard)
  async withdraw(@Body() payload: any, @Req() req) {
    return await this.member.requestWithdraw(payload, req.user as Member);
  }

  @Get('withdraw')
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(MemberGuard)
  async getWithdraw(@Body() payload: any, @Req() req) {
    return await this.member.getWithdrawy(req.user as Member);
  }

  @Post('withdraw/:id/status')
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(UserGuard)
  async updateWithdrawStatus(@Param('id') id: number, @Body() payload: any) {
    return await this.member.updateWithdrawStatus(id, payload);
  }

  @Post('withdraw/list/admin')
  @HttpCode(HttpStatus.OK)
  @UseGuards(UserGuard)
  async getWithdrawListAdmin(@Body() payload: any) {
    const { page, id, email, pageSize } = payload;

    const where: any = {};
    const params = { id };
    Object.keys(params).forEach((key) => {
      if (params[key] !== '' && params[key] !== undefined)
        where[key] = params[key];
    });

    if (email !== '' && email !== undefined) {
      where.member = {
        email,
      };
    }

    const { data, meta } = await this.member.getWithdrawListByAdmin({
      where: where,
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
      list: data.map((item: any) => {
        const { email } = item.member;
        return {
          ...item,
          email,
          money: item.money.toNumber(),
        };
      }),
    };
  }

  @Post('recharge/list/admin')
  @UseGuards(UserGuard)
  async getRechargeListAdmin(@Body() payload: any) {
    const { page, id, email, pageSize } = payload;

    const where: any = {};
    const params = { id };
    Object.keys(params).forEach((key) => {
      if (params[key] !== '' && params[key] !== undefined)
        where[key] = params[key];
    });

    if (email !== '' && email !== undefined) {
      where.member = {
        email,
      };
    }

    const { data, meta } = await this.member.getRechageListByAdmin({
      where: where,
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
      list: data.map((item: any) => {
        const { email } = item.member;
        return {
          ...item,
          email,
          money: item.money.toNumber(),
          rechargeMoney: item.rechargeMoney.toNumber(),
        };
      }),
    };
  }
}
