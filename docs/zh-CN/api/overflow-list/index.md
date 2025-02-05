# OverflowList 折叠列表

<script setup>
import Basic from '/examples/overflow-list/basic.vue'
import More from '/examples/overflow-list/more.vue'
import Expand from '/examples/overflow-list/expand.vue'
import BasicSource from '/examples/overflow-list/basic.vue?raw'
import MoreSource from '/examples/overflow-list/more.vue?raw'
import ExpandSource from '/examples/overflow-list/expand.vue?raw'
</script>

通常用于表格操作列，当操作项比较多时，可利用此组件进行操作的显隐。目前仅支持子元素上使用v-if指令，不支持v-show指令。

## 基础用法 <play :source-code="BasicSource" />

<Basic />

:::details 具体用法请看代码，组件内一定要嵌入内容
<<< @/examples/overflow-list/basic.vue
:::

## 自定义More图标 <play :source-code="MoreSource" />

<More />

:::details 示例代码
<<< @/examples/overflow-list/more.vue
:::

## 展开方式 <play :source-code="ExpandSource" />

<Expand />

:::details 示例代码
<<< @/examples/overflow-list/expand.vue
:::

## Attributes

| 参数        | 说明             | 类型   | 可选值 | 默认值 |
| ----------- | ---------------- | ------ | ------ | ------ |
| show-count       | 显示的数量         | number | —      | 1      |
| show-type       | 显示的类型         | tooltip / expand | —      | tooltip    |
| dropdown-props  | Dropdown组件的属性，参考 Element Plus Dropdown组件 | object | —      | —      |

## Slots

| 名称  | 说明 |
| ----------- | -------------- |
| -     | 默认内容插槽 |
| more     | 自定more元素的展示，参数为`{ hasMore, show, hide }` |


