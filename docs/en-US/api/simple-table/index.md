# SimpleTable

<script setup>
import Basic from '/examples/simple-table/basic.vue'
import Border from '/examples/simple-table/border.vue'
import Padding from '/examples/simple-table/padding.vue'
import Hover from '/examples/simple-table/hover.vue'
import Stripe from '/examples/simple-table/stripe.vue'
import Size from '/examples/simple-table/size.vue'
import Resize from '/examples/simple-table/resize.vue'
import List from '/examples/simple-table/list.vue'
import FixedHeader from '/examples/simple-table/fixed-header.vue'
import FixedColumn from '/examples/simple-table/fixed-column.vue'
import FixedRow from '/examples/simple-table/fixed-row.vue'
import FixedAll from '/examples/simple-table/fixed-all.vue'
import LoadMore from '/examples/simple-table/load-more.vue'
import Header from '/examples/simple-table/header.vue'
import Sortable from '/examples/simple-table/sortable.vue'
import Filterable from '/examples/simple-table/filter.vue'
import Highlight from '/examples/simple-table/highlight.vue'
import Expand from '/examples/simple-table/expand.vue'
import Tree from '/examples/simple-table/tree.vue'
import SpanMethod from '/examples/simple-table/span-method.vue'
import MultiHeader from '/examples/simple-table/multi-header.vue'
import Foot from '/examples/simple-table/foot.vue'
import HideColumn from '/examples/simple-table/hide-column.vue'
import Dnd from '/examples/simple-table/dnd.vue'
import Empty from '/examples/simple-table/empty.vue'
import Unknown from '/examples/simple-table/unknown.vue'

import BasicSource from '/examples/simple-table/basic.vue?raw'
import BorderSource from '/examples/simple-table/border.vue?raw'
import PaddingSource from '/examples/simple-table/padding.vue?raw'
import HoverSource from '/examples/simple-table/hover.vue?raw'
import StripeSource from '/examples/simple-table/stripe.vue?raw'
import SizeSource from '/examples/simple-table/size.vue?raw'
import ResizeSource from '/examples/simple-table/resize.vue?raw'
import ListSource from '/examples/simple-table/list.vue?raw'
import FixedHeaderSource from '/examples/simple-table/fixed-header.vue?raw'
import FixedColumnSource from '/examples/simple-table/fixed-column.vue?raw'
import FixedRowSource from '/examples/simple-table/fixed-row.vue?raw'
import FixedAllSource from '/examples/simple-table/fixed-all.vue?raw'
import LoadMoreSource from '/examples/simple-table/load-more.vue?raw'
import HeaderSource from '/examples/simple-table/header.vue?raw'
import SortableSource from '/examples/simple-table/sortable.vue?raw'
import FilterableSource from '/examples/simple-table/filter.vue?raw'
import HighlightSource from '/examples/simple-table/highlight.vue?raw'
import ExpandSource from '/examples/simple-table/expand.vue?raw'
import TreeSource from '/examples/simple-table/tree.vue?raw'
import SpanMethodSource from '/examples/simple-table/span-method.vue?raw'
import MultiHeaderSource from '/examples/simple-table/multi-header.vue?raw'
import FootSource from '/examples/simple-table/foot.vue?raw'
import HideColumnSource from '/examples/simple-table/hide-column.vue?raw'
import DndSource from '/examples/simple-table/dnd.vue?raw'
import EmptySource from '/examples/simple-table/empty.vue?raw'
import UnknownSource from '/examples/simple-table/unknown.vue?raw'
</script>

SimpleTable is a very lightweight table component that uses only `HTML table` to implement all its features.

