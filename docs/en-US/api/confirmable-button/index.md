# ConfirmableButton

<script setup>
import Basic from '/examples/confirmable-button/basic.vue'
import BasicSource from '/examples/confirmable-button/basic.vue?raw'
import Slot from '/examples/confirmable-button/slot.vue'
import SlotSource from '/examples/confirmable-button/slot.vue?raw'
import Props from '/examples/confirmable-button/props.vue'
import PropsSource from '/examples/confirmable-button/props.vue?raw'
</script>


Usually used for operations that require reconfirmation.

## Basic <play :source-code="BasicSource" />

<Basic />

:::details Example code
<<< @/examples/confirmable-button/basic.vue
:::

## Custom Prompt Content <play :source-code="SlotSource" />

<Slot />

:::details Example code
<<< @/examples/confirmable-button/slot.vue
:::

## Custom Attributes <play :source-code="PropsSource" />

<Props />

:::details Example code
<<< @/examples/confirmable-button/props.vue
:::

## Attributes

| Parameter        | Description   | Type                   | Optional Values     | Default Value |
| ----------- | ---------------- | ------ | ------ | ------ |
| tip       | Prompt text         | string | —      | —      |
| default-state  | Default button state. All button properties can be used. Refer to the Button component. | `Record<string, any>` | —      | `{ text: true, type: 'primary' }`      |
| confirm-state  | Confirmation button state. All button properties can be used. Refer to the Button component. | `Record<string, any>` | —      | `{ text: false, type: 'danger' }`      |
| popover-props  | Popover properties. Refer to the Popover component.  | `Record<string, any>` | -      | -      |

## Slots

| Name  | Description |
| ----------- | -------------- |
| -     | Custom button content |
| tip       | Custom prompt content     |

## Events

| Event Name | Description            | Callback Parameter              |
| ----------- | -------------- | -------------- |
| confirm     | Triggered upon confirmation |- |


