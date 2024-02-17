import { Injectable } from '@nestjs/common';
import yahooFinance from 'yahoo-finance2';

@Injectable()
export class UsStockService {
  constructor() {}

  async hot() {
    const result = await yahooFinance.dailyGainers({
      count: 5,
      region: 'US',
      lang: 'en-US',
    });

    console.log(result);
  }
}
