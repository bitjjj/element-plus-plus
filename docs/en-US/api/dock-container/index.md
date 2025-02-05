# DockContainer

<script setup>
import Basic from '/examples/dock-container/basic.vue'
import BasicSource from '/examples/dock-container/basic.vue?raw'
import Header from '/examples/dock-container/header.vue'
import HeaderSource from '/examples/dock-container/header.vue?raw'
</script>

Primarily used in conjunction with ModelessDialog. After a ModelessDialog is collapsed, it is stored in this container. If it needs to be maintained globally, place this component at the same level as the root `router-view`.

## Basic <play :source-code="BasicSource" />

Only dialogs created via `ModelessDialogManager` can be stored in this container. Clicking a card within the container will automatically restore the previously stored `ModelessDialog` instance.

<Basic />

:::details When `snapshot` is `true`, html2canvas will be used for automatic screenshotting, which may cause lag. Please use the `true` value with caution. When `snapshot` is an object, the available `type` values are `image`, `video`, and `audio`. When `snapshot` is a `string`, excessively long text will be truncated automatically.
<<< @/examples/dock-container/basic.vue
:::

## Customizing ModelessDialog Header <play :source-code="HeaderSource" />

When using the `header` slot, the title displayed in the DockContainer will be the `innerText` value of the `panel-header` DOM element.

<Header />

:::details Example code
<<< @/examples/dock-container/header.vue
:::


## Attributes

| Parameter        | Description   | Type                   | Optional Values     | Default Value |
| ----------- | ---------------- | ------ | ------ | ------ |
| model-value / v-model | Whether to display the container | boolean  | —   | —      |
| width                 | Width of the container, effective when placed on the left or right | string | —  | -   |
| height                | Height of the container, effective when placed on the top or bottom | string | — | -   |
| item-width            | Width of each item in the container | string | —  | 150px   |
| item-height           | Height of each item in the container | string | — | 150px   |
| custom-class          | Custom class name for the container | string | — | —      |
| open-delay            | Delay time for opening the container, in milliseconds | number | —  | 0      |
| close-delay           | Delay time for closing the container, in milliseconds | number | —   | 0      |
| before-close          | Callback before closing, pauses the dialog closing | `function(done)` where `done` is used to close the Dialog | — | —      |
| animation-name        | Container animation type | string | - | Different default values depending on the placement     |
| z-index               | Custom z-index  | number | - | -      |
| placement             | Placement | string | bottom / top / left / right | bottom      |

## Slots

| Name  | Description |
| ----------- | -------------- |
| default     | Custom content, parameter is `array<{id, title, snapshot }>` |
| dock-item     | Custom content for each item, parameter is `item: {id, title, snapshot }` |

## Events

| Event Name | Description            | Callback Parameter              |
| -------- | ----------------------- | -------- |
| open     | Callback when the container opens           | —        |
| opened   | Callback when the container's open animation finishes | —        |
| close    | Callback when the container closes           | —        |
| closed   | Callback when the container's close animation finishes | —        |
| item-closed    | Callback when an item in the container is closed           | (item, items)：the closed item, the remaining items        |
| item-added   | Callback when an item is added to the container | (item, items)：the added item, the displayed items         |
| item-restored   | Callback when an item in the container is restored | (item, items)：the restored item, the displayed items         |
