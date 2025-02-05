import type { ExtractPropTypes, PropType } from 'vue';
import type TextOverflow from './text-overflow.vue';

export const textOverflowProps = {
  effect: {
    type: String as PropType<'light' | 'dark'>,
    default: 'light',
  },
  placement: {
    type: String,
    default: 'top',
  },
  width: [String, Number],
  method: {
    type: String as PropType<'width' | 'length' | 'autoWidth'>,
    default: 'width',
  },
  length: {
    type: Number,
    default: -1,
  },
};
export type TextOverflowProps = ExtractPropTypes<typeof textOverflowProps>;
export type TextOverflowInstance = InstanceType<typeof TextOverflow>;
