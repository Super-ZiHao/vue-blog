type HistoryDataListType = {
  id: number;
  title: string;
  path?: string;
  time: string;
  synopsis?: string;
};

export const HistoryDataList: HistoryDataListType[] = [
  {
    id: 0,
    title: 'React-Hooks',
    time: '2021-12-07'
  },
  {
    id: 1,
    title: 'redux',
    time: '2021-12-13'
  },
  {
    id: 2,
    title: 'react-redux',
    time: '2021-12-14'
  },
  {
    id: 3,
    title: 'redux-thunk',
    time: '2021-12-15'
  },
  {
    id: 2,
    title: 'React-Router',
    synopsis: '路由',
    time: '2021-12-20'
  },
  {
    id: 11,
    title: 'TypeScript',
    path: 'typescript',
    time: '2021-12-23'
  },
  {
    id: 12,
    title: 'Sass',
    path: 'sass',
    time: '2022-02-03'
  },
];

export const haveLearning: number[] = [11, 12];
