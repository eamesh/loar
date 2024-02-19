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
    width: 100,
  },

  {
    title: '股票代码',
    key: 'code',
    width: 150,
  },
  {
    title: '招股价',
    key: 'ipoPrice',
    width: 160,
  },
  {
    title: '发行价(上市)',
    key: 'ipoPrice',
    width: 160,
  },
  {
    title: '认购开始时间',
    key: 'startAt',
    width: 160,
    render(row) {
      return dayjs(row.startAt).format('YYYY-MM-DD');
    },
  },
  {
    title: '认购结束时间',
    key: 'endAt',
    width: 100,
    render(row) {
      return dayjs(row.endAt).format('YYYY-MM-DD');
    },
  },
  {
    title: '发行日',
    key: 'upAt',
    width: 100,
    render(row) {
      return dayjs(row.upAt).format('YYYY-MM-DD');
    },
  },
  {
    title: '添加日期',
    key: 'createdAt',
    width: 100,
    render(row) {
      return dayjs(row.createdAt).format('YYYY-MM-DD');
    },
  },
];
