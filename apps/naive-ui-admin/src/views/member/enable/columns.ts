import { BasicColumn } from '@/components/Table';
import dayjs from 'dayjs';
import { NTag } from 'naive-ui';
import { h } from 'vue';

export const columns: BasicColumn<any>[] = [
  {
    title: '用户ID',
    key: 'id',
    width: 80,
  },
  {
    title: '邮箱',
    key: 'email',
  },
  {
    title: '审核状态',
    key: 'type',
    render(row: any) {
      const types: any = [
        {
          title: '待审核',
          type: '',
        },
        {
          title: '审核通过',
          type: 'success',
        },
        {
          title: '审核拒绝',
          type: 'error',
        },
      ];
      return h(
        NTag,
        {
          type: types[row.type].type,
        },
        types[row.type].title
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
