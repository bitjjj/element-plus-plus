# TreeTransfer

<script setup>
import Basic from '/examples/tree-transfer/basic.vue'
import BasicSource from '/examples/tree-transfer/basic.vue?raw'
</script>

Allows selection within a tree structure.

## Basic <play :source-code="BasicSource" />

<Basic />

:::details The filter function uses the `filterNodeMethod` defined in `treeProps` for both the left and right sides.
<<< @/examples/tree-transfer/basic.vue
:::

## Attributes

| Parameter        | Description   | Type                   | Optional Values     | Default Value |
| --------------------- | ------------------- | ----------------------- | ------ | -------------------- |
| model-value / v-model | Bound value     | array                   | —      | —                    |
| tree-props             | Tree properties for the left side. See the Tree component. `nodeKey` is set to `id` by default.     | object                  | -      | -     |
| titles                | Custom list titles  | array                   | -      | `['List 1', 'List 2']` |
| filter-placeholder    | Search box placeholder  | string                  | —      | `Enter keyword`       |
| render-content        | Custom data item rendering function. Parameters are: `h` function; tree node data; `left/right` identifier. Applies to both sides. | function(h, data, mark) | —      | -   |
| filterable            | Whether searching is enabled    | boolean                 | —      | false                |

## Slots

| Name  | Description |
| ------------ | ------------------ |
| left-footer  | Content at the bottom of the left list |
| right-footer | Content at the bottom of the right list |

## Methods

| 方法名     | 说明                     | 参数                                 |
| ---------- | ------------------------ | ------------------------------------ |
| clearQuery | Clears the search keywords for a specific panel | `'left' / 'right'`, specifies the panel to clear |
