import { panelProps } from '@/components/panel';
import type { ExtractPropTypes, PropType } from 'vue';

export const modelessDialogProps = {
  beforeClose: {
    type: Function as PropType<(...args: any[]) => unknown>,
  },
  showClose: {
    type: Boolean,
    default: true,
  },
  showMaximize: {
    type: Boolean,
    default: true,
  },
  showCollapse: {
    type: Boolean,
    default: true,
  },
  customClass: {
    type: String,
    default: '',
  },
  animationName: {
    type: String,
    default: 'fade',
  },
  openDelay: {
    type: Number,
    default: 0,
  },
  closeDelay: {
    type: Number,
    default: 0,
  },
  top: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  modelValue: {
    type: Boolean,
    required: true,
  },
  height: {
    type: String,
  },
  width: {
    type: String,
  },
  zIndex: {
    type: [Number, String],
  },
  boundings: {
    type: Array as PropType<number[]>,
    validator: (value: any) => {
      return value ? Array.isArray(value) && value.length === 4 && value.every((v) => typeof v === 'number') : true;
    },
  },
  resize: Boolean,
  drag: {
    type: Boolean,
    default: true,
  },
  id: String,
  useDock: Boolean,
  snapshot: {
    type: [Boolean, String, Object] as PropType<boolean | string | { type: string; url: string }>,
    default: false,
  },
  ...panelProps,
};
export type ModelessDialogProps = ExtractPropTypes<typeof modelessDialogProps>;

export const modelessDialogEmits = {
  open: () => true,
  opened: () => true,
  close: () => true,
  closed: () => true,
  destroy: () => true,
  resize: () => true,
  'update:modelValue': (value: boolean) => typeof value === 'boolean',
  collapse: (value: boolean) => typeof value === 'boolean',
  maximize: (value: boolean) => typeof value === 'boolean',
};
export type ModelessDialogEmits = typeof modelessDialogEmits;

export interface ModelessInsance {
  close: () => void;
  toggleShow: (shown?: boolean) => void;
  toggleCollapse: (collapsable?: boolean) => void;
  toggleMaximize: (maximizable?: boolean) => void;
  isShown: () => boolean;
  isClosed: () => boolean;
  isCollapsed: () => boolean;
  isMaximized: () => boolean;
  title: string;
  snapshot: boolean | string | { type: string; url: string };
}

export interface ModelessProxy {
  visible: boolean;
  collapse: boolean;
  maximize: boolean;
  shown: boolean;
  panelClass: Record<string, unknown>;
  headerClass: unknown;
  bodyClass: unknown;
  footerClass: unknown;
  panelStyle: string[];
  collapseDialog: (collapsable?: boolean) => void;
  maximizeDialog: (maximizable?: boolean) => void;
}
