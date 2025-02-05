import { withInstall } from '@/utils';
import OverflowList from './src/overflow-list.vue';

import type { SFCWithInstall } from '@/utils';

export const EppOverflowList: SFCWithInstall<typeof OverflowList> = withInstall(OverflowList);
export default EppOverflowList;

export * from './src/overflow-list';
