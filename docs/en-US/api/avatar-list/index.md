# AvatarList

<script setup>
import Basic from '/examples/avatar-list/basic.vue'
import BasicSource from '/examples/avatar-list/basic.vue?raw'
import Max from '/examples/avatar-list/max.vue'
import MaxSource from '/examples/avatar-list/max.vue?raw'
</script>

A group of user avatars, commonly used in project/team member lists. You can set the size and also limit the maximum number of avatars displayed.

## Basic <play :source-code="BasicSource" />

<Basic />

:::details The `data` parameter is an array of objects. Each object needs to have one property, which defaults to `url`, used to display the image.
<<< @/examples/avatar-list/basic.vue
:::

## Maximum Value Setting  <play :source-code="MaxSource" />

<Max />

:::details You can configure the key for the `url` property using the `url-field` prop.
<<< @/examples/avatar-list/max.vue
:::


## Attributes

| Parameter        | Description   | Type                   | Optional Values     | Default Value |
| ----------- | ---------------------------------- | ------- | -------------------------- | ------ |
| data       | Data list                                | `Record<string, any>[]`  | —                          | []      |
| indent        | The overlapping distance between images, can be various CSS units    | string  | - | 图片宽度一半的负值   |
| popover-props        | Popover properties, see Element Plus Popover documentation   | string  | - | -   |
| size       | Image size   | number / string | 参考Element Plus Avatar 组件参数      | default  |
| shape       | Image shape   | string | 参考Element Plus Avatar 组件参数      | circle  |
| fit        | Determines how the image fits within its container box, same as native [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) | string  | fill / contain / cover / none / scale-down | cover      |
| max    | The maximum number of avatars to display. If exceeded, a remainder will be shown at the end     | number | —  |  -  |
| max-bg-color  | Background color of the remainder value                 | string  | —                          | black      |
| url-field   | Data object configuration item, specifies the key for the image URL property     | string | — | url  |

## Slots

| Name  | Description |
| ----- | ----------- |
| tip     | Tooltip information, the parameter is the corresponding object in the data: `item`       |

## Events

| Event Name | Description            | Callback Parameter              |
| -------- | ----------------------- | -------- |
| click    | Image click event |  The corresponding object in data      |
