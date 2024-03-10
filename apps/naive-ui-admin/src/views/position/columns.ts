import { BasicColumn } from '@/components/Table';
import dayjs from 'dayjs';
import { NTag } from 'naive-ui';
import { h } from 'vue';

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
    title: '类型',
    key: 'type',
    render(row) {
      const types: any = [
        {
          title: '市价',
          type: 'success',
        },
        {
          title: '限价',
          type: 'primary',
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
    title: '交易模式',
    key: 'mode',
    render(row) {
      const types: any = [
        {
          title: '开多',
          type: 'success',
        },
        {
          title: '开空',
          type: 'error',
        },
      ];

      return h(
        NTag,
        {
          type: types[row.mode].type,
        },
        [types[row.mode].title]
      );
    },
  },
  {
    title: '持仓状态',
    key: 'status',
    render(row) {
      const types: any = [
        {
          title: '持仓',
          type: 'success',
        },
        {
          title: '平仓',
          type: '',
        },
        {
          title: '待审核',
          type: '',
        },
        {
          title: '已拒绝',
          type: 'error',
        },
        {
          title: '挂单',
          type: 'primary',
        },
      ];

      return h(
        NTag,
        {
          type: types[row.status].type,
        },
        [types[row.status].title]
      );
    },
  },
  {
    title: '开始日期',
    key: 'createdAt',
    width: 170,
    render(row) {
      return dayjs(row.createdAt).format('YYYY-MM-DD HH:mm:ss');
    },
  },
];
