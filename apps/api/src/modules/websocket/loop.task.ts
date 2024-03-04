import { Injectable, OnModuleInit } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class LoopTask implements OnModuleInit {
  constructor() {}

  onModuleInit() {
    // throw new Error('Method not implemented.');
  }

  @Cron('*/3 * * * * *', {
    name: 'LOOP_LIST',
  })
  getList() {
    // 获取已持股股票
    // 获取已订阅topic
    // 拼接 code
  }
}
