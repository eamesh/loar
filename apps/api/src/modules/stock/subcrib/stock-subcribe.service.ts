import { Member, Prisma } from '@loar/database';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import * as dayjs from 'dayjs';
import { OrderSubscribeDto } from './dto/order-subscribe.dto';
import { v4 as uuidv4 } from 'uuid';
import Decimal from 'decimal.js';

@Injectable()
export class StockSubscribeService {
  constructor(private readonly prisma: PrismaService) {}

  async createNew(payload: Prisma.StockSubscribeUncheckedCreateInput) {
    const { startAt, endAt, upAt, resultAt } = payload;
    return await this.prisma.stockSubscribe.create({
      data: {
        ...payload,
        startAt: dayjs(startAt).toDate(),
        endAt: dayjs(endAt).toDate(),
        upAt: dayjs(upAt).toDate(),
        resultAt: dayjs(resultAt).toDate(),
        status: 1,
        type: 1,
      },
    });
  }

  async getNews(market: string, type: number) {
    const markets = await this.prisma.stockMarket.findMany();
    const result = await this.prisma.stockSubscribe.findMany({
      where: {
        market,
        type: +type,
      },
    });

    return result.map((item) => {
      const market = markets.find((market) => market.code === item.market);

      return {
        ...item,
        market,
      };
    });
  }

  async findById(id: number) {
    const result = await this.prisma.stockSubscribe.findFirst({
      where: {
        id,
      },
    });

    const market = await this.prisma.stockMarket.findFirst({
      where: {
        code: result.market,
      },
    });

    return {
      ...result,
      market,
    };
  }

  async updateSubscribe(id: number, payload: any) {
    return await this.prisma.stockSubscribe.update({
      where: {
        id,
      },
      data: {
        ...payload,
        startAt: dayjs(payload.startAt).toDate(),
        endAt: dayjs(payload.endAt).toDate(),
        resultAt: dayjs(payload.resultAt).toDate(),
        upAt: dayjs(payload.upAt).toDate(),
      },
    });
  }

  async createSubscribeOrder(
    id: number,
    payload: OrderSubscribeDto,
    member: Member,
  ) {
    // await this.prisma.$transaction(async (prisma) => {
    // 获取新股
    const subscribe = await this.prisma.stockSubscribe.findFirst({
      where: {
        id,
      },
    });

    // 剩余数量
    // if (subscribe.remainCirculation <= payload.amount) {
    //   throw new BadRequestException('申请数量过多或过少');
    // }

    // 获取市场
    const market = await this.prisma.stockMarket.findFirst({
      where: {
        code: subscribe.market,
      },
    });

    // 获取用户余额
    // 冻结余额
    const unBalanceWait = new Decimal(payload.money);
    const balance = member.balance.sub(unBalanceWait);
    const unBalance = member.unBalance.add(unBalanceWait);

    // 缩减剩余
    // await this.prisma.stockSubscribe.update({
    //   where: {
    //     id,
    //   },
    //   data: {
    //     remainCirculation: subscribe.remainCirculation - payload.amount,
    //   },
    // });

    // 下单
    const result = await this.prisma.memberSubscribe.create({
      data: {
        market: market.code,
        name: subscribe.name,
        code: subscribe.code,
        amount: +payload.amount,
        money: payload.money,
        no: uuidv4(),
        memberId: member.id,
        stockSubscribeId: subscribe.id,
        status: 1,
      },
    });

    // 修改用户资金
    await this.prisma.member.update({
      where: {
        id: member.id,
      },
      data: {
        balance,
        unBalance,
      },
    });

    return result;
    // });
  }

  async updateMemberSubscribeType(id: number, payload: any) {
    const { type } = payload;
    // 中签
    if (type === 1) {
      const subscribe = await this.prisma.memberSubscribe.findFirst({
        where: {
          id,
        },
      });

      return await this.prisma.memberSubscribe.update({
        where: {
          id,
        },
        data: {
          type,
          winningAmount: subscribe.amount,
          winningPrice: subscribe.money,
          totalWinningPrice: subscribe.money,
          actualAmount: subscribe.amount,
        },
      });
    }

    return await this.prisma.memberSubscribe.update({
      where: {
        id,
      },
      data: {
        type,
      },
    });
  }
}
