import { BasicColumn } from '@/components/Table';

export const columns: BasicColumn<any>[] = [
  {
    title: '版本号',
    key: 'version',
    width: 100,
  },
  {
    title: '类型',
    key: 'type',
    width: 100,
  },
  {
    title: '描述',
    key: 'desc',
    width: 100,
  },
  {
    title: '创建时间',
    key: 'createdAt',
    width: 160,
  },
];
