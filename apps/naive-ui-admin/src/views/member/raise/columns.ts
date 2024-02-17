import { BasicColumn } from '@/components/Table';

export const columns: BasicColumn<any>[] = [
  {
    title: '用户ID',
    key: 'id',
    width: 100,
  },
  {
    title: '订单编号',
    key: 'no',
  },
  {
    title: '邮箱',
    key: 'email',
  },
  {
    title: '姓名',
    key: 'username',
  },
  {
    title: '姓名',
    key: 'username',
  },
  {
    title: 'USDT入金地址',
    key: 'usdtAddress',
  },
  {
    title: '证券市场',
    key: 'market',
  },
  {
    title: '收款商户名称',
    key: 'mallName',
  },
  {
    title: '入金金额',
    key: 'incomme',
  },
  {
    title: '状态',
    key: 'status',
  },
  {
    title: '入金分类',
    key: 'type',
  },
  {
    title: '入金备注',
    key: 'remark',
  },
  {
    title: '提交日期',
    key: 'createdAt',
  },
];
