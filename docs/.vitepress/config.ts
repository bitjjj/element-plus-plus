import fs from 'fs'
import path from 'path'
import { defineConfig } from 'vitepress'
import Components from 'unplugin-vue-components/vite'
import { hyphenate } from '@vue/shared'

const componentsSrcPath = path.resolve(__dirname, '../../src')
console.log('process.env.NODE_ENV', process.env.NODE_ENV)
export default defineConfig({
  title: "Element Plus Plus",
  description: "Element Plus Extension Components",
  base: process.env.NODE_ENV === 'production' ? '/element-plus-plus/' : '/',
  outDir: './dist',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: `${process.env.NODE_ENV === 'production' ? '/element-plus-plus' : ''}/logo.png`,
        type: 'image/png',
      },
    ],
    [
      'script',
      {},
      fs.readFileSync(path.resolve('./docs/.vitepress', 'lang.js'), 'utf-8')
        .replace('process.env.NODE_ENV', JSON.stringify(process.env.NODE_ENV!)),
    ],
  ],
  themeConfig: {
    logo: '/logo.png',
    search: {
      provider: 'local',
    },
    outline: {
      label: ' '
    },
    nav: [
      { text: 'Element Plus', link: 'https://element-plus.org/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/bitjjj/element-plus-plus' }
    ]
  },
  locales: {
    'zh-CN': {
      label: '中文',
      lang: 'zh-CN',
      link: '/zh-CN',
      themeConfig: {
        sidebar: [
          { text: '更新日志', link: '/zh-CN/changelog/' },
          { text: '组件库介绍', link: '/zh-CN/' },
          { text: '安装使用说明', link: '/zh-CN/install/' },
          {
            text: '表单组件',
            items: [
              { text: 'TreeTransfer 树形穿梭框', link: '/zh-CN/api/tree-transfer/' },
            ]
          },
          { 
            text: '数据展示',
            items: [
              { text: 'Panel 面板', link: '/zh-CN/api/panel/' },
              { text: 'OverflowList 折叠列表', link: '/zh-CN/api/overflow-list/' },
              { text: 'SimpleTable 简单表格', link: '/zh-CN/api/simple-table/' },
            ]
          },
          { 
            text: '反馈组件',
            items: [
              { text: 'AvatarList 头像列表', link: '/zh-CN/api/avatar-list/' },
              { text: 'Banner 通知横幅', link: '/zh-CN/api/banner/' },
              { text: 'ConfirmableButton 双重确认按钮', link: '/zh-CN/api/confirmable-button/' },
              { text: 'DockContainer 停靠容器', link: '/zh-CN/api/dock-container/' },
              { text: 'ModelessDialog 非模态对话框', link: '/zh-CN/api/modeless-dialog/' },
              { text: 'Ripple 水波纹', link: '/zh-CN/api/ripple/' },
              { text: 'Spinner 加载状态', link: '/zh-CN/api/spinner/' },
            ]
          },
          {
            text: '其他',
            items: [
              { text: 'Alias 别名', link: '/zh-CN/api/alias/' },
              { text: 'TextOverflow 文本溢出', link: '/zh-CN/api/text-overflow/' }
            ]
          },
        ],
      }
    },
    'en-US': {
      label: 'English',
      lang: 'en-US',
      link: '/en-US',
      themeConfig: {
        sidebar: [
          { text: 'Changelog', link: '/en-US/changelog/' },
          { text: 'Introduction', link: '/en-US/' },
          { text: 'Installation', link: '/en-US/install/' },
          {
            text: 'Form',
            items: [
              { text: 'TreeTransfer', link: '/en-US/api/tree-transfer/' },
            ]
          },
          { 
            text: 'Data',
            items: [
              { text: 'Panel', link: '/en-US/api/panel/' },
              { text: 'OverflowList', link: '/en-US/api/overflow-list/' },
              { text: 'SimpleTable', link: '/en-US/api/simple-table/' },
            ]
          },
          { 
            text: 'Feedback',
            items: [
              { text: 'AvatarList', link: '/en-US/api/avatar-list/' },
              { text: 'Banner', link: '/en-US/api/banner/' },
              { text: 'ConfirmableButton', link: '/en-US/api/confirmable-button/' },
              { text: 'DockContainer', link: '/en-US/api/dock-container/' },
              { text: 'ModelessDialog', link: '/en-US/api/modeless-dialog/' },
              { text: 'Ripple', link: '/zh-CN/api/ripple/' },
              { text: 'Spinner', link: '/en-US/api/spinner/' },
            ]
          },
          {
            text: 'Others',
            items: [
              { text: 'Alias', link: '/en-US/api/alias/' },
              { text: 'TextOverflow', link: '/en-US/api/text-overflow/' }
            ]
          },
        ],
      }
    }
  },
  markdown: {
    lineNumbers: true,
  },
  vite: {
    resolve: {
      alias: {
        'element-plus-plus': componentsSrcPath,
        '@': componentsSrcPath // 用@代替src
      }
    },
    plugins: [
      Components({
        resolvers: [
          (componentName) => {
            if (componentName.startsWith('Epp')) {
              const name = hyphenate(componentName.slice(3)).toLowerCase()
              return {
                name: componentName,
                from: path.resolve(componentsSrcPath, 'components', name)
              }
            }
          },
        ],
      }) as any
    ],
  },
})
