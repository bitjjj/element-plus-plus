import type { ExtractPropTypes } from 'vue';
import type Spinner from './spinner.vue';

export const spinnerProps = {
  status: {
    type: String,
    default: '',
  },
  animation: {
    type: String,
    default: 'around-right',
  },
  duration: {
    type: String,
    default: '',
  },
  color: {
    type: String,
  },
  size: String,
};
export type SpinnerProps = ExtractPropTypes<typeof spinnerProps>;
export type SpinnerInstance = InstanceType<typeof Spinner>;
