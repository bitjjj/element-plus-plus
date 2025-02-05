# OverflowList

<script setup>
import Basic from '/examples/overflow-list/basic.vue'
import More from '/examples/overflow-list/more.vue'
import Expand from '/examples/overflow-list/expand.vue'
import BasicSource from '/examples/overflow-list/basic.vue?raw'
import MoreSource from '/examples/overflow-list/more.vue?raw'
import ExpandSource from '/examples/overflow-list/expand.vue?raw'
</script>

Often used for operation columns in tables. When there are many operation items, this component can be used to show or hide operations. Currently, only the `v-if` directive is supported on child elements; the `v-show` directive is not supported.

## Basic <play :source-code="BasicSource" />

<Basic />

:::details Please refer to the code for specific usage. Content must be embedded within the component.
<<< @/examples/overflow-list/basic.vue
:::

## Custom More Icon <play :source-code="MoreSource" />

<More />

:::details Example code
<<< @/examples/overflow-list/more.vue
:::

## Expand Mode <play :source-code="ExpandSource" />

<Expand />

:::details Example code
<<< @/examples/overflow-list/expand.vue
:::

## Attributes

| Parameter        | Description   | Type                   | Optional Values     | Default Value |
| ----------- | ---------------- | ------ | ------ | ------ |
| show-count       | The number of items to display         | number | —      | 1      |
| show-type       | Display type         | tooltip / expand | —      | tooltip    |
| dropdown-props  | Properties of the Dropdown component. Refer to the Element Plus Dropdown component. | object | —      | —      |

## Slots

| Name  | Description |
| ----------- | -------------- |
| -     | Default content slot |
| more     | Custom display of the "more" element. Parameter is `{ hasMore, show, hide }` |


