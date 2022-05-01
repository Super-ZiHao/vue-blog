import { isBlogMenu, menuList, menuListType } from '@/constant/menu';
import { ref } from 'vue';

/**
 * @returns 博客的Menu
 */
export const useBlogMenuList = () => {
  const blogMenuList = ref<Array<menuListType>>([]);
  menuList.forEach(item => {
    if (item.path === isBlogMenu.find(menu => menu === item.path)) {
      blogMenuList.value.push(item);
    }
  });
  return blogMenuList;
};
