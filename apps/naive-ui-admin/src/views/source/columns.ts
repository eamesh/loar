import { h } from 'vue';
import { NAvatar, NTag } from 'naive-ui';
import { BasicColumn } from '@/components/Table';

export const columns: BasicColumn<any>[] = [
  {
    title: '证券市场',
    key: 'market',
    width: 100,
  },
  {
    title: '证券名称',
    key: 'symbol',
  },
  {
    title: '证券代码',
    key: 'symbol',
  },
  {
    title: '点差范围',
    key: 'spreadScope',
    width: 160,
  },
  {
    title: '数量范围',
    key: 'amountScope',
    width: 160,
  },
  {
    title: '开始周期',
    key: 'startAt',
    width: 100,
  },
  {
    title: '结束周期',
    key: 'endAt',
    width: 100,
  },
  {
    title: '过期状态',
    key: 'type',
    render(row) {
      const types: any = [
        {
          title: '超期',
          type: '',
        },
        {
          title: '正常',
          type: 'success',
        },
      ];

      return h(
        NTag,
        {
          type: types[row.type].type,
        },
        [types[row.type].title]
      );
    },
  },
  {
    title: '启用状态',
    key: 'status',
    render(row) {
      const types: any = [
        {
          title: '下线',
          type: '',
        },
        {
          title: '上线',
          type: 'success',
        },
      ];

      return h(
        NTag,
        {
          type: types[row.type].type,
        },
        [types[row.type].title]
      );
    },
  },
];
