import { vRipple } from './src/directive';

import type { App } from 'vue';

// installer and everything in all
export const EppRipple = {
  install(app: App) {
    app.directive('ripple', vRipple);
  },
  directive: vRipple,
};

export default EppRipple;
export { vRipple, vRipple as EppRippleDirective };
