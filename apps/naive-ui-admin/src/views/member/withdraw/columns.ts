import { BasicColumn } from '@/components/Table';
import dayjs from 'dayjs';
import { NTag } from 'naive-ui';
import { h } from 'vue';

export const columns: BasicColumn<any>[] = [
  {
    title: '用户ID',
    key: 'memberId',
    width: 100,
  },
  {
    title: '邮箱',
    key: 'member.email',
  },
  {
    title: '市场',
    key: 'market',
  },
  {
    title: '充值方式',
    key: 'type',
    render(row) {
      const types = {
        CRYPTO: {
          type: 'success',
          title: '加密货币',
        },
        CARD: {
          type: 'primary',
          title: '银行卡',
        },
      };
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
    title: '银行卡',
    key: 'card.detail.name',
    render(row) {
      return row.type === 'CARD'
        ? h('div', {}, [
            h('div', { class: 'flex flex-row items-center gap-x-3' }, [
              h('div', { class: 'w-[60px] text-right' }, '开户行:'),
              h('div', row.card.detail.bank),
            ]),
            h('div', { class: 'flex flex-row items-center gap-x-3' }, [
              h('div', { class: 'w-[60px] text-right' }, '账户名:'),
              h('div', row.card.detail.accountName),
            ]),
            h('div', { class: 'flex flex-row items-center gap-x-3' }, [
              h('div', { class: 'w-[60px] text-right' }, '账户:'),
              h('div', row.card.detail.account),
            ]),
            h('div', { class: 'flex flex-row items-center gap-x-3' }, [
              h('div', { class: 'w-[60px] text-right' }, '银行代码:'),
              h('div', row.card.detail.code),
            ]),
          ])
        : '-';
    },
  },
  {
    title: '虚拟币',
    key: 'card.detail.account',
    render(row) {
      return row.type === 'CRYPTO'
        ? h('div', {}, [
            h('div', { class: 'flex flex-row items-center gap-x-3' }, [
              h('div', { class: 'w-[30px] text-right' }, '币种:'),
              h('div', row.card.detail.account),
            ]),
            h('div', { class: 'flex flex-row items-center gap-x-3' }, [
              h('div', { class: 'w-[30px] text-right' }, '网络:'),
              h('div', row.card.detail.network),
            ]),
            h('div', { class: 'flex flex-row items-center gap-x-3' }, [
              h('div', { class: 'w-[30px] text-right' }, '地址:'),
              h('div', row.card.detail.address),
            ]),
          ])
        : '-';
    },
  },
  {
    title: '余额',
    key: 'card.detail.account',
    render(row) {
      return Object.keys(row.member.accountBalance).map((key) => {
        const current = row.member.accountBalance[key];
        return h('div', {}, [
          h('div', { class: 'flex flex-row items-center gap-x-3' }, [
            h('div', { class: 'w-[80px] text-right' }, `${key} 余额:`),
            h('div', current.balance),
          ]),
        ]);
      });
    },
  },
  {
    title: '出金金额',
    key: 'money',
  },
  {
    title: '状态',
    key: 'status',
    render(row) {
      const types: any = {
        0: {
          title: '待审核',
          type: '',
        },
        1: {
          title: '已审核',
          type: 'success',
        },
        '2': {
          title: '已拒绝',
          type: 'error',
        },
      };

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
    title: '提交日期',
    key: 'createdAt',
    render(row) {
      return dayjs(row.createdAt).format('YYYY-MM-DD HH:mm:ss');
    },
  },
];
