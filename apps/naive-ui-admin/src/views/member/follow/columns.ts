import { BasicColumn } from '@/components/Table';

export const columns: BasicColumn<any>[] = [
  {
    title: '用户ID',
    key: 'id',
    width: 100,
  },
  {
    title: '订单号',
    key: 'no',
    width: 100,
  },
  {
    title: '市场',
    key: 'market',
    width: 100,
  },
  {
    title: '变动之前',
    key: 'before',
  },
  {
    title: '变动之后',
    key: 'after',
    width: 160,
  },
  {
    title: '创建时间',
    key: 'createdAt',
    width: 160,
  },
];
