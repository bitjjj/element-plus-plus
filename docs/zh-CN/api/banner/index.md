# Banner 通知横幅

<script setup>
import Basic from '/examples/banner/basic.vue'
import BasicSource from '/examples/banner/basic.vue?raw'
import Container from '/examples/banner/container.vue'
import ContainerSource from '/examples/banner/container.vue?raw'
import Description from '/examples/banner/description.vue'
import DescriptionSource from '/examples/banner/description.vue?raw'
</script>

横幅通常用于标识全页的状态或通知等。它通常是常驻的，需要用户主动将其关闭。

## 基础用法 <play :source-code="BasicSource" />

<Basic />

:::details 默认 Banner 将会全屏显示，可以通过设置 `to` 属性定向到特定DOM节点
<<< @/examples/banner/basic.vue
:::

## 特定DOM节点 <play :source-code="ContainerSource" />

要保证DOM节点先于 Banner 组件加载完成

<Container />

:::details 示例中由于要保证DOM容器先加载，所以Banner组件设置了延迟加载
<<< @/examples/banner/container.vue
:::

## 自定义 <play :source-code="DescriptionSource" />

<Description />

:::details 示例代码
<<< @/examples/banner/description.vue
:::


## Attributes

| 参数        | 说明                               | 类型    | 可选值                     | 默认值 |
| ----------- | ---------------------------------- | ------- | -------------------------- | ------ |
| model-value / v-model | 绑定值      | boolean | —       | —       |
| title       | 标题                               | string  | —                          | —      |
| type        | 类型                               | string  | success/warning/info/error | info   |
| effect      | 样式主题                           | string  | light / dark                    | light      |
| description | 辅助性文字。也可通过默认 slot 传入 | string  | —                          | —      |
| closable    | 是否可关闭                         | boolean | —                          | true   |
| close-text  | 关闭按钮自定义文本                 | string  | —                          | —      |
| show-icon   | 是否显示图标                       | boolean | —                          | false  |
| placement   | 位置                       | string | top / bottom                         | top  |
| animation-name   | 动画                       | string | -                         | -  |
| to          | 呈现容器                        | string | -                         | body  |
| z-index     | zIndex值                        | number | -                         | -  |
| height     | Banner高度                        | string | -                         | -  |
| position    | Banner的CSS position属性设置    | string | fixed / absolute等CSS有效值 | ***to为body时：fixed，其他值：absolute***  |
| timeout     | Banner自动关闭时间，单位毫秒        | number | -                         | -  |

## Slots

| 名称  | 说明 |
| ----- | ----------- |
| —     | 描述        |
| icon  | 自定义 icon |
| title | 标题的内容  |

## Events

| 事件名称 | 说明                    | 回调参数 |
| -------- | ----------------------- | -------- |
| close    | 关闭 Banner 时触发的事件 | —        |

