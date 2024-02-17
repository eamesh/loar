import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { MenuOutlined } from '@vicons/antd';
import { renderIcon } from '@/utils/index';

/**
 * @param name 路由名称, 必须设置,且不能重名
 * @param meta 路由元信息（路由附带扩展信息）
 * @param redirect 重定向地址, 访问这个路由时,自定进行重定向
 * @param meta.disabled 禁用整个菜单
 * @param meta.title 菜单名称
 * @param meta.icon 菜单图标
 * @param meta.keepAlive 缓存该路由
 * @param meta.sort 排序越小越排前
 *
 * */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/member',
    name: 'Member',
    redirect: '/member/enable',
    component: Layout,
    meta: {
      title: '用户管理',
      icon: renderIcon(MenuOutlined),
      sort: 5,
    },
    children: [
      {
        path: 'enable',
        name: 'member-enable',
        meta: {
          title: '开户申请',
        },
        component: () => import('@/views/member/enable/index.vue'),
      },
      {
        path: 'list',
        name: 'member-list',
        meta: {
          title: '会员列表',
        },
        component: () => import('@/views/member/list/index.vue'),
      },
      {
        path: 'create',
        name: 'create-member',
        meta: {
          title: '新增会员',
          hidden: true,
        },
        component: () => import('@/views/member/list/action.vue'),
      },
      {
        path: ':id',
        name: 'update-member',
        meta: {
          title: '编辑会员',
          hidden: true,
        },
        component: () => import('@/views/member/list/action.vue'),
      },
      {
        path: 'raise',
        name: 'member-raise',
        meta: {
          title: '会员出入金',
        },
        component: () => import('@/views/member/raise/index.vue'),
      },
      {
        path: 'follow',
        name: 'member-follow',
        meta: {
          title: '流水记录',
        },
        component: () => import('@/views/member/follow/index.vue'),
      },
    ],
  },
];

export default routes;
