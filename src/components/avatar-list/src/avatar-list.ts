import type { PropType, ExtractPropTypes } from 'vue';
import type AvatarList from './avatar-list.vue';

export const avatarListProps = {
  data: {
    type: Array as PropType<Array<Record<string, any>>>,
    default: () => [],
  },
  indent: String,
  size: {
    type: [Number, String] as PropType<number | 'large' | 'default' | 'small'>,
    default: 'default',
  },
  fit: {
    type: String,
    default: 'cover',
  },
  shape: {
    type: String as PropType<'circle' | 'square'>,
    default: 'circle',
  },
  urlField: {
    type: String,
    default: 'url',
  },
  max: {
    type: Number,
    default: Number.MAX_SAFE_INTEGER,
  },
  maxBgColor: {
    type: String,
    default: 'black',
  },
  popoverProps: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({}),
  },
};
export type AvatarListProps = ExtractPropTypes<typeof avatarListProps>;

export const avatarListEmits = {
  click: (event: Record<string, any>) => event instanceof Object,
};
export type AvatarListEmits = typeof avatarListEmits;

export type AvatarListInstance = InstanceType<typeof AvatarList>;
