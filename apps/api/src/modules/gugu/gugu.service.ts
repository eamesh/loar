import { Injectable, OnModuleInit } from '@nestjs/common';
import axios from 'axios';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import * as opencc from 'node-opencc';

@Injectable()
export class GuguService implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) {}
  onModuleInit() {
    // this.handleUs();
    // this.handleHk();
    // this.handleConvert();
    // this.handleShow();
  }

  async handleUs() {
    const { data } = await axios.get(
      'http://101.200.133.133/t/luckday/USA/index.php?to=listall',
    );

    await Promise.all(
      data.map(async (item) => {
        const [cat, code] = item.code.split('.');
        if (
          !(await this.prisma.stockSymbol.findFirst({
            where: {
              code,
              cat,
            },
          }))
        ) {
          await this.prisma.stockSymbol.create({
            data: {
              code,
              symbol: code,
              showName: item.name2,
              cat,
              market: 'US',
              syncMarket: 'US',
            },
          });
        }
      }),
    );
  }

  async handleHk() {
    const { data } = await axios.get(
      'http://101.200.133.133/t/luckday/HK/index.php?to=list',
    );

    await Promise.all(
      data.map(async (item) => {
        const code = item.code;
        if (
          !(await this.prisma.stockSymbol.findFirst({
            where: {
              code,
            },
          }))
        ) {
          await this.prisma.stockSymbol.create({
            data: {
              code,
              symbol: code,
              showName: item.name2,
              market: 'HKEX',
              syncMarket: 'HK',
            },
          });
        }
      }),
    );
  }

  async handleConvert() {
    const hks = await this.prisma.stockSymbol.findMany({
      where: {
        market: 'HKEX',
      },
    });
    console.log('convert');
    await Promise.all(
      hks.map(async (item) => {
        const showName = opencc.simplifiedToHongKong(
          item.name || item.showName,
        );
        console.log(item.market, showName);
        await this.prisma.stockSymbol.update({
          where: {
            id: item.id,
          },
          data: {
            showName,
            name: showName,
          },
        });
      }),
    );
  }

  async handleShow() {
    const result = await this.prisma.stockSymbol.findMany({
      where: {
        market: 'US',
        name: {
          equals: '',
        },
      },
    });

    console.log(result.length);

    await Promise.all(
      result.map(async (item) => {
        await this.prisma.stockSymbol.update({
          where: {
            id: item.id,
          },
          data: {
            name: item.showName || item.code,
            showName: item.name || item.code,
          },
        });
        console.log(item, result.length);
      }),
    );
  }
}
