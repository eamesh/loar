import { BasicColumn } from '@/components/Table';
import { NImage } from 'naive-ui';
import { h } from 'vue';

export const columns: BasicColumn<any>[] = [
  {
    title: '新闻名称',
    key: 'title',
    width: 100,
  },
  {
    title: '缩略图',
    key: 'thumb',
    width: 100,
    render(row) {
      return h(NImage, {
        src: `${import.meta.env.VITE_GLOB_API_URL}/${row.thumb}`,
        width: 50,
      });
    },
  },
  {
    title: '创建时间',
    key: 'createdAt',
    width: 100,
  },
];
