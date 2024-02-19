import { h } from 'vue';
import { NAvatar } from 'naive-ui';
import { BasicColumn } from '@/components/Table';
export const columns: BasicColumn<any>[] = [
  {
    title: '股票ID',
    key: 'id',
    width: 100,
  },
  {
    title: '证券名称',
    key: 'name',
  },
  {
    title: '证券CODE',
    key: 'code',
  },
  {
    title: '证券市场',
    key: 'market',
  },
  // {
  //   title: '状态',
  //   key: 'status',
  // },
];
