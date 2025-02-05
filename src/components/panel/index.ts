import { withInstall } from '@/utils';
import Panel from './src/panel.vue';

import type { SFCWithInstall } from '@/utils';

export const EppPanel: SFCWithInstall<typeof Panel> = withInstall(Panel);
export default EppPanel;

export * from './src/panel';
