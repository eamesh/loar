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
}
