# Ripple

<script setup>
import Basic from '/examples/ripple/basic.vue'
import Color from '/examples/ripple/color.vue'
import Disabled from '/examples/ripple/disabled.vue'
import BasicSource from '/examples/ripple/basic.vue?raw'
import ColorSource from '/examples/ripple/color.vue?raw'
import DisabledSource from '/examples/ripple/disabled.vue?raw'
</script>

:::tip
Code source: https://varlet.gitee.io/varlet-ui/#/zh-CN/ripple
:::

Creates a ripple effect upon clicking an element.

## Basic <play :source-code="BasicSource" />

<Basic />

:::details Example Code
<<< @/examples/ripple/basic.vue
:::

## Changing the Color <play :source-code="ColorSource" />

<Color />

:::details Example Code
<<< @/examples/ripple/color.vue
:::

## Disabling the Ripple <play :source-code="DisabledSource" />

<Disabled />

:::details Example Code
<<< @/examples/ripple/disabled.vue
:::


## Attributes
| Parameter        | Description   | Type                   | Optional Values     | Default Value |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| color     | Color           | string | — | currentColor |
| disabled | Disabled state | boolean | - | false |

