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
    title: '有趣的样式',
    path: 'interesting-style'
  },
  {
    id: 3,
    title: '作品集',
    path: 'sample-reels'
  },
  {
    id: 4,
    title: '每日一问',
    path: 'every-day'
  },
  {
    id: 5,
    title: '关于我',
    path: 'aboute'
  }
];

export const isOpenPath: string[] = ['knowledge-milestone', 'interesting-style', 'sample-reels', 'every-day'];
