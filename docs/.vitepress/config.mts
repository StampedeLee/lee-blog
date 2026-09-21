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
          { text: 'RAG', link: '/LLM/RAG/RAG' },
          { text: 'Agent', link: '/LLM/Agent/总览' },
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
              { text: '损失函数与激活函数', link: '/LLM/Transfomer/数学浅析' },
              { text: 'Embedding', link: '/LLM/Transfomer/Transfomer-Embedding' },
              { text: 'MHA、MLA 和 GQA', link: '/LLM/Transfomer/Transfomer-MHA,MLA和GQA' }
            ]
          }
        ]
      },
      {
        text: 'RAG',
        collapsed: false,
        items: [
          { text: 'RAG 基础', link: '/LLM/RAG/RAG' }
        ]
      },
      {
        text: 'Agent',
        collapsed: false,
        items: [
          { text: 'Agent 总览', link: '/LLM/Agent/总览' },
          { text: 'Agent 论文', link: '/LLM/Agent/Agent论文' },
          { text: 'LangGraph', link: '/LLM/Agent/Langgraph' },
          { text: 'Text-to-SQL 优化', link: '/LLM/Agent/Text_to_SQL改进总览' }
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
