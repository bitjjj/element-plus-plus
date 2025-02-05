import { withInstall } from '@/utils';
import Spinner from './src/spinner.vue';

import type { SFCWithInstall } from '@/utils';

export const EppSpinner: SFCWithInstall<typeof Spinner> = withInstall(Spinner);
export default EppSpinner;

export * from './src/spinner';
