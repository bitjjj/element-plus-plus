# TextOverflow

<script setup>
import Width from '/examples/text-overflow/width.vue'
import Length from '/examples/text-overflow/length.vue'
import Auto from '/examples/text-overflow/auto.vue'
import WidthSource from '/examples/text-overflow/width.vue?raw'
import LengthSource from '/examples/text-overflow/length.vue?raw'
import AutoSource from '/examples/text-overflow/auto.vue?raw'
</script>

You can create text overflow effects by setting the text length or the component's width.

## Fixed Width <play :source-code="WidthSource" />

<Width />

:::details When calculating based on width, you need to set `width`; otherwise, there will be no overflow effect.
<<< @/examples/text-overflow/width.vue
:::

## Fixed String Length <play :source-code="LengthSource" />

<Length />

:::details When calculating based on length, you need to set `length`; otherwise, there will be no overflow effect.
<<< @/examples/text-overflow/length.vue
:::

## Automatic String Width <play :source-code="AutoSource" />

This will use `em` units to calculate the font width.

<Auto />

:::details When calculating based on font size, you need to set `length` and the value must be greater than 0; otherwise, there will be no overflow effect.
<<< @/examples/text-overflow/auto.vue
:::


## Attributes

| Parameter        | Description   | Type                   | Optional Values     | Default Value |
| ----------- | ---------------------------------- | ------- | -------------------------- | ------ |
| effect       | Tooltip style theme    | string  | Refer to the Element Plus Popover documentation  | light     |
| placement        | Tooltip pop-up position      | string  | Refer to the Element Plus Popover documentation | top   |
| method       | Overflow method: automatic width calculation or string length calculation   | string | width / length / autoWidth  | width  |
| length | When calculating based on length, this value needs to be set | number  | —                          | -1      |
| width | Pop-up width | number / string | —                          | -     |

## Slots

| Name  | Description |
| ----- | ----------- |
| —     | Text content        |
