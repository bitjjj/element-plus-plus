# TextOverflow 文本溢出

<script setup>
import Width from '/examples/text-overflow/width.vue'
import Length from '/examples/text-overflow/length.vue'
import Auto from '/examples/text-overflow/auto.vue'
import WidthSource from '/examples/text-overflow/width.vue?raw'
import LengthSource from '/examples/text-overflow/length.vue?raw'
import AutoSource from '/examples/text-overflow/auto.vue?raw'
</script>

可以通过设置文本长度或者组件width使文本出现溢出效果。

## 固定宽度 <play :source-code="WidthSource" />

<Width />

:::details 基于宽度计算时需要设置width，否则不会有溢出效果
<<< @/examples/text-overflow/width.vue
:::

## 固定字符串长度 <play :source-code="LengthSource" />

<Length />

:::details 基于长度计算时需要设置length，否则不会有溢出效果
<<< @/examples/text-overflow/length.vue
:::

## 自动字符串宽度 <play :source-code="AutoSource" />

将会采用`em`单位计算字体宽度

<Auto />

:::details 基于字体大小计算时需要设置length并且值大于0，否则不会有溢出效果
<<< @/examples/text-overflow/auto.vue
:::


## Attributes

| 参数        | 说明                               | 类型    | 可选值                     | 默认值 |
| ----------- | ---------------------------------- | ------- | -------------------------- | ------ |
| effect       | tooltip样式主题    | string  | 参考Element Plus Popover文档                          | light     |
| placement        | tooltip弹出位置      | string  | 参考Element Plus Popover文档 | top   |
| method       | 溢出方法：宽度自动计算或者计算字符串长度   | string | width / length / autoWidth  | width  |
| length | 基于长度计算时，需要设置此值 | number  | —                          | -1      |
| width | 弹框宽度 | number / string | —                          | -     |

## Slots

| 名称  | 说明 |
| ----- | ----------- |
| —     | 文本内容        |
