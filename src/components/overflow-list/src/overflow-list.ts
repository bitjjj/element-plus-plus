import type { PropType, ExtractPropTypes } from 'vue';
import type OverflowList from './overflow-list.vue';

export const overflowListProps = {
  showCount: {
    type: Number,
    default: 1,
  },
  showType: {
    type: String as PropType<'expand' | 'tooltip'>,
    default: 'tooltip',
  },
  dropdownProps: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({}),
  },
};
export type OverflowListProps = ExtractPropTypes<typeof overflowListProps>;

export const overflowListEmits = {};
export type OverflowListEmits = typeof overflowListEmits;

export type OverflowListInstance = InstanceType<typeof OverflowList>;
