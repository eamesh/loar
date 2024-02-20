import { BasicColumn } from '@/components/Table';
import dayjs from 'dayjs';
export const columns: BasicColumn<any>[] = [
  {
    title: '证券市场',
    key: 'market',
    width: 100,
  },
  {
    title: '股票名称',
    key: 'name',
  },

  {
    title: '股票代码',
    key: 'code',
  },
  {
    title: '招股价',
    key: 'ipoPrice',
  },
  {
    title: '发行价(上市)',
    key: 'ipoPrice',
  },
  {
    title: '认购开始时间',
    key: 'startAt',
    render(row) {
      return dayjs(row.startAt).format('YYYY-MM-DD');
    },
  },
  {
    title: '认购结束时间',
    key: 'endAt',
    render(row) {
      return dayjs(row.endAt).format('YYYY-MM-DD');
    },
  },
  {
    title: '发行日',
    key: 'upAt',
    render(row) {
      return dayjs(row.upAt).format('YYYY-MM-DD');
    },
  },
  {
    title: '添加日期',
    key: 'createdAt',
    render(row) {
      return dayjs(row.createdAt).format('YYYY-MM-DD');
    },
  },
];
