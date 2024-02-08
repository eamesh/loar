import {
  Injectable,
  Logger,
  ServiceUnavailableException,
} from '@nestjs/common';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import { CreateStockDto } from './dto/create-stock.dto';
import * as dayjs from 'dayjs';

@Injectable()
export class StockService {
  constructor(private readonly prisma: PrismaService) {}

  async createStock(stock: CreateStockDto) {
    try {
      const now = dayjs().toDate();
      const result = await this.prisma.stock.upsert({
        where: {
          code_symbol_type: {
            code: stock.code,
            symbol: stock.symbol,
            type: stock.type,
          },
        },
        create: stock,
        update: {
          ...stock,
          updatedAt: now,
        },
      });

      return result;
    } catch (error) {
      Logger.error(`创建股票失败: ${error}`, StockService.name);
      throw new ServiceUnavailableException('创建股票失败');
    }
  }

  async createManyStock(stocks: CreateStockDto[]) {
    for (let index = 0; index < stocks.length; index++) {
      const stock = stocks[index];

      await this.createStock(stock);
    }
  }
}
