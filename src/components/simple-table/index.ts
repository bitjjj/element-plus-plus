import { withInstall } from '@/utils';
import SimpleTable from './src/simple-table.vue';
import SortableIcon from './src/sortable.vue';
import FilterIcon from './src/filter.vue';

import type { SFCWithInstall } from '@/utils';

export const EppSimpleTable: SFCWithInstall<typeof SimpleTable> = withInstall(SimpleTable, {
  SortableIcon,
  FilterIcon,
});
export default EppSimpleTable;

export * from './src/simple-table';
