import type { PropType, ExtractPropTypes } from 'vue';
import type Banner from './banner.vue';

export const bannerProps = {
  modelValue: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  type: {
    type: String as PropType<'success' | 'warning' | 'error' | 'info'>,
    default: 'info',
  },
  closable: {
    type: Boolean,
    default: true,
  },
  closeText: {
    type: String,
    default: '',
  },
  showIcon: Boolean,
  effect: {
    type: String as PropType<'light' | 'dark'>,
    default: '',
  },
  placement: {
    type: String as PropType<'top' | 'bottom'>,
    default: 'top',
  },
  animationName: {
    type: String,
    default: '',
  },
  to: {
    type: String,
    default: 'body',
  },
  zIndex: Number,
  height: String,
  position: String as PropType<'fixed' | 'absolute'>,
  timeout: Number,
};
export type BannerProps = ExtractPropTypes<typeof bannerProps>;

export const bannerEmits = {
  close: () => true,
  'update:modelValue': (visible: boolean) => typeof visible === 'boolean',
};
export type BannerEmits = typeof bannerEmits;

export type BannerInstance = InstanceType<typeof Banner>;
