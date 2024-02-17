import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { getPuppeteer } from '@loar/finance';
import * as qs from 'qs';
import { HttpsProxyAgent } from 'https-proxy-agent';
import nodeFetch from 'node-fetch';
import { financeTypes } from 'src/config/finance';

export type IFinanceType = keyof typeof financeTypes;

export interface IRequestParams {
  lang: string;
  crumb?: string;
  region: string;
  formatted?: boolean;
}

@Injectable()
export class FinanceService implements OnModuleInit {
  async onModuleInit() {
    Logger.log(`初始化雅虎 finance 认证`, FinanceService.name);
    await this.initFinance();
  }

  async hot(type: IFinanceType) {
    const params = financeTypes[type];

    return await this.request(params, {
      offset: 0,
      size: 25,
      sortField: 'dayvolume',
      sortType: 'DESC',
      quoteType: 'EQUITY',
      query: {
        operator: 'AND',
        operands: [
          { operator: 'eq', operands: ['region', params.region.toLowerCase()] },
          {
            operator: 'or',
            operands: [
              {
                operator: 'BTWN',
                operands: ['intradaymarketcap', 2000000000, 10000000000],
              },
              {
                operator: 'BTWN',
                operands: ['intradaymarketcap', 10000000000, 100000000000],
              },
              { operator: 'GT', operands: ['intradaymarketcap', 100000000000] },
            ],
          },
          { operator: 'gt', operands: ['dayvolume', 5000000] },
        ],
      },
      userId: '',
      userIdType: 'guid',
    });
  }

  async turnover(type: IFinanceType) {
    const params = financeTypes[type];

    return await this.request(params, {
      offset: 0,
      size: 25,
      sortField: 'dayvolume',
      sortType: 'DESC',
      quoteType: 'EQUITY',
      query: {
        operator: 'AND',
        operands: [
          { operator: 'eq', operands: ['region', params.region.toLowerCase()] },
          {
            operator: 'or',
            operands: [
              {
                operator: 'BTWN',
                operands: ['intradaymarketcap', 2000000000, 10000000000],
              },
              {
                operator: 'BTWN',
                operands: ['intradaymarketcap', 10000000000, 100000000000],
              },
              { operator: 'GT', operands: ['intradaymarketcap', 100000000000] },
            ],
          },
          { operator: 'gt', operands: ['dayvolume', 5000000] },
        ],
      },
      userId: '',
      userIdType: 'guid',
    });
  }

  async gainers(type: IFinanceType) {
    const params = financeTypes[type];

    return await this.request(params, {
      offset: 0,
      size: 25,
      sortField: 'percentchange',
      sortType: 'DESC',
      quoteType: 'EQUITY',
      query: {
        operator: 'AND',
        operands: [
          { operator: 'GT', operands: ['percentchange', 3] },
          { operator: 'eq', operands: ['region', params.region.toLowerCase()] },
          {
            operator: 'or',
            operands: [
              {
                operator: 'BTWN',
                operands: ['intradaymarketcap', 2000000000, 10000000000],
              },
              {
                operator: 'BTWN',
                operands: ['intradaymarketcap', 10000000000, 100000000000],
              },
              { operator: 'GT', operands: ['intradaymarketcap', 100000000000] },
              { operator: 'LT', operands: ['intradaymarketcap', 2000000000] },
            ],
          },
          { operator: 'gte', operands: ['intradayprice', 5] },
          { operator: 'gt', operands: ['dayvolume', 1] },
        ],
      },
      userId: '',
      userIdType: 'guid',
    });
  }

  async losers(type: IFinanceType) {
    const params = financeTypes[type];

    return await this.request(params, {
      offset: 0,
      size: 25,
      sortField: 'percentchange',
      sortType: 'ASC',
      quoteType: 'EQUITY',
      query: {
        operator: 'AND',
        operands: [
          { operator: 'lt', operands: ['percentchange', -2.5] },
          { operator: 'eq', operands: ['region', params.region.toLowerCase()] },
          {
            operator: 'or',
            operands: [
              {
                operator: 'BTWN',
                operands: ['intradaymarketcap', 2000000000, 10000000000],
              },
              {
                operator: 'BTWN',
                operands: ['intradaymarketcap', 10000000000, 100000000000],
              },
              { operator: 'GT', operands: ['intradaymarketcap', 100000000000] },
            ],
          },
          { operator: 'gte', operands: ['intradayprice', 5] },
          { operator: 'gt', operands: ['dayvolume', 20000] },
        ],
      },
      userId: '',
      userIdType: 'guid',
    });
  }

  async initFinance() {
    await getPuppeteer();
  }

  async request(params: IRequestParams, body: any) {
    const agent = new HttpsProxyAgent('http://127.0.0.1:7890');
    let url = 'https://query2.finance.yahoo.com/v1/finance/screener';
    const { cookies, crumb } = await getPuppeteer();

    const search = qs.stringify({
      crumb,
      ...params,
    });

    url = `${url}?${search}`;
    const headers = {
      'content-type': 'application/json',
      cookie: `${cookies.name}=${cookies.value}`,
    };

    const response = await nodeFetch(url, {
      method: 'POST',
      headers,
      agent,
      body: JSON.stringify(body),
    });

    const result = JSON.parse(await response.text());

    return result.finance.result[0];
  }
}
