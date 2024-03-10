import {
  Injectable,
  Logger,
  ServiceUnavailableException,
} from '@nestjs/common';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import { CreateStockDto } from './dto/create-stock.dto';
import * as dayjs from 'dayjs';
import { Member, PaginateFunction, Prisma, paginator } from '@loar/database';
import { FavoriteDto } from './dto/favorite.dto';
import { DeleteFavoriteDto } from './dto/delete-favorite.dto';
import { ShuhaiService } from 'src/providers/shuhai/shuhai.service';
import Decimal from 'decimal.js';

const paginate: PaginateFunction = paginator({ perPage: 20 });

@Injectable()
export class StockService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly shuhai: ShuhaiService,
  ) {}

  async search(kwd) {
    return await this.prisma.stockSymbol.findMany({
      where: {
        OR: [
          {
            code: {
              contains: kwd,
            },
          },
          {
            name: {
              contains: kwd,
            },
          },
        ],
      },
    });
  }

  // 获取用户持仓
  async getMemberPositions(member: Member, market: string, status = 0) {
    console.log(status);
    const result = await this.prisma.stockPosition.findMany({
      where: {
        memberId: member.id,
        status,
        market,
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        stockSymbol: true,
      },
    });

    return result;
  }

  async getPostions({
    where,
    orderBy,
    page,
    perPage = 20,
  }: {
    where?: Prisma.StockPositionWhereInput;
    orderBy?: Prisma.StockPositionOrderByWithRelationInput;
    page?: number;
    perPage?: number;
  }) {
    const paginate: PaginateFunction = paginator({ perPage });
    return await paginate(
      this.prisma.stockPosition,
      {
        where,
        orderBy,
        include: {
          stockSymbol: true,
          member: true,
        },
      },
      {
        page,
      },
    );
  }

  async getSubscribeList({
    where,
    orderBy,
    page,
    perPage = 20,
  }: {
    where?: Prisma.StockSubscribeCreateInput;
    orderBy?: Prisma.StockSubscribeOrderByWithRelationInput;
    page?: number;
    perPage?: number;
  }) {
    const paginate: PaginateFunction = paginator({ perPage });
    return await paginate(
      this.prisma.stockSubscribe,
      {
        where,
        orderBy,
      },
      {
        page,
      },
    );
  }

  async getSubscribeOrder({
    where,
    orderBy,
    page,
    perPage = 20,
  }: {
    where?: Prisma.MemberSubscribeWhereInput;
    orderBy?: Prisma.MemberSubscribeOrderByWithRelationInput;
    page?: number;
    perPage?: number;
  }) {
    const paginate: PaginateFunction = paginator({ perPage });

    return await paginate(
      this.prisma.memberSubscribe,
      {
        where,
        orderBy,
        include: {
          member: true,
        },
      },
      {
        page,
      },
    );
  }

  async stockPanel(id: number) {
    try {
      // 获取股票
      const symboldResult = await this.prisma.stockSymbol.findFirst({
        where: {
          id,
        },
      });

      // 获取市场
      const marketResult = await this.prisma.stockMarket.findFirst({
        where: {
          code: symboldResult.market,
        },
      });

      // 获取当前股票价格
      const symbol = symboldResult.cat
        ? `${symboldResult.cat}.${symboldResult.code}`
        : symboldResult.code;
      const detail = await this.shuhai.getSymbolDetail(
        symbol,
        symboldResult.syncMarket,
      );

      return {
        ...symboldResult,
        marketResult,
        detail,
      };
    } catch (error) {
      console.log(error);
    }
  }

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

  async createStockRecord(
    symbol: string,
    market: string,
    data: Prisma.StockRecordCreateWithoutStockInput,
  ) {
    try {
      const stock = await this.prisma.stock.findFirstOrThrow({
        where: {
          symbol,
          type: market,
        },
      });

      const { newPrice, open, close, high, amount, volume, low, date } = data;

      const change = +newPrice - +open;
      const changePercent = `${(change / +open).toFixed(3)}%`;

      await this.prisma.stock.update({
        where: {
          id: stock.id,
        },
        data: {
          newPrice: newPrice.toString(),
          open: open.toString(),
          close: close.toString(),
          high: high.toString(),
          low: low.toString(),
          amount: amount.toString(),
          volume: volume.toString(),
          date: date.toString(),
          change: change.toString(),
          changePercent,
          extra: JSON.stringify(data),
        },
      });

      await this.prisma.stockRecord.create({
        data: {
          newPrice: newPrice.toString(),
          open: open.toString(),
          close: close.toString(),
          high: high.toString(),
          low: low.toString(),
          amount: amount.toString(),
          volume: volume.toString(),
          date: date.toString(),
          extra: JSON.stringify(data),
          stockId: stock.id,
        },
      });
    } catch (error) {
      // console.log(error);
      // Logger.error(`存入记录失败: ${symbol} ${market}}`, StockService.name);
    }
  }

  async findStocks({
    where,
    orderBy,
    page,
  }: {
    where?: Prisma.StockSymbolWhereInput;
    orderBy?: Prisma.StockSymbolOrderByWithRelationInput;
    page?: number;
  }) {
    return paginate(
      this.prisma.stockSymbol,
      {
        where,
        orderBy,
      },
      {
        page,
      },
    );
  }

  async checkFavorite(member: Member, stock: number) {
    const stocks = await this.prisma.stockFavorite.findFirst({
      where: {
        stockSymbolId: stock,
        memberId: member.id,
      },
    });

    return !!stocks;
  }

  async favorite(member: Member, stock: number, { status }: FavoriteDto) {
    const stockInfo = await this.prisma.stockSymbol.findFirst({
      where: {
        id: stock,
      },
    });

    const favorite = await this.prisma.stockFavorite.findFirst({
      where: {
        stockSymbolId: stock,
        memberId: member.id,
      },
    });

    if (status === 0 && favorite) {
      await this.prisma.stockFavorite.delete({
        where: {
          id: favorite.id,
        },
      });
    }

    if (status === 1 && !favorite) {
      const { newPrice, low, high, amount, volume, open, close, sync, date } =
        stockInfo;
      await this.prisma.stockFavorite.create({
        data: {
          memberId: member.id,
          newPrice: newPrice || '0',
          low,
          high,
          amount,
          volume,
          open,
          close,
          extra: sync,
          date,
          createdAt: dayjs().toDate(),
          stockSymbolId: stock,
        },
      });
    }
  }

  async deleteFavoriteByStockIds(member: Member, data: DeleteFavoriteDto) {
    try {
      await this.prisma.stockFavorite.deleteMany({
        where: {
          memberId: member.id,
          stockSymbolId: {
            in: data.ids,
          },
        },
      });
    } catch (error) {
      Logger.error(`批量删除自选失败: ${member.id} - ${data.ids.join()}`);
    }
  }

  async findFavoriteStocks(member: Member) {
    const favorites = await this.prisma.stockFavorite.findMany({
      where: {
        memberId: member.id,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    const stocks = await this.prisma.stockSymbol.findMany({
      where: {
        id: {
          in: favorites.map((item) => item.stockSymbolId),
        },
      },
    });

    return stocks;
  }

  async cancelPositionMember(id: number, memberId: number) {
    const position = await this.prisma.stockPosition.findFirst({
      where: {
        id,
      },
    });
    console.log('quxiao', position);

    if (BigInt(memberId) !== position.memberId) {
      return;
    }
    console.log('quxiao');
    return await this.updatePostionType(id, { status: 3 });
  }

  async updatePostionType(id: number | bigint, payload: any) {
    console.log(id, payload);
    const position = await this.prisma.stockPosition.findFirst({
      where: {
        id,
      },
    });

    if (![0, 4].includes(position.status)) {
      return;
    }

    const { amount, status } = payload;
    let bond = new Decimal(position.bond);
    let refundBond = new Decimal(0);
    console.log(status);
    if (status && +status === 3) {
      console.log('cancel');
      await this.prisma.stockPosition.update({
        where: {
          id,
        },
        data: {
          status,
          bond: '0',
        },
      });
      refundBond = new Decimal(position.bond);
    } else if (amount > 0 && amount <= position.amount) {
      // const newBond = new Decimal(position.price).mul(new Decimal(amount));
      // 保证金
      bond = new Decimal(position.price).mul(new Decimal(amount));
      // 需要退还的保证金
      refundBond = new Decimal(position.bond).sub(bond);

      await this.prisma.stockPosition.update({
        where: {
          id,
        },
        data: {
          amount,
          bond: `${bond.toString()}`,
          // 盘前订单或者限价订单 进入挂单 7
          status: position.isBefore ? 4 : 0,
        },
      });
    }

    const member = await this.prisma.member.findFirst({
      where: {
        id: position.memberId,
      },
    });

    // 返还保证金 增加余额
    const accountBalance = member.accountBalance;
    const account = accountBalance[position.market];
    const unBalance = new Decimal(account.unBalance).sub(refundBond);

    accountBalance[position.market].unBalance = unBalance;
    accountBalance[position.market].balance = new Decimal(
      accountBalance[position.market].balance,
    ).add(refundBond);

    await this.prisma.member.update({
      where: {
        id: member.id,
      },
      data: {
        accountBalance,
      },
    });
  }
}
