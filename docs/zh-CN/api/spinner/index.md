# Spinner 加载状态

<script setup>
import Basic from '/examples/spinner/basic.vue'
import Size from '/examples/spinner/size.vue'
import Color from '/examples/spinner/color.vue'
import Slot from '/examples/spinner/slot.vue'
import Animation from '/examples/spinner/animation.vue'
import Duration from '/examples/spinner/duration.vue'
import Status from '/examples/spinner/status.vue'
import BasicSource from '/examples/spinner/basic.vue?raw'
import SizeSource from '/examples/spinner/size.vue?raw'
import ColorSource from '/examples/spinner/color.vue?raw'
import SlotSource from '/examples/spinner/slot.vue?raw'
import AnimationSource from '/examples/spinner/animation.vue?raw'
import DurationSource from '/examples/spinner/duration.vue?raw'
import StatusSource from '/examples/spinner/status.vue?raw'
</script>

使用 Spinner 组件可以展示一个 “加载中” 的工作状态

## 基础用法 <play :source-code="BasicSource" />

<Basic />

:::details 示例代码
<<< @/examples/spinner/basic.vue
:::

## 尺寸 <play :source-code="SizeSource" />

`Spinner` 组件的 `size` 可以接收通用的尺寸。

<Size />

:::details 你也可以传入值来自定义尺寸。
<<< @/examples/spinner/size.vue
:::

## 颜色 <play :source-code="ColorSource" />

通过`color`属性来传递色值。

<Color />

:::details Spinner通常与其他元素组件组合使用，所以不需要内置状态色，但你可以通过 `var(--el-color-danger)` 的方式使用状态颜色。
<<< @/examples/spinner/color.vue
:::

## 自定义内容 <play :source-code="SlotSource" />

`Spinner` 提供一个默认 slot 你可以插入任意的内容。

<Slot />

:::details 示例代码
<<< @/examples/spinner/slot.vue
:::

## 旋转方向 <play :source-code="AnimationSource" />

`animation` 属性可以控制自动旋转的方向

<Animation />

:::details 如果你自定义的图示自带旋转动画，那可以通过 `animation="none"` 开关闭spinner组件的旋转效果
<<< @/examples/spinner/animation.vue
:::

## 动画时间 <play :source-code="DurationSource" />

`duration` 属性可以控制动画的持续时间

<Duration />

:::details 如果你自定义的图示自带旋转动画，那可以通过 `animation="none"` 开关闭spinner组件的旋转效果
<<< @/examples/spinner/duration.vue
:::

## 状态反馈 <play :source-code="StatusSource" />

Spinner 除了展示一个旋转的图示以外，可以根据`status`变量来反馈一个结果。

<Status />

:::details Spinner提供 `success` `warning` `error` `info` 4个状态插槽，你可以根据类型自定义内容
<<< @/examples/spinner/status.vue
:::

## Attributes

| 参数            | 说明   | 类型                      | 可选值                                     | 默认值  |
| --------------- | --------------- | ------------------------- | --------- | ------- |
| size | 尺寸 | string | -    | —       |
| color        | 颜色    | string                    | —   |    |
| animation            | 旋转方向  | string                    | around-left / around-right / none  | around-right       |
| duration           | 动画时间   | string   |  s / ms | 2s       |
| status           | 状态反馈 | string |  success / error / warning / info |        |

## Slots

|   名称 | 说明        |
| ------- | ----------- |
| -    | 默认插槽 |
| success    | 成功状态的插槽 |
| error    | 错误状态的插槽 |
| warning    | 警告状态的插槽 |
| info    | 信息提示状态的插槽 |
