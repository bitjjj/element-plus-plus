# ConfirmableButton 双重确认按钮

<script setup>
import Basic from '/examples/confirmable-button/basic.vue'
import BasicSource from '/examples/confirmable-button/basic.vue?raw'
import Slot from '/examples/confirmable-button/slot.vue'
import SlotSource from '/examples/confirmable-button/slot.vue?raw'
import Props from '/examples/confirmable-button/props.vue'
import PropsSource from '/examples/confirmable-button/props.vue?raw'
</script>


通常用于需要再次确认的操作。

## 基础用法 <play :source-code="BasicSource" />

<Basic />

:::details 示例代码
<<< @/examples/confirmable-button/basic.vue
:::

## 自定义提示内容 <play :source-code="SlotSource" />

<Slot />

:::details 示例代码
<<< @/examples/confirmable-button/slot.vue
:::

## 自定义属性 <play :source-code="PropsSource" />

<Props />

:::details 示例代码
<<< @/examples/confirmable-button/props.vue
:::

## Attributes

| 参数        | 说明             | 类型   | 可选值 | 默认值 |
| ----------- | ---------------- | ------ | ------ | ------ |
| tip       | 提示文字         | string | —      | —      |
| default-state  | 默认按钮状态，可使用按钮所有属性，参考Button组件 | `Record<string, any>` | —      | `{ text: true, type: 'primary' }`      |
| confirm-state  | 确认按钮状态，可使用按钮所有属性，参考Button组件 | `Record<string, any>` | —      | `{ text: false, type: 'danger' }`      |
| popover-props  | 提示框属性，参考Popover组件 | `Record<string, any>` | -      | -      |

## Slots

| 名称  | 说明 |
| ----------- | -------------- |
| -     | 自定义按钮内容 |
| tip       | 自定义提示内容     |

## Events

| 事件名称        | 说明           | 回调参数           |
| ----------- | -------------- | -------------- |
| confirm     | 确认时触发 |- |


