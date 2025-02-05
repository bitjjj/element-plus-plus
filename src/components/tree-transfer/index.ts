import { withInstall } from '@/utils';
import TreeTransfer from './src/tree-transfer.vue';

import type { SFCWithInstall } from '@/utils';

export const EppTreeTransfer: SFCWithInstall<typeof TreeTransfer> = withInstall(TreeTransfer);
export default EppTreeTransfer;

export * from './src/tree-transfer';
