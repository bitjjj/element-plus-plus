# Ripple 水波指令

<script setup>
import Basic from '/examples/ripple/basic.vue'
import Color from '/examples/ripple/color.vue'
import Disabled from '/examples/ripple/disabled.vue'
import BasicSource from '/examples/ripple/basic.vue?raw'
import ColorSource from '/examples/ripple/color.vue?raw'
import DisabledSource from '/examples/ripple/disabled.vue?raw'
</script>

:::tip
代码来源自：https://varlet.gitee.io/varlet-ui/#/zh-CN/ripple
:::

使元素点击时生成一个水波扩散的效果。

## 基本用法 <play :source-code="BasicSource" />

<Basic />

:::details 示例代码
<<< @/examples/ripple/basic.vue
:::

## 修改颜色 <play :source-code="ColorSource" />

<Color />

:::details 示例代码
<<< @/examples/ripple/color.vue
:::

## 禁用水波 <play :source-code="DisabledSource" />

<Disabled />

:::details 示例代码
<<< @/examples/ripple/disabled.vue
:::


## Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| color     | 颜色           | string | — | currentColor |
| disabled | 禁用状态 | boolean | - | false |