:::tip
The component needs to be wrapped with `<client-only></client-only>` tags when used in SSR (e.g., [Nuxt](https://nuxt.com/v3)) and SSG (e.g., [VitePress](https://vitepress.vuejs.org/)).

:::

:::warning
The default Vitepress theme has some interference with the component's styles, but it does not affect functionality.
:::

## Basic <play :source-code="BasicSource" />

For text overflow settings, refer to:

<Basic />

:::details Example Code
<<< @/examples/simple-table/basic.vue
:::

## Border Style <play :source-code="BorderSource" />

The `border` prop can add border styles to the table.

<Border />

:::details Example Code
<<< @/examples/simple-table/border.vue
:::

## Spacing Settings <play :source-code="PaddingSource" />

The `padding` prop can add different spacing sizes to the table, while `cell-padding` can set the spacing size for TDs.

<Padding />

:::details Example Code
<<< @/examples/simple-table/padding.vue
:::

## Hover Style <play :source-code="HoverSource" />

The `hover` prop can display a background color when hovering over a row.

<Hover />

:::details Example Code
<<< @/examples/simple-table/hover.vue
:::

## Stripe Style <play :source-code="StripeSource" />

The `stripe` prop can create a striped table to distinguish between different rows of data.

<Stripe />

:::details `stripe` also accepts `even` or `odd` props to set the order of stripe display. The default is `odd`.
<<< @/examples/simple-table/stripe.vue
:::

## Size Modifier <play :source-code="SizeSource" />

The `size` prop can set the size of the table.

<Size />

:::details Example Code
<<< @/examples/simple-table/size.vue
:::

## Drag to Resize Columns <play :source-code="ResizeSource" />

Setting the `resize` prop to `true` allows dragging the table header columns to change their width.

<Resize />

:::details Example Code
<<< @/examples/simple-table/resize.vue
:::

## List Style <play :source-code="ListSource" />

`list` can present the traditional table as a list.

<List />

:::details The list style adds rounded corners to each table row. You can also customize the spacing between each row, for example: `gap="var(--xs)"`.
<<< @/examples/simple-table/list.vue
:::

## Fixed Header <play :source-code="FixedHeaderSource" />

Adding the `fixed-header` prop to the SimpleTable component can fix the header to the top.

<FixedHeader />

:::details Example Code
<<< @/examples/simple-table/fixed-header.vue
:::

## Fixed Columns <play :source-code="FixedColumnSource" />

-   Adding the `fixed` prop to a column can fix it. You can also pass `left` or `right` to control where it is fixed. For example, `fixed: 'left'`.
-   The `fixed` prop can also be of type `object` for detailed control of the `fixed` distance. When `fixed` is of type `object`, the `distance` field can be set to `auto`, which will automatically calculate the fixed distance based on the column width.
-   It is recommended that when using this, `distance` should either be set to specific values or set to `auto`. Mixing them may cause calculation errors.

<FixedColumn />

:::details Example Code
<<< @/examples/simple-table/fixed-column.vue
:::

## Fixed Rows <play :source-code="FixedRowSource" />

Fixed row effect can also be achieved through the `cellStyle` prop.

<FixedRow />

:::details Example Code
<<< @/examples/simple-table/fixed-row.vue
:::

## Fixed Header and Columns <play :source-code="FixedAllSource" />

The header and columns can be fixed simultaneously.

<FixedAll />

:::details Example Code
<<< @/examples/simple-table/fixed-all.vue
:::

## Pull-Down to Load More <play :source-code="LoadMoreSource" />

With the Scrollbar component, pull-down to load more can be implemented.

<LoadMore />

:::details Example Code
<<< @/examples/simple-table/load-more.vue
:::

## Remove Header <play :source-code="HeaderSource" />

The `show-header` prop can remove the header, making it display as a pure list style.

<Header />

:::details Example Code
<<< @/examples/simple-table/header.vue
:::

## Sorting <play :source-code="SortableSource" />

You can restore the default sorting by continuously clicking the same sorting icon. If you want to customize the column header but still use the default sorting icon, destructure the SortableIcon component from the SimpleTable component in non-setup syntax; for setup syntax, please refer to the following source code.

<Sortable />

:::details You can set the `sortable` prop in the column. The value can be: `true / false / 'descending' / 'ascending'`. Handle data sorting by listening to the `sort-change` event.
<<< @/examples/simple-table/sortable.vue
:::

## Filtering <play :source-code="FilterableSource" />

If you want to customize the column header but still use the default sorting icon, destructure the FilterIcon component from the SimpleTable component in non-setup syntax; for setup syntax, please refer to the following source code.

<Filterable />

:::details You can set the `filter` object in the column, providing `slotName` (required), `placement` (refer to the Popover documentation), and `popperClass` properties. The `close` method is provided in the slot to manually close the pop-up.
<<< @/examples/simple-table/filter.vue
:::

## Highlight Row <play :source-code="HighlightSource" />

Use a color block to indicate when a single row of data is selected.

<Highlight />

:::details The SimpleTable component provides single selection support. You only need to configure the `highlight-current-row` prop to achieve single selection. The `current-change` event then manages the event triggered when selected. It will pass in `currentRow` and `oldCurrentRow`.
<<< @/examples/simple-table/highlight.vue
:::

## Expand Row <play :source-code="ExpandSource" />

When there is too much row content and you don't want to display a horizontal scrollbar, you can use the SimpleTable expand row feature. You can define multiple columns to expand simultaneously.

<Expand />

:::details You can enable the expand row feature by setting the `expand` object and slot. The `expand` object has two properties: `slotName` and `hideLabel`. `hideLabel` defaults to `false`.
<<< @/examples/simple-table/expand.vue
:::

## Tree Data and Lazy Loading <play :source-code="TreeSource" />

Supports the display of tree-type data. When a row contains the `children` field, it is treated as tree data. When rendering tree data, `row-key` must be specified. Supports asynchronous loading of child node data. Set the Table's loading function `load`. Specify which rows contain child nodes by specifying the `hasChildren` field in the row. Both `children` and `hasChildren` can be configured through `tree-props`. The `first-column-index` prop is used to set the column on which the expand behavior acts.

<Tree />

:::details When the `children` field has an array value, the `hasChildren` field will be ignored. ***When you need to load data asynchronously, be sure to carefully set the `default-expand-all` property to `true`.***
<<< @/examples/simple-table/tree.vue
:::

## Merge Rows or Columns <play :source-code="SpanMethodSource" />

When multiple rows or columns share the same data, you can merge rows or columns.

<SpanMethod />

:::details By passing the `span-method` function to the table, you can merge rows or columns. The function's parameter is an object containing four properties: `row` (current row), `column` (current column), `rowIndex` (current row index), and `columnIndex` (current column index). The function can return an array containing two elements: the first element represents `rowspan`, and the second represents `colspan`. You can also return an object with keys named `rowspan` and `colspan`.
<<< @/examples/simple-table/span-method.vue
:::


## Multi-level Header <play :source-code="MultiHeaderSource" />

When the data structure is complex, you can use a multi-level header to display the hierarchical relationship of the data.

<MultiHeader />

:::details Multi-level headers are implemented by nesting the `children` property of `cols`.
<<< @/examples/simple-table/multi-header.vue
:::

## Table Footer Summation Row <play :source-code="FootSource" />

If the table displays various numbers, you can display the sum of each column in the table footer.

<Foot />

:::details This can be implemented by customizing the `foot` slot.
<<< @/examples/simple-table/foot.vue
:::

## Hide Columns <play :source-code="HideColumnSource" />

The `toggleColumn` method supports hiding or showing columns.

<HideColumn />

:::details This feature does not currently support multi-level headers or tables with merged cells.
<<< @/examples/simple-table/hide-column.vue
:::

## Drag and Drop Sorting <play :source-code="DndSource" />

Use [Sortablejs](https://github.com/SortableJS/Sortable) to implement drag and drop functionality for reordering rows in a table.

<Dnd />

:::details Example Code
<<< @/examples/simple-table/dnd.vue
:::

## Empty Data <play :source-code="EmptySource" />

<Empty />

:::details Example Code
<<< @/examples/simple-table/empty.vue
:::

## Unknown Data <play :source-code="UnknownSource" />

<Unknown />

:::details You can customize the `unknown` slot when the passed data is `null` or `undefined`.
<<< @/examples/simple-table/unknown.vue
:::

## Attributes

| Parameter        | Description   | Type                   | Optional Values     | Default Value |
| ------------ | ---------------------------------- | ------- | ------------------------------------- | ------ |
| row-key      | The key of the row data, used to optimize SimpleTable rendering. ***If the identifier of the table data is not the `id` field, you must set this value.***  | string / function(row)\: string  | - |  id      |
| border       | Sets the border style for the table          | string  | borderless/bordered/border-x/border-y |        |
| padding      | Sets the padding size on both sides of the table| string  | 通用尺寸标签/自定义尺寸               |        |
| cell-padding      | Sets the padding size of the table cells (TDs) | string  | 通用尺寸标签/自定义尺寸               |        |
| gap          | Sets the row spacing of the table in list mode | string  | css尺寸               |        |
| gap-x        | Sets the horizontal row spacing of the table in list mode | string  | css尺寸               |        |
| gap-y        | Sets the vertical row spacing of the table in list mode | string  | css尺寸               |        |
| hover        | Enables row hover effect                | boolean |     |        |
| cross-hover        | Enables column hover effect                | boolean |                                       |        |
| stripe       | Enables table striping effect                | boolean / string | true / false / odd / even   | false  |
| list         | Enables list style                    | boolean |                                       | false  |
| auto-height  | Makes the height of TH and TD elements `auto`       | boolean |    | false  |
| fixed-header | Fixes the table header                    | boolean |                                       | -      |
| fixed-footer | Fixes the table footer                    | boolean |                                       | -      |
| show-header  | Whether to display the table header                | boolean | -                                     | true   |
| size         | Sets the table size                    | string  | sm / md / lg                          | -      |
| resize         | Whether the column width can be changed by dragging the header   | boolean  | -    | false      |
| scroll-container         | When setting fixed columns, if the scrolling container is not the direct parent of the table or a Scrollbar component, this prop needs to be set to support fixed column shadow effects when scrolling | string / HTMLElement  | -  | -      |
| highlight-current-row | Whether to highlight the current row    | boolean  | -     | false      |
| expand-row-keys | Default expanded rows, applicable to both row expansion and tree expansion. When expanding rows, `rowKey + slotName` is used as the unique identifier; when expanding trees, `rowKey` is used. ***Array values must be strings.***    | array  | -     | -      |
| default-expand-all | Whether to expand all rows by default. Effective when SimpleTable contains expandable rows or is a tree table    | boolean  | -     | false      |
| row-class-name | Callback method for the row's `className`. You can also use a string to set a fixed `className` for all rows    | function({ row, rowIndex }) / string  | -     | -      |
| row-style | Callback method for the row's `style`. You can also use a fixed `Object` to set the same `Style` for all rows   | function({ row, rowIndex }) / object  | -     | -      |
| cell-class-name | Callback method for the cell's `className`. You can also use a string to set a fixed `className` for all cells  | function({ row, column, rowIndex, columnIndex }) / string  | -     | -      |
| cell-style | Callback method for the cell's `style`. You can also use a fixed `Object` to set the same `Style` for all cells  | function({ row, column, rowIndex, columnIndex }) / object  | -     | -      |
| header-row-class-name  | Callback method for the header row's `className`. You can also use a string to set a fixed `className` for all header rows  | function({ row, rowIndex }) / string  | -  | -      |
| header-row-style         | Callback method for the header row's `style`. You can also use a fixed `Object` to set the same `Style` for all header rows  | function({ row, rowIndex }) / object  | -  | -      |
| header-cell-class-name         | Callback method for the header cell's `className`. You can also use a string to set a fixed `className` for all header cells | function({ row, column, rowIndex, columnIndex }) / string  | -  | -      |
| header-cell-style         | Callback method for the header cell's `style`. You can also use a fixed `Object` to set the same `Style` for all header cells | function({ row, column, rowIndex, columnIndex }) / object  | -  | -      |
| span-method         | Calculation method for merging rows or columns  | function({ row, column, rowIndex, columnIndex })  | -  | -      |
| first-column-index         | The column on which the tree expansion operation acts  | number  | -  | 0      |
| tree-props         | Configuration options for rendering nested data   | object  | -                          | `{ hasChildren: 'hasChildren', children: 'children' }`      |
| load         | Function for loading child node data. The second parameter of the function contains the node's level information| function(row, treeNode, resolve)  | -                          | -      |
| cols         | Column configuration, see the table below | array  | -                          | -      |


## cols

| Parameter        | Description   | Type                   | Optional Values     | Default Value |
| -------------- | ------------------------------------------ | ------- | ----------------- | ------ |
| columnKey      | Column key. This value needs to be set if dynamically switching table columns. Otherwise, the column width calculation will be incorrect   | string  |     |        |
| title          | Table column title                                   | string  |                   |        |
| prop           | Property name of the table column   | string  |                   |        |
| showTooltip    | Whether to show a tooltip. This needs to be used in conjunction with the column's `width` value  | boolean |                   | false  |
| tooltipProps   | Tooltip properties. Refer to the Popover component documentation           | object  |                   |        |
| align          | Horizontal alignment                                   | string  | left/center/right | left   |
| width          | Column width        | string  |                   | -      |
| minWidth          | Minimum column width                | string  |                   | -      |
| maxWidth          | Maximum column width               | string  |                   | -      |
| fixed          | Fixes the column  | string / object  | left / right / `{ position: string; distance: string; }`        | -      |
| slotName       | Column slot name. The default parameters are `row, column, rowIndex, columnIndex`. Please refer to the examples   | string  | -                 | -      |
| headerSlotName | Column header slot name. The default parameter is `col`. Please refer to the examples | string  | -                 | -      |
| sortable       | Whether the column is sortable| boolean / string  | true / false / 'ascending' / 'descending'   | -      |
| filter         | Column filter settings | `object{ slotName: string, placement: string, popperClass: string }`  |  -  | -      |
| expand         | Expand column settings | `object{ slotName: string, hideLabel: boolean }`  |  -  | -      |
| children       | Information about child columns (for multi-level headers) |  array |  -  | -      |
| formatter       | Used to format content |  function(row, column, cellValue, rowIndex, columnIndex) |  -  | -      |

## Events

| Event Name | Description            | Callback Parameter              |
| ---------- | -------------- | ----------------------------------- |
| row-click  | Triggered when a row is clicked     | row, rowIndex, event                |
| cell-click | Triggered when a cell is clicked | row, col, rowIndex, colIndex, event |
| sort-change | Triggered when the sorting changes | prop, sort |
| current-change | Triggered when the current row of the table changes. If you want to highlight the current row, enable the table's `highlight-current-row` attribute | currentRow, oldCurrentRow |
| expand | Triggered when a row is expanded or collapsed | expanded, rowkey, slotName |
| tree-expand | Triggered when a tree node is expanded or collapsed | expanded, row |

## Methods

| Method Name        | Description  | Parameters                     |
| ------ | ------------------------------- | ---- |
| toggleExpand  | Expands/collapses a row. Since each row may have multiple expansions, you need to pass the `slotName` of the expansion you want to toggle | rowKey, slotName    |
| toggleExpandTree  | Expands/collapses a tree node | row    |
| toggleColumn  | Shows/hides a column | index, show（show可选）    |
| setCurrentRow  | Used for single-selection tables. Sets a specific row as the selected row. If this method is called without parameters, it will cancel the selection of the currently highlighted row | row    |
| clearTooltip  | Hides the tooltip | -    |

## Slots

| Name  | Description |
| ------- | -------------- |
| empty   | Content displayed when there is no data |
| unknown   | Custom content displayed when the table data is `null` or `undefined` |
| more   | Custom content displayed during pull-down to load more |
| foot   | Footer content of the table |