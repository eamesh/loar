import { BasicColumn } from '@/components/Table';
import dayjs from 'dayjs';
import { NImage, NTag } from 'naive-ui';
import { h } from 'vue';

export const columns: BasicColumn<any>[] = [
  {
    title: '用户ID',
    key: 'id',
    width: 100,
  },
  {
    title: '邮箱',
    key: 'email',
  },
  {
    title: '市场',
    key: 'market',
  },
  {
    title: '上传凭证',
    key: 'screen',
    render(row) {
      console.log(row.screen);
      return row.screen.map((item) => {
        return h(NImage, {
          src: `${import.meta.env.VITE_IMAGE_HOST}/${item}`,
          width: 40,
        });
      });
    },
  },
  {
    title: '入金金额',
    key: 'money',
  },
  {
    title: '已审核金额',
    key: 'rechargeMoney',
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
        '-1': {
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
