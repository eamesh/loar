import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/providers/prisma/prisma.service';

@Injectable()
export class RechargeAccountService {
  constructor(private readonly prisma: PrismaService) {}

  async createAccount(payload: any) {
    try {
      await this.prisma.rechargeAccount.create({
        data: payload,
      });
    } catch (error) {
      throw new BadRequestException('Failed');
    }
  }

  async getAccountsByEnable() {
    return await this.prisma.rechargeAccount.findMany({
      where: {
        status: 0,
      },
    });
  }

  async getAccounts() {
    return await this.prisma.rechargeAccount.findMany();
  }

  async disableAccount(id: number) {
    return await this.prisma.rechargeAccount.update({
      where: {
        id,
      },
      data: {
        status: 1,
      },
    });
  }
}
