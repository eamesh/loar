import { MemberSubscribe } from '@loar/database';
import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import * as dayjs from 'dayjs';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import { HandleStockService } from '../stock/logic/handle-stock.service';
import { BuyDto } from '../stock/logic/dto/buy.dto';
import { PrismaClientKnownRequestError } from '@loar/database/generated/prisma-client/runtime/library';

@Injectable()
export class IpoTask implements OnModuleInit {
  constructor(
    private readonly prisma: PrismaService,
    private readonly logic: HandleStockService,
  ) {}

  async onModuleInit() {
    await this.everyday1AM();
  }

  @Cron(CronExpression.EVERY_10_MINUTES, {
    name: '1minutes',
  })
  async everyday1AM() {
    // 读取用户申购股票是否已经上线  已到期转持仓
    const subscribes = await this.prisma.memberSubscribe.findMany({
      where: {
        position: 0,
        type: {
          in: [1, 4],
        },
      },
    });

    Logger.log(`执行转持仓任务`, IpoTask.name);
    await Promise.all(
      subscribes.map(async (item) => {
        try {
          await this.handlePosition(item);
        } catch (error) {
          console.log(error);
          if (error instanceof PrismaClientKnownRequestError) {
            Logger.error(`转持仓报错, 对应股票代码未被添加到证券列表`);
          }
        }
      }),
    );
  }

  async handlePosition(subscribe: MemberSubscribe) {
    console.log(subscribe);
    const stockSubscribe = await this.prisma.stockSubscribe.findFirst({
      where: {
        id: subscribe.stockSubscribeId,
      },
    });

    // 判断日期
    if (dayjs().isBefore(stockSubscribe.upAt)) return;

    // 转持仓
    console.log(subscribe.market, subscribe.code);
    const stockSymbol = await this.prisma.stockSymbol.findFirstOrThrow({
      where: {
        market: subscribe.market,
        code: subscribe.code,
      },
    });

    const member = await this.prisma.member.findFirst({
      where: {
        id: subscribe.memberId,
      },
    });

    await this.prisma.memberSubscribe.update({
      where: {
        id: subscribe.id,
      },
      data: {
        position: 1,
      },
    });

    // 退还冻结资金
    const winMoney = subscribe.winningPrice;
    const subMoney = subscribe.money;

    const total = subMoney.sub(winMoney);
    console.log(total);
    // 修改余额
    if (total.gt(0)) {
      const unBalance = member.unBalance;
      const balance = member.balance.add(total);
      unBalance.sub(total);
      await this.prisma.member.update({
        where: {
          id: member.id,
        },
        data: {
          balance,
          unBalance: unBalance.lt(0) ? 0 : unBalance,
        },
      });
    }

    // 持仓
    await this.logic.buy(
      {
        price: `${stockSymbol.newPrice}`,
        code: `${stockSymbol.id}`,
        amount: `${subscribe.winningAmount}`,
        market: subscribe.market,
        mode: 0,
        type: 0,
      } as BuyDto,
      member,
      true,
    );
  }
}
