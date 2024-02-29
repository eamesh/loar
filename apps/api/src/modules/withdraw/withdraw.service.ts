import {
  Member,
  PaginateFunction,
  Prisma,
  RechargeType,
  paginator,
} from '@loar/database';
import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import { ToolService } from '../tool/tool.service';
import Decimal from 'decimal.js';

@Injectable()
export class WithdrawService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly tool: ToolService,
  ) {}

  async createWithdraw(payload: any, member: Member) {
    try {
      await this.prisma.withdraw.create({
        data: {
          ...payload,
          memberId: member.id,
        },
      });
    } catch (error) {
      console.log(error);
      return new BadRequestException('Failed');
    }
  }

  async passWithdraw(id: number) {
    try {
      const withdraw = await this.prisma.withdraw.findFirst({
        where: {
          id,
        },
      });

      const { market, money } = withdraw;

      const member = await this.prisma.member.findFirst({
        where: {
          id: withdraw.memberId,
        },
      });

      const accountBalance = member.accountBalance;
      const account = accountBalance[market];

      const stockMarket = await this.prisma.stockMarket.findFirst({
        where: {
          code: market,
        },
      });
      if (withdraw.type === RechargeType.CRYPTO) {
        // 换算汇率
        let price = new Decimal(money);

        const card = withdraw.card as any;
        console.log(stockMarket.currency, card.detail.account);
        if (stockMarket.currency !== card.detail.account) {
          const convertPrice = await this.tool.priceConversion({
            from: stockMarket.currency,
            to: card.detail.account,
            money,
          });

          price = new Decimal(convertPrice.price);
        }

        const balance = new Decimal(account.balance).sub(new Decimal(money));

        if (balance.lt(0)) {
          throw new BadRequestException('Failed');
        }

        await this.prisma.withdraw.update({
          where: {
            id: withdraw.id,
          },
          data: {
            status: 1,
            convertMoney: price,
          },
        });

        accountBalance[market].balance = balance;

        await this.prisma.member.update({
          where: {
            id: member.id,
          },
          data: {
            accountBalance,
          },
        });
      } else {
        // 银行卡提现不需要换算 每个市场对应一个货币
        const balance = new Decimal(account.balance).sub(new Decimal(money));
        accountBalance[market].balance = balance;

        await this.prisma.withdraw.update({
          where: {
            id: withdraw.id,
          },
          data: {
            status: 1,
            convertMoney: new Decimal(money),
          },
        });

        await this.prisma.member.update({
          where: {
            id: member.id,
          },
          data: {
            accountBalance,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  // 拒绝提现
  async refuseWithdraw(id: number) {
    return await this.prisma.withdraw.update({
      where: {
        id,
      },
      data: {
        status: 2,
      },
    });
  }

  async getListByUser({
    where,
    orderBy,
    page,
    perPage = 20,
  }: {
    where?: Prisma.WithdrawCreateInput;
    orderBy?: Prisma.WithdrawOrderByWithRelationInput;
    page?: number;
    perPage?: number;
  }) {
    const paginate: PaginateFunction = paginator({ perPage });
    return await paginate(
      this.prisma.withdraw,
      {
        where,
        orderBy,
        include: {
          member: true,
        },
      },
      {
        page,
      },
    );
  }
}
