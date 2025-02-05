# Spinner

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

The Spinner component can be used to display a "loading" status.

## Basic <play :source-code="BasicSource" />

<Basic />

:::details Example code
<<< @/examples/spinner/basic.vue
:::

## Size <play :source-code="SizeSource" />

The `size` prop of the `Spinner` component can accept common size values.

<Size />

:::details You can also pass in custom values to define the size.
<<< @/examples/spinner/size.vue
:::

## Color <play :source-code="ColorSource" />

Use the `color` prop to pass in a color value.

<Color />

:::details Spinners are usually used in combination with other element components, so built-in status colors are not necessary. However, you can use status colors via `var(--el-color-danger)`.
<<< @/examples/spinner/color.vue
:::

## Custom Content <play :source-code="SlotSource" />

The `Spinner` provides a default slot where you can insert any content.

<Slot />

:::details Example code
<<< @/examples/spinner/slot.vue
:::

## Rotation Direction <play :source-code="AnimationSource" />

The `animation` prop can control the direction of automatic rotation.

<Animation />

:::details If your custom graphic already has a rotation animation, you can use `animation="none"` to turn off the Spinner component's rotation effect.
<<< @/examples/spinner/animation.vue
:::

## Animation Duration <play :source-code="DurationSource" />

The `duration` prop can control the duration of the animation.

<Duration />

:::details If your custom graphic already has a rotation animation, you can use `animation="none"` to turn off the Spinner component's rotation effect.
<<< @/examples/spinner/duration.vue
:::

## Status Feedback <play :source-code="StatusSource" />

In addition to displaying a rotating graphic, the Spinner can provide feedback on a result based on the `status` variable.

<Status />

:::details The Spinner provides four status slots: `success`, `warning`, `error`, and `info`. You can customize the content based on the type.
<<< @/examples/spinner/status.vue
:::

## Attributes

| Parameter        | Description   | Type                   | Optional Values     | Default Value |
| --------------- | --------------- | ------------------------- | --------- | ------- |
| size | Size | string | -    | —       |
| color        | Color    | string                    | —   |    |
| animation            | Rotation direction  | string   | around-left / around-right / none  | around-right       |
| duration           | Animation duration   | string   |  s / ms | 2s       |
| status           | Status feedback | string |  success / error / warning / info |        |

## Slots

| Name  | Description |
| ------- | ----------- |
| -    | Default slot |
| success    | Success status slot |
| error    | Error status slot |
| warning    | Warning status slot |
| info    | Information/Info status slot |
