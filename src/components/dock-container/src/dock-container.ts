import type { ExtractPropTypes, PropType } from 'vue';

export type DockContainerPlacement = 'top' | 'bottom' | 'left' | 'right';
export type DockItem = {
  id: string;
  title: string;
  snapshot: boolean | string | Record<string, any>;
};

export const dockContainerProps = {
  beforeClose: {
    type: Function as PropType<(...args: any[]) => unknown>,
  },
  customClass: {
    type: String,
    default: '',
  },
  animationName: {
    type: String,
    default: '',
  },
  openDelay: {
    type: Number,
    default: 0,
  },
  closeDelay: {
    type: Number,
    default: 0,
  },
  modelValue: {
    type: Boolean,
    required: true,
  },
  placement: {
    type: String as PropType<DockContainerPlacement>,
    default: 'bottom',
  },
  height: {
    type: String,
  },
  width: {
    type: String,
  },
  itemHeight: {
    type: String,
  },
  itemWidth: {
    type: String,
  },
  zIndex: {
    type: Number,
  },
};
export type DockContainerProps = ExtractPropTypes<typeof dockContainerProps>;

export const dockContainerEmits = {
  open: () => true,
  opened: () => true,
  close: () => true,
  closed: () => true,
  'item-added': (dockItem: DockItem, dockItems: DockItem[]) => typeof dockItem === 'object' && Array.isArray(dockItems),
  'item-closed': (dockItem: DockItem, dockItems: DockItem[]) =>
    typeof dockItem === 'object' && Array.isArray(dockItems),
  'item-restored': (dockItem: DockItem, dockItems: DockItem[]) =>
    typeof dockItem === 'object' && Array.isArray(dockItems),
  'update:modelValue': (value: boolean) => typeof value === 'boolean',
};
export type DockContainerEmits = typeof dockContainerEmits;
