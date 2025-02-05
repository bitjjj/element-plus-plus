# 安装使用说明

## 使用方式

:::tip
由于依赖于Element Plus，需要先引入Element Plus的样式，在引入本组件库样式
:::

### 1. 引入css
```ts
import 'element-plus-plus/index.css'
```

:::tip
全量引入和按需引入选择一种即可
:::

### 2. 全量引入组件
```ts
import ElementPlusPlus from "element-plus-plus"

Vue.use(ElementPlusPlus)
```

### 3. 按需引入组件
需要使用 `unplugin-vue-components` 插件，请参考官方文档

```ts
// resolvers配置方式
name => {
  if (name.startsWith('Epp')) { return { importName: name, path: 'element-plus-plus/es' }; }
}
```

## 安装方式

### npm

```shell
npm i element-plus-plus@latest
```

### yarn

```shell
yarn add element-plus-plus@latest
```

### pnpm

```shell
pnpm add element-plus-plus@latest
```

