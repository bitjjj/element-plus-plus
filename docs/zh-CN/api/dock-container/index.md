# DockContainer 停靠容器

<script setup>
import Basic from '/examples/dock-container/basic.vue'
import BasicSource from '/examples/dock-container/basic.vue?raw'
import Header from '/examples/dock-container/header.vue'
import HeaderSource from '/examples/dock-container/header.vue?raw'
</script>

主要用来配合ModelessDialog使用。在ModelessDialog折叠后，收纳在此容器中。如果需要全局保持，请把此组件放在和根 `router-view` 同级。

## 基础用法 <play :source-code="BasicSource" />

只有通过 `ModelessDialogManager` 创建的的对话框才能收纳在此容器中。点击容器内卡片，将自动还原此前收纳的 `ModelessDialog` 实例。

<Basic />

:::details `snapshot` 为 `true` 时，会自动使用html2canvas进行截图，可能造成卡顿，请谨慎使用 `true` 值。当snapshot为对象时，type可选值为`image`，`video`，`audio`。当 `snapshot` 为 `string` 时，过长的文本会被自动截掉。
<<< @/examples/dock-container/basic.vue
:::

## 自定义ModelessDialog header <play :source-code="HeaderSource" />

使用 `header slot` 时，DockContainer容器中显示的title为 `panel-header` DOM元素的innerText值。

<Header />

:::details 示例代码
<<< @/examples/dock-container/header.vue
:::


## Attributes

| 参数        | 说明             | 类型   | 可选值 | 默认值 |
| ----------- | ---------------- | ------ | ------ | ------ |
| model-value / v-model | 是否显示对话框 | boolean  | —   | —      |
| width                 | 容器的宽度，在左右侧时起作用 | string | —  | -   |
| height                | 容器的高度，在顶底部时起作用 | string | — | -   |
| item-width            | 容器中每一项的宽度 | string | —  | 150px   |
| item-height           | 容器中每一项的高度 | string | — | 150px   |
| custom-class          | 容器的自定义类名 | string | — | —      |
| open-delay            | 容器打开的延时时间，单位毫秒 | number | —  | 0      |
| close-delay           | 容器关闭的延时时间，单位毫秒 | number | —   | 0      |
| before-close          | 关闭前的回调，会暂停对话框的关闭 | function(done)，done 用于关闭 Dialog | — | —      |
| animation-name        | 容器动画类型 | string | - | 根据不同的位置，会有不同的默认值     |
| z-index               | 自定义层级 | number | - | -      |
| placement             | 位置 | string | bottom / top / left / right | bottom      |


## Slots

| 名称  | 说明 |
| ----------- | -------------- |
| default     | 自定义内容，参数为data: `array<{id, title, snapshot }>` |
| dock-item     | 自定义每项内容，参数为item：`{id, title, snapshot }` |

## Events

| 事件名称 | 说明                    | 回调参数 |
| -------- | ----------------------- | -------- |
| open     | 容器打开的回调           | —        |
| opened   | 容器打开动画结束时的回调 | —        |
| close    | 容器关闭的回调           | —        |
| closed   | 容器关闭动画结束时的回调 | —        |
| item-closed    | 容器中项目关闭的回调           | (item, items)：关闭的项目，显示的项目        |
| item-added   | 容器中项目添加的回调 | (item, items)：添加的项目，显示的项目         |
| item-restored   | 容器中项目还原的回调 | (item, items)：还原的项目，显示的项目         |
