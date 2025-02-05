import { withInstall } from '@/utils';
import ModelessDialog from './src/modeless-dialog.vue';

import type { SFCWithInstall } from '@/utils';

export const EppModelessDialog: SFCWithInstall<typeof ModelessDialog> = withInstall(ModelessDialog);
export default EppModelessDialog;

export * from './src/manager';
export * from './src/modeless-dialog';
