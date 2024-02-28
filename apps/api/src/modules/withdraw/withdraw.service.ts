import { Member, RechargeType } from '@loar/database';
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
        const { price } = await this.tool.priceConversion({
          from: stockMarket.currency,
          to: withdraw.cryptoType,
          money,
        });

        const balance = new Decimal(account.balance).sub(new Decimal(price));

        if (balance.lt(0)) {
          throw new BadRequestException('Failed');
        }

        await this.prisma.withdraw.update({
          where: {
            id: withdraw.id,
          },
          data: {
            status: 1,
            convertMoney: new Decimal(price),
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
      }
    } catch (error) {}
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
}
