import { isBlogMenu, menuList, menuListType } from '@/constant/menu';
import { useBlogMenuList } from '@/utils/hooks';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

// 将筛选出来的进行对象修正
const routeList = useBlogMenuList().value.map(item => {
  return {
    path: `${item.path}`,
    component: () => import(`../views/${item.title}.vue`)
  };
});

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/blog',
    component: () => import('@/views/Blog.vue'),
    redirect: `/blog/${routeList[0].path}`,
    children: [...routeList]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
