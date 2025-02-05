import { withInstall } from '@/utils';
import Alias from './src/index.vue';

import type { SFCWithInstall } from '@/utils';

export const EppAlias: SFCWithInstall<typeof Alias> = withInstall(Alias);
export default EppAlias;
