# ModelessDialog

<script setup>
import Basic from '/examples/modeless-dialog/basic.vue'
import Bounding from '/examples/modeless-dialog/bounding.vue'
import Manager from '/examples/modeless-dialog/manager.vue'
import ManagerApi from '/examples/modeless-dialog/manager-api.vue'
import Reactive from '/examples/modeless-dialog/reactive.vue'
import Example from '/examples/modeless-dialog/example.vue'
import BasicSource from '/examples/modeless-dialog/basic.vue?raw'
import BoundingSource from '/examples/modeless-dialog/bounding.vue?raw'
import ManagerSource from '/examples/modeless-dialog/manager.vue?raw'
import ManagerApiSource from '/examples/modeless-dialog/manager-api.vue?raw'
import ReactiveSource from '/examples/modeless-dialog/reactive.vue?raw'
import ExampleSource from '/examples/modeless-dialog/example.vue?raw'
</script>


A non-modal dialog based on Panel, supporting features such as maximize, minimize, collapse, expand, and drag to resize.

## Basic <play :source-code="BasicSource" />

You can instantiate this component by declaring it as a component. The component is automatically destroyed after clicking the close button or navigating to a different route.

<Basic />

:::details You can set `left`/`top` in the style to override the default pop-up position.
<<< @/examples/modeless-dialog/basic.vue
:::

## Dragging Bounds <play :source-code="BoundingSource" />

You can limit the draggable area using the `boundings` prop. `boundings` is an array of four numbers representing the top-left corner coordinates (x, y) and the bottom-right corner coordinates (x, y).

<Bounding />

:::details Example code
<<< @/examples/modeless-dialog/bounding.vue
:::

## Using ModelessDialogManager <play :source-code="ManagerSource" />

Create dialogs by calling the `show` method of the `ModelessDialogManager` API. These dialogs will persist even after page transitions.

<Manager />

:::details The `id` prop requires a unique and fixed value.
<<< @/examples/modeless-dialog/manager.vue
:::

## ModelessDialogManager API Example <play :source-code="ManagerApiSource" />

<ManagerApi />

:::details `header`, `body`, and `footer` must be VNode instances; otherwise, they will not be processed.
<<< @/examples/modeless-dialog/manager-api.vue
:::

## ModelessDialogManager API Reactive Example <play :source-code="ReactiveSource" />

If you need to dynamically modify the dialog, you can use `reactive` to wrap all properties.

<Reactive />

:::details Example code
<<< @/examples/modeless-dialog/reactive.vue
:::

## Preview Image/Video/Document <play :source-code="ExampleSource" />

- Resizing is possible by dragging the handle at the bottom-right corner.
- Can maximize and minimize the window/dialog.
- The floating window persists across route changes.

<Example />

:::details Example code
<<< @/examples/modeless-dialog/example.vue
:::

## Using with DockContainer

Please refer to the DockContainer component documentation.

## Attributes

| Parameter        | Description   | Type                   | Optional Values     | Default Value |
| ----------- | ---------------- | ------ | ------ | ------ |
| model-value / v-model | Whether to display the dialog | boolean  | —   | —      |
| width                 | Width of the dialog | string | —  | -   |
| height                | Height of the dialog | string | — | -   |
| top                   | `top` value in the dialog's CSS    | string | —  | -   |
| resize                | Whether the bottom-right corner can be dragged to resize  | boolean | —  | false   |
| drag                  | Whether the dialog is draggable  | boolean | —  | true   |
| boundings             | Draggable area bounds  | array | —  | -   |
| custom-class          | Custom class name for the dialog | string | — | —      |
| open-delay            | Delay time for opening the dialog (milliseconds) | number | —  | 0      |
| close-delay           | Delay time for closing the dialog (milliseconds) | number | —   | 0      |
| show-close            | Whether to display the close button | boolean  | —  | true   |
| show-maximize         | Whether to display the maximize button | boolean  | —  | true   |
| show-collapse         | Whether to display the collapse button | boolean  | —  | true   |
| before-close          | Callback before closing; pauses dialog closing. `done` is used to close the Dialog | — | —      |
| animation-name        | Dialog animation type  | string | - | -      |
| title                 | Dialog title (lower priority than the header slot) | string | - | -      |
| z-index               | Custom z-index  | number | - | -      |
| id                    | ID of the dialog's root node  | string | - | -      |
| use-dock              | Whether to use with DockContainer. If set to `true`, the dialog will be stored in DockContainer when collapsed. | boolean | - | false      |
| snapshot              | The format to display when used with DockContainer | boolean / string / object `{ type: string, url: string }` | - | false      |
| Panel Component Attributes   | The dialog is built based on the Panel component and automatically supports all Panel component attributes. | - | - | -      |

## Slots

| Name  | Description |
| ----------- | -------------- |
| default     | Custom content |
| header       | Custom header     |
| footer | Custom footer |

## Events

| Event Name | Description            | Callback Parameter              |
| -------- | ----------------------- | -------- |
| open     | Callback when the dialog opens           | —        |
| opened   | Callback when the dialog's open animation finishes | —        |
| close    | Callback when the dialog closes           | —        |
| closed   | Callback when the dialog's close animation finishes | —        |
| resize   | Callback when the dialog is resized by dragging | Dialog DOM root node        |
| maximize   | Callback when the dialog is maximized/minimized | Whether maximized        |
| collapse   | Callback when the dialog is collapsed/expanded | Whether collapsed       |

## ModelessDialogManager Methods

| Method     | Description   | Parameters  |
| ---------- | ------------------------ | ------------------------------------ |
| show | Shows the dialog. Automatically checks if a dialog with the specified ID exists; if so, returns the existing dialog instance. | Dialog supported attributes & `{ header: VNode, body: VNode, footer: VNode }` |
| get | Gets the dialog instance | Dialog ID |
| has | Checks if the dialog already exists | Dialog ID|
| closeAll | Closes all dialogs | - |
| showAll | Shows all dialogs | - |
| hideAll | Hides all dialogs | - |
| collapseAll | Collapses all dialogs | - |
| expandAll | Expands all dialogs | - |

## ModelessDialog Instance Methods

| Method        | Description     | Parameters    |
| ---------- | ------------------------ | ------------------------------------ |
| close | Closes the dialog  | - |
| toggleShow | Shows/hides the dialog | `shown: boolean` (manually set show or hide) |
| toggleCollapse | Collapses/expands the dialog | `collapsable: boolean` (manually set collapse or expand)  |
| toggleMaximize | Maximizes/restores the dialog  | `maximizable: boolean` (manually set maximize)  |
| isShown | Checks if the dialog is currently shown | - |
| isClosed | Checks if the dialog is currently closed | - |
| isCollapsed | Checks if the dialog is currently collapsed | - |
| isMaximized | Checks if the dialog is currently maximized | - |
