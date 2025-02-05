import { computed } from 'vue';
import type { TreeProps } from './tree.type';

export const useTreeProp = (treeProps: TreeProps) => {
  const label = computed(() => {
    return treeProps.props?.label || 'label';
  });

  const key = computed(() => {
    return treeProps.nodeKey || 'id';
  });

  const disabled = computed(() => {
    return treeProps.props?.disabled || 'disabled';
  });

  return {
    key,
    label,
    disabled,
  };
};
