# Installation and Usage Instructions

## 使Usage

:::tip
Because it depends on Element Plus, you need to import the styles of Element Plus first, and then import the styles of this component library.
:::

### 1. Import CSS
```ts
import 'element-plus-plus/index.css'
```

:::tip
Choose either full import or on-demand import.
:::

### 2. Full Import of Components
```ts
import ElementPlusPlus from "element-plus-plus"

Vue.use(ElementPlusPlus)
```

### 3. On-Demand Import of Components
You need to use the `unplugin-vue-components` plugin. Please refer to the official documentation.

```ts
// Configuration method for resolvers
name => {
  if (name.startsWith('Epp')) { return { importName: name, path: 'element-plus-plus/es' }; }
}
```

## Installation

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

