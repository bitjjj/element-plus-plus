# AvatarList 头像列表

<script setup>
import Basic from '/examples/avatar-list/basic.vue'
import BasicSource from '/examples/avatar-list/basic.vue?raw'
import Max from '/examples/avatar-list/max.vue'
import MaxSource from '/examples/avatar-list/max.vue?raw'
</script>

一组用户头像，常用在项目/团队成员列表。可以设置尺寸，也可以限制最多显示数量。

## 基础用法 <play :source-code="BasicSource" />

<Basic />

:::details data参数为对象数组，对象中需要有一个属性，默认为`url`，用来展示图片。
<<< @/examples/avatar-list/basic.vue
:::

## 最大值设置  <play :source-code="MaxSource" />

<Max />

:::details 可以通过`url-field`属性配置url对应的属性键。
<<< @/examples/avatar-list/max.vue
:::


## Attributes

| 参数        | 说明                               | 类型    | 可选值                     | 默认值 |
| ----------- | ---------------------------------- | ------- | -------------------------- | ------ |
| data       | 数据列表                               | `Record<string, any>[]`  | —                          | []      |
| indent        | 图片之间的重叠距离，可以是各种css单位                               | string  | - | 图片宽度一半的负值   |
| popover-props        | 弹框属性，参见Element Plus Popover 文档   | string  | - | -   |
| size       | 图片大小   | number / string | 参考Element Plus Avatar 组件参数      | default  |
| shape       | 图片形状   | string | 参考Element Plus Avatar 组件参数      | circle  |
| fit        | 确定图片如何适应容器框，同原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) | string  | fill / contain / cover / none / scale-down | cover      |
| max    | 显示的最大数量，超过此值将会在最后显示一个剩余值     | number | —                          |  -  |
| max-bg-color  | 剩余值的背景颜色                 | string  | —                          | black      |
| url-field   | data对象配置项, 指定图片url属性键值     | string | —                          | url  |

## Slots

| 名称  | 说明 |
| ----- | ----------- |
| tip     | 滑动提示信息，参数为data中对应的对象: item        |

## Events

| 事件名称 | 说明                    | 回调参数 |
| -------- | ----------------------- | -------- |
| click    | 图片单击事件 |   data中对应的对象      |
