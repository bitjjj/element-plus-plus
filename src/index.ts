import EppAlias from './components/alias';
import EppAvatarList from './components/avatar-list';
import EppBanner from './components/banner';
import EppConfirmableButton from './components/confirmable-button';
import EppDockContainer from './components/dock-container';
import EppModelessDialog from './components/modeless-dialog';
import EppOverflowList from './components/overflow-list';
import EppPanel from './components/panel';
import EppRipple from './components/ripple';
import EppSimpleTable from './components/simple-table';
import EppSpinner from './components/spinner';
import EppTextOverflow from './components/text-overflow';
import EppTreeTransfer from './components/tree-transfer';
import { version } from '../package.json';

import type { App } from 'vue';

const components = [
  EppAlias,
  EppAvatarList,
  EppBanner,
  EppConfirmableButton,
  EppDockContainer,
  EppModelessDialog,
  EppOverflowList,
  EppPanel,
  EppRipple,
  EppSimpleTable,
  EppSpinner,
  EppTextOverflow,
  EppTreeTransfer,
];

export const install = function (app: App) {
  components.forEach((component) => {
    app.use(component);
  });
};

export * from './components';

export default {
  version,
  install,
};
