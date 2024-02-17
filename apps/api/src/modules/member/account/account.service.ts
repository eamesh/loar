import { Member } from '@loar/database';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import { AccountListDto } from '../dto/account-list.dto';

@Injectable()
export class AccountService {
  constructor(private readonly prisma: PrismaService) {}

  async list(member: Member, payload: AccountListDto) {
    const market = await this.prisma.stockMarket.findFirst({
      where: {
        code: payload.market,
      },
    });
    // 获取用户响应钱包金额
    console.log(member, payload);
    return {
      balance: '0.000',
      currency: market.currency,
      lockAccount: 0,
      market: payload.market,
      unbalance: 0,
    };
  }
}
