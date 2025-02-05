import { h } from 'vue';

import type { VNode, PropType, ExtractPropTypes } from 'vue';
import type { TreeProps } from './tree.type';
import type TreeTransfer from './tree-transfer.vue';

export const treeTransferProps = {
  modelValue: {
    type: Array as PropType<Array<string | number>>,
    default: () => [],
  },
  treeProps: {
    type: Object as PropType<TreeProps>,
    default: () => ({}),
  },
  titles: {
    type: Array as PropType<any> as PropType<[string, string]>,
    default: () => [],
  },
  filterPlaceholder: {
    type: String,
    default: '',
  },
  renderContent: Function as PropType<(render: typeof h, data: unknown[], mark: string) => VNode>,
  filterable: {
    type: Boolean,
    default: false,
  },
};
export type TreeTransferProps = ExtractPropTypes<typeof treeTransferProps>;

export const treeTransferEmits = {
  'update:modelValue': (keys: Array<string | number>) => Array.isArray(keys),
};
export type TreeTransferEmits = typeof treeTransferEmits;

export type TreeTransferInstance = InstanceType<typeof TreeTransfer>;
