type HistoryDataListType = {
  id: number;
  titles: string[];
  path?: string;
  time: string;
  synopsis?: string;
};

export const HistoryDataList: HistoryDataListType[] = [
  {
    id: 0,
    titles: ['React-Hooks'],
    time: '2021-12-07'
  },
  {
    id: 1,
    titles: ['redux', 'react-redux', 'redux-thunk'],
    synopsis: 'Global State',
    time: '2021-12-13'
  },
  {
    id: 2,
    titles: ['React-Router'],
    synopsis: '路由',
    time: '2021-12-20'
  },
  {
    id: 3,
    titles: ['Taro'],
    time: 'xxx'
  },
  {
    id: 4,
    titles: ['Less'],
    time: 'xxx'
  },
  {
    id: 11,
    titles: ['TypeScript'],
    path: 'typescript',
    time: '2021-12-23'
  },
  {
    id: 12,
    titles: ['Sass'],
    path: 'sass',
    time: '2022-02-03'
  }
];

export const haveLearning: number[] = [11, 12];
