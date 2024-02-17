import { BasicColumn } from '@/components/Table';

export const columns: BasicColumn<any>[] = [
  {
    title: '市场标识',
    key: 'code',
    width: 100,
  },
  {
    title: '市场交易货币',
    key: 'cur',
    width: 100,
  },
  {
    title: '最大出金',
    key: 'maxWithdraw',
    width: 100,
  },
  {
    title: '最小出金',
    key: 'minWithdraw',
    width: 150,
  },
  {
    title: '手续费率',
    key: 'feeRate',
    width: 160,
  },
  {
    title: '市场头部证券列表',
    key: 'head',
    width: 160,
  },
  {
    title: '排序',
    key: 'sort',
    width: 100,
  },
  {
    title: '市场是否上线',
    key: 'online',
    width: 100,
  },
];