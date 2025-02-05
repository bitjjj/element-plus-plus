import { withInstall } from '@/utils';
import AvatarList from './src/avatar-list.vue';

import type { SFCWithInstall } from '@/utils';

export const EppAvatarList: SFCWithInstall<typeof AvatarList> = withInstall(AvatarList);
export default EppAvatarList;

export * from './src/avatar-list';
