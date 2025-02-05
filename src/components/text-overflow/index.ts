import { withInstall } from '@/utils';
import TextOverflow from './src/text-overflow.vue';

import type { SFCWithInstall } from '@/utils';

export const EppTextOverflow: SFCWithInstall<typeof TextOverflow> = withInstall(TextOverflow);
export default EppTextOverflow;

export * from './src/text-overflow';
