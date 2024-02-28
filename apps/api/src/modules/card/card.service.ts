import { Member, RechargeType } from '@loar/database';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/providers/prisma/prisma.service';

@Injectable()
export class CardService {
  constructor(private readonly prisma: PrismaService) {}

  async createCard(payload: any, member: Member) {
    return await this.prisma.memberCard.create({
      data: {
        memberId: member.id,
        ...payload,
      },
    });
  }

  async getList(type: RechargeType, member: Member) {
    return await this.prisma.memberCard.findMany({
      where: {
        memberId: member.id,
        type,
      },
    });
  }

  async delete(id: number) {
    return await this.prisma.memberCard.delete({
      where: {
        id,
      },
    });
  }
}
