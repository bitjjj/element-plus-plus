import { withInstall } from '@/utils';
import DockContainer from './src/dock-container.vue';

import type { SFCWithInstall } from '@/utils';

export const EppDockContainer: SFCWithInstall<typeof DockContainer> = withInstall(DockContainer);
export default EppDockContainer;

export * from './src/dock-container';
