import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import Play from './play.vue'

import type { Theme } from 'vitepress'

import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './style.scss'
import '../../../src/theme/index.scss'

export const define = <T>(value: T): T => value

export default define<Theme>({
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.component('Play', Play)
    app.use(ElementPlus)
  },
})
