import { BasicColumn } from '@/components/Table';
import dayjs from 'dayjs';

export const columns: BasicColumn<any>[] = [
  {
    title: '用户ID',
    key: 'memberId',
  },
  {
    title: '用户邮箱',
    key: 'member.email',
  },
  {
    title: '交易市场',
    key: 'market',
  },
  {
    title: '股票代码',
    key: 'stockSymbol.code',
  },
  {
    title: '持仓均价',
    key: 'price',
  },
  {
    title: '持仓数量',
    key: 'amount',
  },
  {
    title: '平仓价格',
    key: 'price',
  },
  {
    title: '保证金',
    key: 'bond',
  },
  {
    title: '预估爆仓价',
    key: 'blast',
  },
  {
    title: '交易模式',
    key: 'mode',
  },
  {
    title: '持仓状态',
    key: 'status',
  },
  {
    title: '开始日期',
    key: 'createdAt',
    render(row) {
      return dayjs(row.createdAt).format('YYYY-MM-DD HH:mm:ss');
    },
  },
];
