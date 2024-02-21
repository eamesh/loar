import { BasicColumn } from '@/components/Table';
import dayjs from 'dayjs';
import { NImage } from 'naive-ui';
import { h } from 'vue';

export const columns: BasicColumn<any>[] = [
  {
    title: '新闻名称',
    key: 'title',
    width: 500,
  },
  {
    title: '市场',
    key: 'market',
  },
  {
    title: '缩略图',
    key: 'thumb',
    width: 100,
    render(row) {
      return h(NImage, {
        src: row.crawlerThumb ?? `${import.meta.env.VITE_GLOB_API_URL}/${row.thumb}`,
        width: 50,
      });
    },
  },
  {
    title: '创建时间',
    key: 'createdAt',
    width: 200,
    render(row) {
      return dayjs(row.createdAt).format('YYYY-MM-DD HH:mm:ss');
    },
  },
];
