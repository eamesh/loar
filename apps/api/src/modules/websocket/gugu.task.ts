import { Injectable, OnModuleInit } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { WebsocketGateway } from './websocket.gateway';
// import axios from 'axios';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import { RedisService } from 'src/providers/redis/redis.service';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class GuguTask implements OnModuleInit {
  private is = false;
  constructor(
    private readonly gateway: WebsocketGateway,
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
    private readonly eventEmiter: EventEmitter2,
  ) {}

  async onModuleInit() {
    const us = await this.prisma.stockSymbol.findMany({
      where: {
        market: 'US',
      },
    });

    for (let index = 0; index < us.length; index++) {
      const element = us[index];
      await this.redis.client.set(element.code, element.cat);
    }
    console.log('初始化 us redis');
    // throw new Error('Method not implemented.');
    // const response = await axios.get(
    //   'http://101.200.133.133/t/luckday/USA/index.php?to=listall',
    // );
    // console.log(response.data);
    // for (let index = 0; index < response.data.length; index++) {
    //   const element = response.data[index];
    //   const [cat, code] = element.code.split('.');
    //   const symbol = await this.prisma.stockSymbol.findFirst({
    //     where: {
    //       code,
    //     },
    //   });
    //   if (symbol) {
    //     await this.prisma.stockSymbol.update({
    //       where: {
    //         id: symbol.id,
    //         code,
    //       },
    //       data: {
    //         cat,
    //       },
    //     })
    //   }
    // }
    // console.log('done');
  }

  @Cron('*/2 * * * * *', {
    name: 'HK_LOOP',
  })
  async getList() {
    if (this.is) return;
    // 获取已持股股票
    // 获取已订阅topic
    // 拼接 code

    // this.is = true;
    // 获取所有房间
    const rooms = await this.gateway.server.sockets.adapter.rooms;
    //过滤需要的id
    const handles = {};

    const keys = [...rooms.keys()];

    await Promise.all(
      keys.map(async (key) => {
        const match = key.match(/^ws\.market\.(.*)\.(.*)/i);
        if (match) {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const [_, market, symbol] = match;

          !handles[market] && (handles[market] = []);

          if (market === 'US') {
            const cat = await this.redis.client.get(symbol);
            handles[market].push(`${cat}.${symbol}`);
          } else {
            handles[market].push(`${symbol}`);
          }
        }
      }),
    );

    const positions = await this.prisma.stockPosition.groupBy({
      by: ['stockSymbolId'],
      where: {
        status: {
          // 已持仓 挂单
          in: [0, 4],
        },
      },
    });

    const symbolIds = positions.map((item) => item.stockSymbolId);

    const symbols = await this.prisma.stockSymbol.findMany({
      where: {
        id: {
          in: symbolIds,
        },
      },
    });

    if (symbols.length) {
      await Promise.all(
        symbols.map(async (item) => {
          const { market, cat, symbol } = item;
          !handles[market] && (handles[market] = []);
          if (market === 'US') {
            handles[market].push(`${cat}.${symbol}`);
          } else {
            handles[market].push(`${symbol}`);
          }
        }),
      );
    }

    // this.is = false;

    Object.keys(handles).forEach((key) =>
      this.eventEmiter.emit(key, handles[key]),
    );
  }
}
