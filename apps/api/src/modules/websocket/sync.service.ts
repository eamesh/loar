import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import * as WebSocket from 'ws';
import { createHash } from 'node:crypto';
import * as zlib from 'zlib';
import * as iconv from 'iconv-lite';
import { StockService } from '../stock/stock.service';
import { EventEmitter2 } from '@nestjs/event-emitter';

const USERNAME = 'emesh';
const PASSWORD = 'emesh';
const MARKET = 'US,HK';

@Injectable()
export class SyncService implements OnModuleInit {
  private ws: WebSocket;

  private isHandle: boolean = false;

  constructor(
    private readonly stockService: StockService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  onModuleInit() {
    const ws = (this.ws = new WebSocket(`ws://real.cnshuhai.com:17381/stock`));

    ws.on('open', this.open.bind(this));
    ws.on('message', this.incomming.bind(this));
  }

  open() {
    const data = this.getSign();
    const params = {
      event: 'login',
      data,
    };

    Logger.log(`认证 Websocket 推送服务`);
    this.ws.send(JSON.stringify(params));
  }

  incomming(data: string) {
    try {
      if (!this.isHandle) {
        const json = JSON.parse(data);
        if (json.event === 'login' && json.data === 'Login successfully') {
          Logger.log(`认证 Websocket 推送服务成功`, SyncService.name);

          const sub = {
            event: 'subscribe',
            data: { market: MARKET },
          };
          Logger.log(`订阅 Topic`, SyncService.name);

          this.ws.send(JSON.stringify(sub));
          setInterval(() => {
            const ping = {
              event: 'ping',
              data: this.getSign(),
            };
            this.ws.send(JSON.stringify(ping));
          }, 60000);
        }

        if (
          json.event === 'subscribe' &&
          json.data === 'Subscription success'
        ) {
          this.isHandle = true;
        }
      } else {
        this.handleData(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  handleData(data: string) {
    try {
      const buffer = zlib.inflateSync(data);
      for (let i = 0; i < buffer.length; i += 156) {
        const formatData = {
          date: buffer.readInt32LE(i),
          symbol: iconv
            .decode(buffer.subarray(i + 4, i + 16), 'gb2312')
            .replace(/\x00/g, ''),
          name: iconv
            .decode(buffer.subarray(i + 16, i + 32), 'gb2312')
            .replace(/\x00/g, ''),
          price3: buffer.readFloatLE(i + 32),
          vol2: buffer.readFloatLE(i + 36),
          openInit: buffer.readFloatLE(i + 40),
          price2: buffer.readFloatLE(i + 44),
          close: buffer.readFloatLE(i + 48),
          open: buffer.readFloatLE(i + 52),
          high: buffer.readFloatLE(i + 56),
          low: buffer.readFloatLE(i + 60),
          newPrice: buffer.readFloatLE(i + 64),
          volume: buffer.readFloatLE(i + 68),
          amount: buffer.readFloatLE(i + 72),
          bp1: buffer.readFloatLE(i + 76),
          bp2: buffer.readFloatLE(i + 80),
          bp3: buffer.readFloatLE(i + 84),
          bp4: buffer.readFloatLE(i + 88),
          bp5: buffer.readFloatLE(i + 92),
          bv1: buffer.readFloatLE(i + 96),
          bv2: buffer.readFloatLE(i + 100),
          bv3: buffer.readFloatLE(i + 104),
          bv4: buffer.readFloatLE(i + 108),
          bv5: buffer.readFloatLE(i + 112),
          sp1: buffer.readFloatLE(i + 116),
          sp2: buffer.readFloatLE(i + 120),
          sp3: buffer.readFloatLE(i + 124),
          sp4: buffer.readFloatLE(i + 128),
          sp5: buffer.readFloatLE(i + 132),
          sv1: buffer.readFloatLE(i + 136),
          sv2: buffer.readFloatLE(i + 140),
          sv3: buffer.readFloatLE(i + 144),
          sv4: buffer.readFloatLE(i + 148),
          sv5: buffer.readFloatLE(i + 152),
        };

        this.handleStock(formatData);
      }
    } catch (error) {
      Logger.error(`Zlib 数据包失败丢弃`);
    }
  }

  async handleStock(stock) {
    this.eventEmitter.emit('HANDLE_STOCK', stock);
    // const { symbol } = stock;

    // 获取市场
    // if (symbol.match(/^hk/i)) {
    //   this.eventEmitter.emit('HK', stock);
    // }

    // if (symbol.match(/^us/i)) {
    //   this.eventEmitter.emit('US', stock);
    // }

    // 分发市场事件
    // console.log(stock);
    // const market = MARKET.toLowerCase();
    // const symbol = stock.symbol.replace(/^[us|\^]/i, '');
    // await this.stockService.createStockRecord(symbol, market, stock);
  }

  getSign() {
    const stamp = Math.floor(Date.now() / 1000);
    const sign = createHash('md5')
      .update(`u=${USERNAME}&p=${PASSWORD}&stamp=${stamp}`)
      .digest('hex')
      .toUpperCase();
    return { u: USERNAME, sign: sign, stamp: stamp };
  }
}
