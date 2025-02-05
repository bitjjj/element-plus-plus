# Panel

<script setup>
import Basic from '/examples/panel/basic.vue'
import Borderless from '/examples/panel/borderless.vue'
import Radius from '/examples/panel/radius.vue'
import Padding from '/examples/panel/padding.vue'
import Class from '/examples/panel/class.vue'
import Simple from '/examples/panel/simple.vue'
import Header from '/examples/panel/header.vue'
import Advanced from '/examples/panel/advanced.vue'
import FullBody from '/examples/panel/full-body.vue'
import BasicSource from '/examples/panel/basic.vue?raw'
import BorderlessSource from '/examples/panel/borderless.vue?raw'
import RadiusSource from '/examples/panel/radius.vue?raw'
import PaddingSource from '/examples/panel/padding.vue?raw'
import ClassSource from '/examples/panel/class.vue?raw'
import SimpleSource from '/examples/panel/simple.vue?raw'
import HeaderSource from '/examples/panel/header.vue?raw'
import AdvancedSource from '/examples/panel/advanced.vue?raw'
import FullBodySource from '/examples/panel/full-body.vue?raw'
</script>

Panels typically consist of a header, body, and footer. In Hongluan, panels are mostly used as prompts, notifications, dialogs, or as containers outlining content areas, but their uses are not limited to these.

## Basic Style <play :source-code="BasicSource" />

The Panel component includes three slots: `header`, `body`, and `footer`. `body` is the default slot.

<Basic />

::: details Example code
<<< @/examples/panel/basic.vue
:::

## Borderless Style <play :source-code="BorderlessSource" />

The `borderless` prop makes the Panel component borderless, and the spacing between them will also change.

<Borderless />

::: details The `outlineless` prop can remove the outer outline border of the Panel.
<<< @/examples/panel/borderless.vue
:::

## Radius Prop <play :source-code="RadiusSource" />

The `radius` prop changes the rounded corner style of the Panel component.

<Radius />

::: details Example code
<<< @/examples/panel/radius.vue
:::

## Padding Prop <play :source-code="PaddingSource" />

The `padding` prop changes the padding size of the Panel component. `body-padding` controls the padding of the body separately and has higher priority than `padding`.

<Padding />

::: details Example code
<<< @/examples/panel/padding.vue
:::

## Custom Class Names <play :source-code="ClassSource" />

The `header-class`, `body-class`, and `footer-class` props allow you to add custom classes to the corresponding `header`, `body`, and `footer`.

<Class />

::: details Example code
<<< @/examples/panel/class.vue
:::

## Simple Form <play :source-code="SimpleSource" />

The Panel component allows removing the `header` and `footer` structure, giving you more flexibility in defining its use.

<Simple />

::: details Example code
<<< @/examples/panel/simple.vue
:::

## Extensible Header <play :source-code="HeaderSource" />

The `header` slot can hold your custom elements and components, and you don't even need to define styles.

<Header />

::: details The `header` slot provides three layout styles: `panel-header-left`, `panel-title`, and `panel-header-right`.
<<< @/examples/panel/header.vue
:::

## Advanced Features <play :source-code="AdvancedSource" />

The `panel` provides `collapse` and `fullscreen` features. You can use buttons to control them.

<Advanced />

::: details You can set `fullscreen` to an `object` type to initialize the position of the fullscreen Panel.
<<< @/examples/panel/advanced.vue
:::

## Adaptive Body Area <play :source-code="FullBodySource" />

You can set the `full-body` prop for the `panel` to make its `panel-body` automatically expand according to the height of the `panel`.

<FullBody />

::: details You can add a structure with the `scroll` property to make the content scroll within the panel. It can automatically adapt to the height of the `panel` without setting the height of the scrolling area.
<<< @/examples/panel/full-body.vue
:::

## Attributes

| Parameter        | Description   | Type                   | Optional Values     | Default Value |
| -------------- | --------------- | ------------------ | ------ | ------ |
| borderless     | Whether to remove the border                             | boolean   | —      | false  |
| outlineless    | Whether to remove the outline border                        | boolean | —      | false  |
| radius         | Rounded corners                                  | string| —      | 0  |
| padding        | Padding                                  | string| —      | 20px   |
| body-padding   | Body padding                             | string  | —      | 20px   |
| footer-padding | Footer padding                         | string  | —      | 20px   |
| header-class   | Custom class name for the header              | string   | —      | -      |
| header-style   | Custom style for the header              | string   | —      | -      |
| body-class     | Custom class name for the body              | string | —      | -      |
| body-style   | Custom style for the body               | string   | —      | -      |
| footer-class   | Custom class name for the footer              | string  | —      | -      |
| footer-style   | Custom style for the footer              | string   | —      | -      |
| fullscreen     | Fullscreen mode                              | boolean / `object{top: string; left: string; bottom: stirng; right: string;}` | —      | false  |
| collapsed      | Collapsed mode (collapsing is disabled in fullscreen mode)          | boolean   | —      | false  |
| full-body   | Makes the `panel-body` automatically expand according to the height of the `panel` | boolean  | —      | false  |

## Slots

| Name  | Description |
| ------ | ---------------- |
| —      | Content of the Panel body |
| header | Content of the Panel header |
| footer | Content of the Panel footer |
