import { Decimal } from '@loar/database/generated/prisma-client/runtime/library';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/providers/prisma/prisma.service';

@Injectable()
export class SettingService {
  constructor(private readonly prisma: PrismaService) {}

  async upsert(payload: any) {
    const { key, value } = payload;

    const keySetting = await this.prisma.setting.findFirst({
      where: {
        key,
      },
    });

    if (!keySetting) {
      return await this.prisma.setting.create({
        data: {
          key,
          value: JSON.stringify(value),
        },
      });
    }

    return await this.prisma.setting.update({
      where: {
        id: keySetting.id,
      },
      data: {
        key,
        value: JSON.stringify(value),
      },
    });
  }

  async getKey(key: string) {
    const result = await this.prisma.setting.findFirst({
      where: {
        key,
      },
    });

    if (result) {
      return {
        ...result,
        value: JSON.parse(result.value),
      };
    }
  }

  async handleToUSDT(money: Decimal, currency: string) {
    // 获取兑换比例
    const { value } = await this.getKey('echange_rate');

    const current = new Decimal(value[currency]);

    // 计算港币兑换USDT
    return money.mul(current);
  }

  async handleUSDTto(money: Decimal, currency: string) {
    // 获取兑换比例
    const { value } = await this.getKey('echange_rate');

    const current = new Decimal(value[currency]);

    // 计算港币兑换USDT
    return money.div(current);
  }
}
