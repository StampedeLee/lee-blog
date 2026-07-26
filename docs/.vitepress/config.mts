import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Lee AI Lab',
  description: 'My AI learning notes',
  base: '/lee-blog/',

  markdown: {
    math: true
  },

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '学习笔记',
        items: [
          { text: 'Transformer', link: '/LLM/Transfomer/主要章节' },
          { text: '杂项', link: '/杂项/搭建' }
        ]
      }
    ],

    sidebar: [
      {
        text: '大语言模型',
        collapsed: false,
        items: [
          {
            text: 'Transformer',
            collapsed: false,
            items: [
              { text: '主要章节', link: '/LLM/Transfomer/主要章节' },
              { text: 'Embedding', link: '/LLM/Transfomer/Transfomer-Embedding' },
              { text: 'MHA、MLA 和 GQA', link: '/LLM/Transfomer/Transfomer-MHA,MLA和GQA' }
            ]
          }
        ]
      },
      {
        text: '杂项',
        collapsed: false,
        items: [
          { text: '博客搭建', link: '/杂项/搭建' }
        ]
      }
    ],

    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    search: {
      provider: 'local'
    }
  }
})
