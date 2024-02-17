import { BasicColumn } from '@/components/Table';
import { NTag } from 'naive-ui';
import { h } from 'vue';

export const columns: BasicColumn<any>[] = [
  {
    title: '用户ID',
    key: 'memberId',
    width: 100,
  },
  {
    title: '申购编号',
    key: 'no',
    width: 100,
  },
  {
    title: '邮箱',
    key: 'member.email',
    width: 100,
  },
  {
    title: '持仓市场',
    key: 'market',
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
    title: '申购数量',
    key: 'amount',
  },
  {
    title: '申购金额',
    key: 'money',
  },
  {
    title: '状态',
    key: 'type',
    render(row) {
      const types: any = [
        {
          title: '已下单',
          type: 'default',
        },
        {
          title: '已中签',
          type: 'success',
        },
        {
          title: '未中签',
          type: 'warning',
        },
        {
          title: '已取消',
          type: 'error',
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
  // {
  //   title: '中签数量',
  //   key: 'winningAmount',
  // },
  // {
  //   title: '中签金额',
  //   key: 'winningMoney',
  // },
  // {
  //   title: '中签总额',
  //   key: 'winningMoney',
  // },
  // {
  //   title: '实际金额',
  //   key: 'winningMoney',
  // },
  {
    title: '创建时间',
    key: 'createdAt',
    width: 160,
  },
];
