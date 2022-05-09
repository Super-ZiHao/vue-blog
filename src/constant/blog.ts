import { VueElement } from 'vue'

export type ListType = {
  text: string
  path?: string
  time?: string
}
type ModuleType = {
  title: '每日一问' | '作品集' | '与众不同的样式'
  list: ListType[]
}

export const BlogModule: ModuleType[] = [
  {
    title: '每日一问',
    list: [
      {
        text: ':root 是什么？',
        time: '4-08',
      },
      {
        text: 'a 的 margin-bottom 和 b 的 margin-top 的值重叠了。如何解决？',
        time: '4-11',
      },
      {
        text: '从一个没有滚动条的页面切换到一个有滚动条的页面会发生抖动？',
        time: '4-13',
      },
      {
        text: '什么是重排？重绘？',
        time: '4-15',
      },
      {
        text: '用 flex items-center 之后发现字体没有垂直居中',
        time: '4-18',
      },
      {
        text: '回过头复习一下样式的复合写法？',
        time: '4-19',
      },
      {
        text: 'vmax 和 vmin 是什么？',
        time: '5-07',
      },
      {
        text: 'inset 的作用？',
        time: '5-09',
      },
    ],
  },
  {
    title: '作品集',
    list: [
      {
        text: '水珠',
        path: 'https://codepen.io/huangzihao3344/pen/MWQKdvp',
      },
      {
        text: '文字充电特效',
        path: 'https://codepen.io/huangzihao3344/pen/YzYjOgQ',
      },
    ],
  },
  {
    title: '与众不同的样式',
    list: [
      {
        text: 'pointer-events: none',
        path: '一、pointer-event-none',
      },
      {
        text: 'clip-path',
        path: '二、clip-path',
      },
      {
        text: 'print-color-adjust',
        path: '三、print-color-adjust',
      },
      {
        text: 'overscroll-behavior: contain',
        path: '四、overscroll-behavior-contain',
      },
    ],
  },
]

type iconType = 'TypeScript' | 'CSS'
type ArticleType = {
  title: string
  subtitle?: string
  time: string
  synopsis: string
  front: { path: string; title: string }[]
  icon: iconType
  path: string
}
export const Article: ArticleType[] = [
  {
    title: '关于 TypeScript 的一些小技巧',
    subtitle: 'TypeScript',
    time: '2022-05-01',
    synopsis:
      '此篇文章于本人在学习 TypeScript 后，于工作中实践有感所写，查看本文章需要有一定的 TypeScript 能力。',
    front: [
      {
        path: 'https://super-zihao.github.io/learning/#/notes/typescript',
        title: 'TypeScript',
      },
    ],
    icon: 'TypeScript',
    path: 'lessAndsass',
  },
  {
    title: 'Sass 与 Less 的大同小异',
    subtitle: 'css',
    time: '2021-9-28',
    synopsis:
      '由于工作中使用到了这两种 CSS预编译器 迫使我学会了他们，此文章介绍了他们在使用上的优劣',
    front: [
      {
        path: 'https://super-zihao.github.io/learning/#/notes/sass',
        title: 'Sass',
      },
      {
        path: 'https://super-zihao.github.io/learning/#/notes/less',
        title: 'Less',
      },
    ],
    icon: 'CSS',
    path: 'ts-technique',
  },
]
