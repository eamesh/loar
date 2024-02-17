import { IRequestParams } from 'src/providers/finance/finance.service';

export const US_FINANCE: IRequestParams = {
  lang: 'en-US',
  region: 'US',
};

export const HK_FINANCE: IRequestParams = {
  lang: 'zh-Hant-HK',
  region: 'HK',
};

export const financeTypes = {
  us: US_FINANCE,
  hk: HK_FINANCE,
};
