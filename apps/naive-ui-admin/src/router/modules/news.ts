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
    path: '/news',
    name: 'News',
    // redirect: '/system/menu',
    component: Layout,
    meta: {
      title: '新闻',
      icon: renderIcon(OptionsSharp),
      sort: 10,
    },
    children: [
      {
        path: 'list',
        name: 'news-list',
        meta: {
          title: '新闻',
        },
        component: () => import('@/views/news/list/index.vue'),
      },
      {
        path: 'create',
        name: 'news-create',
        meta: {
          title: '创建新闻',
          hidden: true,
        },
        component: () => import('@/views/news/list/action.vue'),
      },
      {
        path: ':id',
        name: 'news-update',
        meta: {
          title: '编辑新闻',
          hidden: true,
        },
        component: () => import('@/views/news/list/action.vue'),
      },
      {
        path: 'privacy',
        name: 'news-privacy',
        meta: {
          title: '隐私条约',
        },
        component: () => import('@/views/news/privacy/index.vue'),
      },
      {
        path: 'about',
        name: 'news-about',
        meta: {
          title: '公司介绍',
        },
        component: () => import('@/views/news/about/index.vue'),
      },
    ],
  },
];

export default routes;
