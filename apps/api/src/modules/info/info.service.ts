import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';
import { PrismaService } from 'src/providers/prisma/prisma.service';

@Injectable()
export class InfoService {
  constructor(private readonly prisma: PrismaService) {}

  async info(market: string) {
    const startOfYesterday = dayjs().subtract(1, 'day').startOf('day');
    const endOfYesterday = dayjs().subtract(1, 'day').endOf('day');
    const startOfToday = dayjs().startOf('day');
    const endOfToday = dayjs().endOf('day');
    const startOfWeek = dayjs().startOf('week');
    const endOfWeek = dayjs().endOf('week');
    const startOfMonth = dayjs().startOf('month');
    const endOfMonth = dayjs().endOf('month');

    // 用户量
    const memberCount = await this.prisma.member.count();
    // 昨日用户量
    const yesterdayMemberCount = await this.prisma.member.count({
      where: {
        lastLoginTime: {
          lte: endOfYesterday.toDate(),
          gte: startOfYesterday.toDate(),
        },
      },
    });
    // 今日新增用户
    const todayRegisterCount = await this.prisma.member.count({
      where: {
        createdAt: {
          lte: endOfYesterday.toDate(),
          gte: startOfYesterday.toDate(),
        },
      },
    });
    // 本周新增用户
    const weekRegisterCount = await this.prisma.member.count({
      where: {
        createdAt: {
          lte: endOfWeek.toDate(),
          gte: startOfWeek.toDate(),
        },
      },
    });
    // 本月新增用户
    const monthRegisterCount = await this.prisma.member.count({
      where: {
        createdAt: {
          lte: endOfMonth.toDate(),
          gte: startOfMonth.toDate(),
        },
      },
    });
    // 总入金
    const totalRecharge = await this.prisma.recharge.aggregate({
      _sum: {
        passMoney: true,
      },
      where: {
        market,
        status: 1,
      },
    });
    // 总出金
    const totalWithdraw = await this.prisma.withdraw.aggregate({
      _sum: {
        money: true,
      },
      where: {
        market,
        status: 1,
      },
    });
    // 昨天入金量
    const yesterdayRecharge = await this.prisma.recharge.aggregate({
      _sum: {
        passMoney: true,
      },
      where: {
        market,
        status: 1,
        updatedAt: {
          lte: endOfYesterday.toDate(),
          gte: startOfYesterday.toDate(),
        },
      },
    });
    // 今天入金量
    const todayRecharge = await this.prisma.recharge.aggregate({
      _sum: {
        passMoney: true,
      },
      where: {
        market,
        status: 1,
        updatedAt: {
          lte: endOfToday.toDate(),
          gte: startOfToday.toDate(),
        },
      },
    });
    // 本周入金量
    const weekRecharge = await this.prisma.recharge.aggregate({
      _sum: {
        passMoney: true,
      },
      where: {
        market,
        status: 1,
        updatedAt: {
          lte: endOfWeek.toDate(),
          gte: startOfWeek.toDate(),
        },
      },
    });
    // 本月入金量
    const monthRecharge = await this.prisma.recharge.aggregate({
      _sum: {
        passMoney: true,
      },
      where: {
        market,
        status: 1,
        updatedAt: {
          lte: endOfMonth.toDate(),
          gte: startOfMonth.toDate(),
        },
      },
    });
    // 昨天出金量
    const todayWithdraw = await this.prisma.withdraw.aggregate({
      _sum: {
        money: true,
      },
      where: {
        market,
        status: 1,
        updatedAt: {
          lte: endOfToday.toDate(),
          gte: startOfToday.toDate(),
        },
      },
    });
    // 今天出金量
    const yesterdayWithdraw = await this.prisma.withdraw.aggregate({
      _sum: {
        money: true,
      },
      where: {
        market,
        status: 1,
        updatedAt: {
          lte: endOfYesterday.toDate(),
          gte: startOfYesterday.toDate(),
        },
      },
    });
    // 本周出金量
    const weekWithdraw = await this.prisma.withdraw.aggregate({
      _sum: {
        money: true,
      },
      where: {
        market,
        status: 1,
        updatedAt: {
          lte: endOfWeek.toDate(),
          gte: startOfWeek.toDate(),
        },
      },
    });
    // 本月出金量
    const monthWithdraw = await this.prisma.withdraw.aggregate({
      _sum: {
        money: true,
      },
      where: {
        market,
        status: 1,
        updatedAt: {
          lte: endOfMonth.toDate(),
          gte: endOfMonth.toDate(),
        },
      },
    });
    return {
      memberCount,
      yesterdayMemberCount,
      todayRegisterCount,
      weekRegisterCount,
      monthRegisterCount,
      totalRecharge: totalRecharge._sum.passMoney || 0,
      totalWithdraw: totalWithdraw._sum.money || 0,
      yesterdayRecharge: yesterdayRecharge._sum.passMoney || 0,
      todayRecharge: todayRecharge._sum.passMoney || 0,
      weekRecharge: weekRecharge._sum.passMoney || 0,
      monthRecharge: monthRecharge._sum.passMoney || 0,
      todayWithdraw: todayWithdraw._sum.money || 0,
      yesterdayWithdraw: yesterdayWithdraw._sum.money || 0,
      weekWithdraw: weekWithdraw._sum.money || 0,
      monthWithdraw: monthWithdraw._sum.money || 0,
    };
  }
}
