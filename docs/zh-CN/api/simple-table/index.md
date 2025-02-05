# SimpleTable 简单表格

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

SimpleTable 是一款非常轻量的表格组件，只使用`HTML table`实现所有功能。

:::tip
组件需要包裹 `<client-only></client-only>` 标签，当用在 SSR (eg: [Nuxt](https://nuxt.com/v3)) 和 SSG (eg: [VitePress](https://vitepress.vuejs.org/))。
:::

:::warning
Vitepress默认主题对组件样式有一定干扰，但不影响功能。
:::

## 基础样式 <play :source-code="BasicSource" />

文本溢出设置参考

<Basic />

:::details 示例代码
<<< @/examples/simple-table/basic.vue
:::

## 边框样式 <play :source-code="BorderSource" />

`border` 属性可为表格加上设置边框样式

<Border />

:::details 示例代码
<<< @/examples/simple-table/border.vue
:::

## 间距设置 <play :source-code="PaddingSource" />

`padding` 属性可为表格加上设置不同的间距尺寸， 同时`cell-padding` 可设置TD的间距尺寸

<Padding />

:::details 示例代码
<<< @/examples/simple-table/padding.vue
:::

## 悬停样式 Hover <play :source-code="HoverSource" />

`hover` 属性可以在悬停在某一行时，呈现背景色。

<Hover />

:::details 示例代码
<<< @/examples/simple-table/hover.vue
:::

## 条纹样式 <play :source-code="StripeSource" />

`stripe`属性可以创建条纹的表格，以便区分出不同行的数据。

<Stripe />

:::details stripe 还接收 `even` 或者 `odd` 属性来设置条纹显示的顺序。默认为 `odd` 奇数
<<< @/examples/simple-table/stripe.vue
:::

## 尺寸修饰 <play :source-code="SizeSource" />

`size` 属性可以设置表格的尺寸。

<Size />

:::details 示例代码
<<< @/examples/simple-table/size.vue
:::

## 拖拽改变列宽 <play :source-code="ResizeSource" />

`resize` 属性设置为 `true`，可以拖拽表格头的列，从而改变列宽。

<Resize />

:::details 示例代码
<<< @/examples/simple-table/resize.vue
:::

## 列表样式 <play :source-code="ListSource" />

`list` 可以将传统的表格呈现成列表的状态。

<List />

:::details 列表样式会为每一行表格加上圆角，你也可以自定义每一行的间距，例如：`gap="var(--xs)"`
<<< @/examples/simple-table/list.vue
:::

## 固定表头 <play :source-code="FixedHeaderSource" />

为 SimpleTable 组件加上 `fixed-header` 属性可以使表头固定在顶端。

<FixedHeader />

:::details 示例代码
<<< @/examples/simple-table/fixed-header.vue
:::

## 固定列 <play :source-code="FixedColumnSource" />

- 为某一列增加 `fixed` 属性可以使它固定，同时你可以传递 `left` `right` 来控制它固定在什么地方。例如 `fixed: 'left'`。
- `fixed` 属性还可以为 `object` 类型，详细控制 `fixed` 的距离。在 `fixed` 为 `object` 类型时，`distance` 字段可以设置成 `auto`，这样将会根据列宽自动计算应固定的距离。
- 建议使用时，`distance` 要么都设置具体数值，要么都设置成`auto`，混用可能会导致计算错误。

<FixedColumn />

:::details 示例代码
<<< @/examples/simple-table/fixed-column.vue
:::

## 固定行 <play :source-code="FixedRowSource" />

通过 `cellStyle` 属性还可以实现固定行效果。

<FixedRow />

:::details 示例代码
<<< @/examples/simple-table/fixed-row.vue
:::

## 固定头和列 <play :source-code="FixedAllSource" />

表头和列可以同时设置固定。

<FixedAll />

:::details 示例代码
<<< @/examples/simple-table/fixed-all.vue
:::

## 下拉加载更多 <play :source-code="LoadMoreSource" />

配合 Scrollbar 组件可实现下拉加载更多。

<LoadMore />

:::details 示例代码
<<< @/examples/simple-table/load-more.vue
:::

## 移除表头 <play :source-code="HeaderSource" />

`show-header` 属性可以移除表头，让其展示为一个纯列表样式。

<Header />

:::details 示例代码
<<< @/examples/simple-table/header.vue
:::

## 排序 <play :source-code="SortableSource" />

可以通过连续点击相同的排序图标恢复默认排序。如果想自定义列头，但仍然使用默认排序图标，在非setup语法下从 SimpleTable 组件中解构出 SortableIcon 组件；setup语法请参考如下源码。

<Sortable />

:::details 列中可以设置sortable属性，值为：` true / false / 'descending' / 'ascending' ` ，并通过监听sort-change事件处理数据排序
<<< @/examples/simple-table/sortable.vue
:::

## 筛选 <play :source-code="FilterableSource" />

如果想自定义列头，但仍然使用默认排序图标，在非setup语法下从 SimpleTable 组件中解构出 FilterIcon 组件；setup语法请参考如下源码。

<Filterable />

:::details 列中可以设置 `filter` 对象，提供 `slotName`（必选）、`placement`（参考Popover文档）、`popperClass` 属性。slot中提供 `close` 方法用来手工关闭弹出框。
<<< @/examples/simple-table/filter.vue
:::

## 高亮行 <play :source-code="HighlightSource" />

选择单行数据时使用色块表示。

<Highlight />

:::details SimpleTable 组件提供了单选的支持， 只需要配置`highlight-current-row`属性即可实现单选。 之后由`current-change`事件来管理选中时触发的事件，它会传入 currentRow，oldCurrentRow。
<<< @/examples/simple-table/highlight.vue
:::

## 展开行 <play :source-code="ExpandSource" />

当行内容过多并且不想显示横向滚动条时，可以使用 SimpleTable 展开行功能。可以定义多列同时展开。

<Expand />

:::details 通过设置 expand 对象 和 slot 可以开启展开行功能。expand有两个属性：`slotName`，`hideLabel`，hideLabel默认为false
<<< @/examples/simple-table/expand.vue
:::

## 树形数据与懒加载 <play :source-code="TreeSource" />

支持树类型的数据的显示。 当 row 中包含 children 字段时，被视为树形数据。 渲染树形数据时，必须要指定 row-key。支持子节点数据异步加载。 设置 Table 的加载函数 load 。 通过指定 row 中的hasChildren字段来指定哪些行是包含子节点。 children与hasChildren都可以通过 `tree-props` 配置。`first-column-index` 属性用来设置展开行为所作用的列。

<Tree />

:::details 当children字段有数组值时，将会忽略hasChildren字段。***需要异步加载数据时，一定要谨慎设置`default-expand-all`属性为true值***
<<< @/examples/simple-table/tree.vue
:::

## 合并行或列 <play :source-code="SpanMethodSource" />

多行或多列共用一个数据时，可以合并行或列。

<SpanMethod />

:::details 通过给 table 传入span-method方法可以实现合并行或列， 方法的参数是一个对象，里面包含当前行 row、当前列 column、当前行号 rowIndex、当前列号 columnIndex 四个属性。 该函数可以返回一个包含两个元素的数组，第一个元素代表 rowspan，第二个元素代表 colspan。 也可以返回一个键名为 rowspan 和 colspan 的对象。
<<< @/examples/simple-table/span-method.vue
:::


## 多级表头 <play :source-code="MultiHeaderSource" />

数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。

<MultiHeader />

:::details 通过`cols` 的 `children` 属性嵌套实现多级表头
<<< @/examples/simple-table/multi-header.vue
:::

## 表尾合计行 <play :source-code="FootSource" />

若表格展示的是各类数字，可以在表尾显示各列的合计。

<Foot />

:::details 可以通过自定义 `foot` slot实现
<<< @/examples/simple-table/foot.vue
:::

## 隐藏列 <play :source-code="HideColumnSource" />

`toggleColumn` 方法支持对列的隐藏或者显示操作。

<HideColumn />

:::details 暂不支持对多级表头以及存在合并单元格的表格进行操作
<<< @/examples/simple-table/hide-column.vue
:::

## 拖拽排序 <play :source-code="DndSource" />

利用[Sortablejs](https://github.com/SortableJS/Sortable)实现表格行拖拽移动位置。

<Dnd />

:::details 示例代码
<<< @/examples/simple-table/dnd.vue
:::

## 空数据 <play :source-code="EmptySource" />

<Empty />

:::details 示例代码
<<< @/examples/simple-table/empty.vue
:::

## 未知数据 <play :source-code="UnknownSource" />

<Unknown />

:::details 在传递的数据为 `null` 或者 `undefined` 时，可以自定义 `unknown` slot
<<< @/examples/simple-table/unknown.vue
:::

## Attributes

| 参数         | 说明                        | 类型    | 可选值                                | 默认值 |
| ------------ | ---------------------------------- | ------- | ------------------------------------- | ------ |
| row-key      | 行数据的 Key，用来优化 SimpleTable 的渲染。***如果表格数据标识符不是id字段，请一定要设置此值***          | string / function(row)\: string  | - |  id      |
| border       | 为表格设置边框样式          | string  | borderless/bordered/border-x/border-y |        |
| padding      | 设置表格两端的 padding 尺寸 | string  | 通用尺寸标签/自定义尺寸               |        |
| cell-padding      | 设置Td的 padding 尺寸 | string  | 通用尺寸标签/自定义尺寸               |        |
| gap          | list模式下，设置表格行间距 | string  | css尺寸               |        |
| gap-x        | list模式下，设置表格行横向间距 | string  | css尺寸               |        |
| gap-y        | list模式下，设置表格行纵向间距 | string  | css尺寸               |        |
| hover        | 表格行悬停效果                | boolean |                                       |        |
| cross-hover        | 表格列悬停效果                | boolean |                                       |        |
| stripe       | 表格条纹效果                | boolean / string | true / false / odd / even                                      | false  |
| list         | 列表样式                    | boolean |                                       | false  |
| auto-height  | 使Th和Td的高度变为auto       | boolean |                                       | false  |
| fixed-header | 固定表头                    | boolean |                                       | -      |
| fixed-footer | 固定表尾                    | boolean |                                       | -      |
| show-header  | 是否显示表头                | boolean | -                                     | true   |
| size         | 表格大小                    | string  | sm / md / lg                          | -      |
| resize         | 是否可以拖拽表头改变列宽                    | boolean  | -                          | false      |
| scroll-container         | 设置固定列时，如果滚动容器不是表格的直接父元素或者Scrollbar组件，需要设置此属性，用以支持滚动时固定列阴影效果                    | string / HTMLElement  | -                          | -      |
| highlight-current-row | 是否要高亮当前行    | boolean  | -     | false      |
| expand-row-keys | 默认展开，同时适用行展开与树展开。行展开时用行rowKey+slotName作为唯一标识符；树展开时使用rowKey作为唯一标识符。***数组值一定是字符串。***    | array  | -     | -      |
| default-expand-all | 是否默认展开所有行，当 SimpleTable 包含展开行存在或者为树形表格时有效    | boolean  | -     | false      |
| row-class-name | 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。    | function({ row, rowIndex }) / string  | -     | -      |
| row-style | 行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。    | function({ row, rowIndex }) / object  | -     | -      |
| cell-class-name | 单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。    | function({ row, column, rowIndex, columnIndex }) / string  | -     | -      |
| cell-style | 单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。    | function({ row, column, rowIndex, columnIndex }) / object  | -     | -      |
| header-row-class-name  | 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。  | function({ row, rowIndex }) / string  | -  | -      |
| header-row-style         | 表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。  | function({ row, rowIndex }) / object  | -  | -      |
| header-cell-class-name         | 表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。  | function({ row, column, rowIndex, columnIndex }) / string  | -  | -      |
| header-cell-style         | 表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。  | function({ row, column, rowIndex, columnIndex }) / object  | -  | -      |
| span-method         | 合并行或列的计算方法  | function({ row, column, rowIndex, columnIndex })  | -  | -      |
| first-column-index         | 树形展开操作作用的列  | number  | -  | 0      |
| tree-props         | 渲染嵌套数据的配置选项                    | object  | -                          | `{ hasChildren: 'hasChildren', children: 'children' }`      |
| load         | 加载子节点数据的函数，函数第二个参数包含了节点的层级信息                    | function(row, treeNode, resolve)  | -                          | -      |
| cols         | 列配置，参见下表                    | array  | -                          | -      |


## cols

| 参数           | 说明                                       | 类型    | 可选值            | 默认值 |
| -------------- | ------------------------------------------ | ------- | ----------------- | ------ |
| columnKey      | 列key，如果动态切换表格列，需要设置此值。否则列宽会计算错误   | string  |     |        |
| title          | 表格标题                                   | string  |                   |        |
| prop           | 表格列属性名称                             | string  |                   |        |
| showTooltip    | 是否显示 tooltip，需要配合列 width 值使用  | boolean |                   | false  |
| tooltipProps   | tooltip 属性，参考 Popover 组件            | object  |                   |        |
| align          | 水平对齐方式                                   | string  | left/center/right | left   |
| width          | 列宽                                       | string  |                   | -      |
| minWidth          | 最小列宽                                       | string  |                   | -      |
| maxWidth          | 最大列宽                                       | string  |                   | -      |
| fixed          | 固定列                                     | string / object  | left / right / `{ position: string; distance: string; }`        | -      || slotName       | 列 slot 名称，默认参数为 `row, column, rowIndex, columnIndex` 请参考示例   | string  | -                 | -      |
| headerSlotName | 列头 slot 名称，默认参数为 col，请参考示例 | string  | -                 | -      |
| sortable       | 是否为排序列 | boolean / string  | true / false / 'ascending' / 'descending'   | -      |
| filter         | 列筛选设置 | `object{ slotName: string, placement: string, popperClass: string }`  |  -  | -      |
| expand         | 展开列设置 | `object{ slotName: string, hideLabel: boolean }`  |  -  | -      |
| children       | 子列信息 |  array |  -  | -      |
| formatter       | 用来格式化内容 |  function(row, column, cellValue, rowIndex, columnIndex) |  -  | -      |

## Events

| 事件名称   | 说明           | 回调参数                            |
| ---------- | -------------- | ----------------------------------- |
| row-click  | 行单击事件     | row, rowIndex, event                |
| cell-click | 单元格单击事件 | row, col, rowIndex, colIndex, event |
| sort-change | 排序事件 | prop, sort |
| current-change | 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性 | currentRow, oldCurrentRow |
| expand | 展开事件 | expanded, rowkey, slotName |
| tree-expand | 树展开事件 | expanded, row |

## Methods

| 方法名 | 说明                            | 参数 |
| ------ | ------------------------------- | ---- |
| toggleExpand  | 展开/折叠行。由于每行可能有多个展开，所以需要传递需要展开的slotName | rowKey, slotName    |
| toggleExpandTree  | 展开树 | row    |
| toggleColumn  | 显示/隐藏列 | index, show（show可选）    |
| setCurrentRow  | 用于单选表格，设定某一行为选中行， 如果调用时不加参数，则会取消目前高亮行的选中状态 | row    |
| clearTooltip  | 隐藏tooltip | -    |

## Slots

| 名称  | 说明 |
| ------- | -------------- |
| empty   | 无数据时的提示 |
| unknown   | 表格数据为null或者undefined时，自定义内容 |
| more   | 下拉加载时，自定义内容 |
| foot   | 表尾 |