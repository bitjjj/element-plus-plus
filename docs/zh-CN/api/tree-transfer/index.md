# TreeTransfer 树形穿梭框

<script setup>
import Basic from '/examples/tree-transfer/basic.vue'
import BasicSource from '/examples/tree-transfer/basic.vue?raw'
</script>

可以对树形结构进行选择。

## 基础用法 <play :source-code="BasicSource" />

<Basic />

:::details 过滤函数左右侧同时使用`treeProps`里面定义的`filterNodeMethod`
<<< @/examples/tree-transfer/basic.vue
:::

## Attributes

| 参数                  | 说明         | 类型                    | 可选值 | 默认值               |
| --------------------- | ------------------- | ----------------------- | ------ | -------------------- |
| model-value / v-model | 绑定值     | array                   | —      | —                    |
| tree-props             | 左侧树属性，参见 Tree 组件，nodeKey默认设置为id     | object                  | -      | -     |
| titles                | 自定义列表标  | array                   | -      | ['列表 1', '列表 2'] |
| filter-placeholder    | 搜索框占位  | string                  | —      | 请输入搜索内容       |
| render-content        | 自定义数据项渲染函，参数分别为：h 函数；树节点数据；left/right 标识。同时适用两侧 | function(h, data, mark) | —      | -   |
| filterable            | 是否可搜    | boolean                 | —      | false                |

## Slots

| 名称  | 说明 |
| ------------ | ------------------ |
| left-footer  | 左侧列表底部的内容 |
| right-footer | 右侧列表底部的内容 |

## Methods

| 方法名     | 说明                     | 参数                                 |
| ---------- | ------------------------ | ------------------------------------ |
| clearQuery | 清空某个面板的搜索关键词 | 'left' / 'right'，指定需要清空的面板 |
