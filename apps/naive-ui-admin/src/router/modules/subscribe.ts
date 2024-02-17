import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { OptionsSharp } from '@vicons/ionicons5';
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
    path: '/subscribe',
    name: 'Subscribe',
    // redirect: '/system/menu',
    component: Layout,
    meta: {
      title: '新股认购',
      icon: renderIcon(OptionsSharp),
      sort: 6,
    },
    children: [
      {
        path: 'list',
        name: 'subscribe-list',
        meta: {
          title: '新增新股',
        },
        component: () => import('@/views/subscribe/list/index.vue'),
      },
      {
        path: 'create',
        name: 'create-subscribe',
        meta: {
          title: '新增新股',
          hidden: true,
        },
        component: () => import('@/views/subscribe/list/action.vue'),
      },
      {
        path: ':id',
        name: 'update-subscribe',
        meta: {
          title: '编辑新股',
          hidden: true,
        },
        component: () => import('@/views/subscribe/list/action.vue'),
      },
      {
        path: 'order',
        name: 'subscribe-order',
        meta: {
          title: '新增认购',
        },
        component: () => import('@/views/subscribe/order/index.vue'),
      },
    ],
  },
];

export default routes;
