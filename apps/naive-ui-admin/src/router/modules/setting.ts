import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { SettingOutlined } from '@vicons/antd';
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
    path: '/setting',
    name: 'Setting',
    redirect: '/setting/account',
    component: Layout,
    meta: {
      title: '系统设置',
      icon: renderIcon(SettingOutlined),
      sort: 5,
    },
    children: [
      {
        path: 'market',
        name: 'setting-market',
        meta: {
          title: '市场配置',
        },
        component: () => import('@/views/setting/market/index.vue'),
      },
      {
        path: 'market/create',
        name: 'create-market',
        meta: {
          title: '添加市场',
          hidden: true,
        },
        component: () => import('@/views/setting/market/action.vue'),
      },
      {
        path: 'market/:id',
        name: 'update-market',
        meta: {
          title: '编辑市场',
          hidden: true,
        },
        component: () => import('@/views/setting/market/action.vue'),
      },
      {
        path: 'gathering',
        name: 'setting-gathering',
        meta: {
          title: '收款商户',
        },
        component: () => import('@/views/setting/gathering/index.vue'),
      },
      {
        path: 'upgrade',
        name: 'setting-upgrade',
        meta: {
          title: 'app更新配置',
        },
        component: () => import('@/views/setting/upgrade/index.vue'),
      },
    ],
  },
];

export default routes;
