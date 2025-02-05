import { withInstall } from '@/utils';
import Banner from './src/banner.vue';

import type { SFCWithInstall } from '@/utils';

export const EppBanner: SFCWithInstall<typeof Banner> = withInstall(Banner);
export default EppBanner;

export * from './src/banner';
