
type ListType = {
  text: string
  path?: string
  time?: string
}
type ModuleType = {
  title: '每日一问' | '作品集' | '小技巧'
  list: ListType[]
}

export const BlogModule: ModuleType[] = [
  {
    title: '每日一问',
    list: [
      {
        text: '简单的说一下:root',
        time: '2022-04-08',
      },
      {
        text:
          '我们经常看到 a 的 margin-bottom 和 b 的 margin-top 的值重叠了。如何解决？',
        time: '2022-04-11',
      },
      {
        text: '从一个没有滚动条的页面切换到一个有滚动条的页面会发生抖动？',
        time: '2022-04-13',
      },
      {
        text: '什么是重排？重绘？',
        time: '2022-04-15',
      },
      {
        text: '用 display: flex align-items: center 之后发现字体没有垂直居中?',
        time: '2022-04-18',
      },
      {
        text: '回过头复习一下样式的复合写法？',
        time: '2022-04-19',
      },
      {
        text: '从一个没有滚动条的页面切换到一个有滚动条的页面会发生抖动？',
        time: '2022-04-13',
      },
      {
        text: '从一个没有滚动条的页面切换到一个有滚动条的页面会发生抖动？',
        time: '2022-04-13',
      },
    ],
  },
  {
    title: '作品集',
    list: [
      {
        text: '水滴',
      },
      {
        text: '文字充电特效',
        path: 'https://codepen.io/huangzihao3344/pen/YzYjOgQ',
      },
    ],
  },
  {
    title: '小技巧',
    list: [
      {
        text: '关于打印时候可能会用到的一个样式',
      },
    ],
  },
]
