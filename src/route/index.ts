import { isOpenPath, menuList, menuListType } from '@/constant/menu';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

// 将 Menu 中的路由筛选出来
const getRouteList: () => menuListType[] = () => {
  const arr: menuListType[] = [];
  menuList.forEach(item => {
    isOpenPath.some(path => {
      if (item.path === path) {
        arr.push(item);
        return true;
      }
      return false;
    });
  });
  return arr;
};
// 将筛选出来的进行对象修正
const routeList = getRouteList().map(item => {
  return {
    path: `/${item.path}`,
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
  ...routeList
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
