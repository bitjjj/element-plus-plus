import { withInstall } from '@/utils';
import ConfirmableButton from './src/confirmable-button.vue';

import type { SFCWithInstall } from '@/utils';

export const EppConfirmableButton: SFCWithInstall<typeof ConfirmableButton> = withInstall(ConfirmableButton);
export default EppConfirmableButton;

export * from './src/confirmable-button';
