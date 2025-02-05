# ModelessDialog 非模态对话框

<script setup>
import Basic from '/examples/modeless-dialog/basic.vue'
import Bounding from '/examples/modeless-dialog/bounding.vue'
import Manager from '/examples/modeless-dialog/manager.vue'
import ManagerApi from '/examples/modeless-dialog/manager-api.vue'
import Reactive from '/examples/modeless-dialog/reactive.vue'
import Example from '/examples/modeless-dialog/example.vue'
import BasicSource from '/examples/modeless-dialog/basic.vue?raw'
import BoundingSource from '/examples/modeless-dialog/bounding.vue?raw'
import ManagerSource from '/examples/modeless-dialog/manager.vue?raw'
import ManagerApiSource from '/examples/modeless-dialog/manager-api.vue?raw'
import ReactiveSource from '/examples/modeless-dialog/reactive.vue?raw'
import ExampleSource from '/examples/modeless-dialog/example.vue?raw'
</script>


基于Panel构建的非模态对话框，支持最大化，最小化，收起，展开，拖拽改变大小等功能，常用于预览文件，视频，音频等常驻页面操作。

## 基础用法 <play :source-code="BasicSource" />

可以通过声明组件的形式，实例化该组件。在点击关闭或者路由切换以后，该组件自动销毁

<Basic />

:::details 可以在style中设置left/top覆盖默认的弹出位置
<<< @/examples/modeless-dialog/basic.vue
:::

## 拖动范围 <play :source-code="BoundingSource" />

可以通过 `boundings` 属性限定可拖拽范围，`boundings`为四个数值的数组，分别为左上角坐标（x,y）与右下角坐标(x,y)

<Bounding />

:::details 示例代码
<<< @/examples/modeless-dialog/bounding.vue
:::

## 使用ModelessDialogManager <play :source-code="ManagerSource" />

通过调用 `ModelessDialogManager` API的 `show` 方法创建对话框，此对话框可以在页面切换以后保持不被销毁。

<Manager />

:::details `id`属性需要唯一固定值
<<< @/examples/modeless-dialog/manager.vue
:::

## ModelessDialogManager API示例 <play :source-code="ManagerApiSource" />

<ManagerApi />

:::details `header`，`body`，`footer` 必须为VNode实例，否则不进行处理
<<< @/examples/modeless-dialog/manager-api.vue
:::

## ModelessDialogManager API响应式示例 <play :source-code="ReactiveSource" />

如果需要动态修改对话框，可以使用 `reactive` 包装所有属性。

<Reactive />

:::details 示例代码
<<< @/examples/modeless-dialog/reactive.vue
:::

## 图片/视频/文档预览示例 <play :source-code="ExampleSource" />

- 可以拖拽右下角改变大小
- 可以最大化，最小化
- 可以切换路由，保持浮窗不关闭

<Example />

:::details 示例代码
<<< @/examples/modeless-dialog/example.vue
:::

## 配合DockContainer使用

请参见DockContainer组件文档。

## Attributes

| 参数        | 说明             | 类型   | 可选值 | 默认值 |
| ----------- | ---------------- | ------ | ------ | ------ |
| model-value / v-model | 是否显示对话框 | boolean  | —   | —      |
| width                 | 对话框的宽度 | string | —  | -   |
| height                | 对话框的高度 | string | — | -   |
| top                   | 对话框 CSS 中的 top 值  | string | —  | -   |
| resize                | 右下角是否可拖拽改变大小  | boolean | —  | false   |
| drag                  | 是否可拖拽  | boolean | —  | true   |
| boundings             | 可拖拽范围  | array | —  | -   |
| custom-class          | 对话框的自定义类名 | string | — | —      |
| open-delay            | 对话框打开的延时时间，单位毫秒 | number | —  | 0      |
| close-delay           | 对话框关闭的延时时间，单位毫秒 | number | —   | 0      |
| show-close            | 是否显示关闭按钮 | boolean  | —  | true   |
| show-maximize         | 是否显示最大化按钮 | boolean  | —  | true   |
| show-collapse         | 是否显示折叠按钮 | boolean  | —  | true   |
| before-close          | 关闭前的回调，会暂停对话框的关闭 | function(done)，done 用于关闭 Dialog | — | —      |
| animation-name        | 对话框动画类型 | string | - | -      |
| title                 | 对话框标题，优先级低于header slot | string | - | -      |
| z-index               | 自定义层级 | number | - | -      |
| id                    | 对话框根节点id | string | - | -      |
| use-dock              | 是否配合DockContainer使用。如果设置为true，折叠时会把对话框收纳到DockContainer中去 | boolean | - | false      |
| snapshot              | 配合DockContainer使用时，需要展示的形式 | boolean / string / object `{ type: string, url: string }` | - | false      |
| Panel组件属性          | 对话框基于Panel组件构建，自动支持使用Panel组件所有属性 | - | - | -      |


## Slots

| 名称  | 说明 |
| ----------- | -------------- |
| default     | 自定义内容 |
| header       | 自定义头部     |
| footer | 自定义底部 |

## Events

| 事件名称 | 说明                    | 回调参数 |
| -------- | ----------------------- | -------- |
| open     | 对话框打开的回调           | —        |
| opened   | 对话框打开动画结束时的回调 | —        |
| close    | 对话框关闭的回调           | —        |
| closed   | 对话框关闭动画结束时的回调 | —        |
| resize   | 对话框拖拽改变大小回调 | 对话框DOM根节点        |
| maximize   | 对话框最大化/最小化回调 | 是否最大化        |
| collapse   | 对话框收起/展开回调 | 是否收起       |

## ModelessDialogManager Methods

| 方法名     | 说明                     | 参数                                 |
| ---------- | ------------------------ | ------------------------------------ |
| show | 显示对话框，会自定检查指定id的对话框是否存在，如果存在将直接返回已存在对话框实例 | 对话框所支持属性 & `{ header: VNode, body: VNode, footer: VNode }` |
| get | 获取对话框实例 | 对话框id |
| has | 检查对话框是否已经存在 | 对话框id |
| closeAll | 关闭所有对话框 | - |
| showAll | 显示所有对话框 | - |
| hideAll | 隐藏所有对话框 | - |
| collapseAll | 折叠多有对话框 | - |
| expandAll | 展开所有对话框 | - |

## ModelessDialog Instance Methods

| 方法名     | 说明                     | 参数                                 |
| ---------- | ------------------------ | ------------------------------------ |
| close | 关闭对话框 | - |
| toggleShow | 显示/隐藏对话框 | shown: boolean，手动设置显示或者隐藏 |
| toggleCollapse | 折叠/展开对话框 | collapsable: boolean，手动设置折叠或者展开 |
| toggleMaximize | 最大化/还原对话框 | maximizable: boolean，手动设置最大化 |
| isShown | 对话框已经显示 | - |
| isClosed | 对话框是否已经关闭 | - |
| isCollapsed | 对话框是否已经折叠 | - |
| isMaximized | 对话框是否已经最大化 | - |
