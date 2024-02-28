import { Member, Prisma } from '@loar/database';
import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import * as dayjs from 'dayjs';
import { OrderSubscribeDto } from './dto/order-subscribe.dto';
import { v4 as uuidv4 } from 'uuid';
import Decimal from 'decimal.js';
import { SettingService } from 'src/modules/setting/setting.service';

@Injectable()
export class StockSubscribeService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly setting: SettingService,
  ) {}

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

  async getNews(market: string, type: string) {
    // type 1 未到认购时间 或

    const where: any = {
      market,
      status: 1,
    };

    switch (type) {
      case '1':
        // 已开启订阅或未到订阅时间
        where.endAt = {
          gte: dayjs().toDate(),
        };
        break;

      case '4':
        where.endAt = {
          lte: dayjs().toDate(),
        };

        where.upAt = {
          gte: dayjs().toDate(),
        };
        break;
      case '5':
        where.upAt = {
          lte: dayjs().toDate(),
        };
        break;
    }
    console.log(where, typeof type);

    const markets = await this.prisma.stockMarket.findMany();
    const result = await this.prisma.stockSubscribe.findMany({
      where,
    });

    return result.map((item) => {
      const market = markets.find((market) => market.code === item.market);
      const start = item.startAt;
      const end = item.endAt;
      const isEnable = dayjs().isAfter(start) && dayjs().isBefore(end);
      return {
        ...item,
        market,
        isEnable,
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

    const money = new Decimal(payload.money);

    // if (market.code !== 'US') {
    //   money = await this.setting.handleToUSD(money, market.code);
    // }

    // 获取用户余额
    // 冻结余额
    const accountBalance = member.accountBalance;
    const account = accountBalance[subscribe.market];
    const unBalanceWait = money;
    const balance = new Decimal(account.balance).sub(unBalanceWait);
    const unBalance = new Decimal(account.unBalance).add(unBalanceWait);

    if (balance.lt(0)) {
      throw new BadRequestException();
    }

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
    accountBalance[subscribe.market].balance = balance;
    accountBalance[subscribe.market].unBalance = unBalance;
    await this.prisma.member.update({
      where: {
        id: member.id,
      },
      data: {
        accountBalance,
      },
    });

    return result;
    // });
  }

  async updateMemberSubscribeType(id: number, payload: any) {
    const { type } = payload;

    if ([2, 3].includes(type)) {
      return await this.prisma.memberSubscribe.update({
        where: {
          id,
        },
        data: {
          type,
        },
      });
    }

    // 中签
    const subscribe = await this.prisma.memberSubscribe.findFirst({
      where: {
        id,
      },
    });

    let winningAmount = subscribe.amount;
    let winningPrice = subscribe.money;
    let totalWinningPrice = subscribe.money;
    let actualAmount = subscribe.money;

    if (type === 4) {
      // 中签数量
      winningAmount = payload.amount;
      winningPrice = payload.money;
      totalWinningPrice = payload.money;
      actualAmount = payload.money;
    }

    return await this.prisma.memberSubscribe.update({
      where: {
        id,
      },
      data: {
        type,
        winningAmount,
        winningPrice,
        totalWinningPrice,
        actualAmount,
      },
    });
  }

  async getMemberSubscribeList(member: Member, payload: any) {
    const { market } = payload;
    console.log(market);
    return await this.prisma.memberSubscribe.findMany({
      where: {
        memberId: member.id,
      },
    });
  }
}
