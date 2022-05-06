export interface menuListType {
  id: number;
  title: string;
  path: string;
}
export const menuList: menuListType[] = [
  {
    id: 0,
    title: '首页',
    path: 'home'
  },
  {
    id: 1,
    title: '知识里程碑',
    path: 'knowledge-milestone'
  },
  {
    id: 2,
    title: '黄金屋',
    path: 'index'
  },
  {
    id: 3,
    title: '关于我',
    path: 'aboute'
  }
];

export const isBlogMenu: string[] = ['knowledge-milestone', 'index'];
