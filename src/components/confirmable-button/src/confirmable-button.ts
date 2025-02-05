import type { PropType, ExtractPropTypes } from 'vue';
import type ConfirmableButton from './confirmable-button.vue';

export const confirmableButtonProps = {
  tip: {
    type: String,
    default: '',
  },
  popoverProps: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({}),
  },
  defaultState: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({
      text: true,
      type: 'primary',
    }),
  },
  confirmState: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({
      text: false,
      type: 'danger',
    }),
  },
};
export type ConfirmableButtonProps = ExtractPropTypes<typeof confirmableButtonProps>;

export const confirmableButtonEmits = {
  confirm: () => true,
};
export type ConfirmableButtonEmits = typeof confirmableButtonEmits;

export type ConfirmableButtonInstance = InstanceType<typeof ConfirmableButton>;
