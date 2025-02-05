# Banner

<script setup>
import Basic from '/examples/banner/basic.vue'
import BasicSource from '/examples/banner/basic.vue?raw'
import Container from '/examples/banner/container.vue'
import ContainerSource from '/examples/banner/container.vue?raw'
import Description from '/examples/banner/description.vue'
import DescriptionSource from '/examples/banner/description.vue?raw'
</script>

Banners are usually used to indicate the status or notifications of the entire page. They are typically persistent and require the user to actively close them.

## Basic <play :source-code="BasicSource" />

<Basic />

:::details The default Banner will be displayed full-screen. You can use the `to` prop to target a specific DOM node.
<<< @/examples/banner/basic.vue
:::

## Targeting a Specific DOM Node <play :source-code="ContainerSource" />

Ensure the DOM node is loaded before the Banner component.

<Container />

:::details In this example, the Banner component has a delayed load to ensure the DOM container is loaded first.
<<< @/examples/banner/container.vue
:::

## Customization <play :source-code="DescriptionSource" />

<Description />

:::details Example code
<<< @/examples/banner/description.vue
:::


## Attributes

| Parameter        | Description   | Type                   | Optional Values     | Default Value |
| ----------- | ---------------------------------- | ------- | -------------------------- | ------ |
| model-value / v-model | Binding value      | boolean | —       | —       |
| title       | Title                               | string  | —                          | —      |
| type        | Type                               | string  | success/warning/info/error | info   |
| effect      | Style theme                           | string  | light / dark                    | light      |
| description | Supplementary text. Can also be passed through the default slot | string  | —   | —      |
| closable    | Whether it can be closed                         | boolean | —                          | true   |
| close-text  | Custom text for the close button                 | string  | —                          | —      |
| show-icon   | Whether to display the icon   | boolean | —        | false  |
| placement   | Placement                       | string | top / bottom                         | top  |
| animation-name   | Animation                       | string | -                         | -  |
| to          | Rendering container                        | string | -                         | body  |
| z-index     | zIndex value                       | number | -                         | -  |
| height     | Banner height                         | string | -                         | -  |
| position    | CSS `position` property setting for the Banner    | string | Valid CSS values like `fixed` / `absolute` | ***`fixed` when `to` is `body`, `absolute` otherwise***  |
| timeout     | Banner auto-close time, in milliseconds        | number | -                         | -  |

## Slots

| Name  | Description |
| ----- | ----------- |
| —     | Description        |
| icon  | Custom icon |
| title | Content of the title  |

## Events

| Event Name | Description            | Callback Parameter              |
| -------- | ----------------------- | -------- |
| close    | Triggered when closing the Banner | —        |

