import { Member, PaginateFunction, Prisma, paginator } from '@loar/database';
import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import { ToolService } from '../tool/tool.service';
import Decimal from 'decimal.js';

@Injectable()
export class RechargeService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly tool: ToolService,
  ) {}

  async createRecharge(payload: any, member: Member) {
    try {
      await this.prisma.recharge.create({
        data: {
          ...payload,
          memberId: member.id,
        },
      });
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Failed');
    }
  }

  async getListByMember(member: Member) {
    return await this.prisma.recharge.findMany({
      where: {
        memberId: member.id,
      },
    });
  }

  async getListByUser({
    where,
    orderBy,
    page,
    perPage = 20,
  }: {
    where?: Prisma.RechargeWhereInput;
    orderBy?: Prisma.RechargeOrderByWithRelationInput;
    page?: number;
    perPage?: number;
  }) {
    const paginate: PaginateFunction = paginator({ perPage });
    return await paginate(
      this.prisma.recharge,
      {
        where,
        orderBy,
        include: {
          // member: true,
        },
      },
      {
        page,
      },
    );
  }

  async passRecharge(id: number, payload: any) {
    try {
      const recharge = await this.prisma.recharge.findFirst({
        where: {
          id,
        },
        include: {
          member: true,
        },
      });

      if (recharge.status !== 0) {
        throw new BadRequestException('Failed');
      }

      const { money } = payload;
      const market = await this.prisma.stockMarket.findFirst({
        where: {
          code: recharge.market,
        },
      });
      const params = {
        from: recharge.account,
        to: market.currency,
        money,
      };

      let price = new Decimal(money);
      console.log(params);
      if (params.from !== params.to) {
        const convertPrice = await this.tool.priceConversion(params);
        price = new Decimal(convertPrice.price);
      }

      await this.prisma.recharge.update({
        where: {
          id: recharge.id,
        },
        data: {
          passMoney: money,
          convertMoney: price,
          status: 1,
        },
      });

      // 修改余额
      const accountBalance = recharge.member.accountBalance;
      console.log(market);

      const account = accountBalance[market.code];
      const balance = new Decimal(account.balance).add(price);

      accountBalance[market.code].balance = balance;

      await this.prisma.member.update({
        where: {
          id: recharge.memberId,
        },
        data: {
          accountBalance,
        },
      });
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Failed');
    }
  }

  // 拒绝充值
  async refuseRecharge(id: number) {
    const recharge = await this.prisma.recharge.findFirst({
      where: {
        id,
      },
      include: {
        member: true,
      },
    });

    if (recharge.status !== 0) {
      throw new BadRequestException('Failed');
    }

    return await this.prisma.recharge.update({
      where: {
        id,
      },
      data: {
        status: 2,
      },
    });
  }
}
