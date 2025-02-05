import { getCurrentInstance, ref, watch } from 'vue';

import type { Ref } from 'vue';
import type { GetRowKey, RowDataType } from '../simple-table';

function useExpand({
  expandRowKeys,
  defaultExpandAll,
  getRowKey,
}: {
  defaultExpandAll: Ref<boolean>;
  expandRowKeys: Ref<string[]>;
  getRowKey: GetRowKey;
}) {
  const allExpandKeys = ref<Record<string, boolean>>(
    expandRowKeys.value.reduce((prev, cur) => ((prev[cur] = true), prev), {} as Record<string, boolean>),
  );

  const { emit } = getCurrentInstance()!;

  const expandedKeyExisted = (row: RowDataType, slotName: string): boolean => {
    if (!slotName) return false;
    const rowKey = getRowKey(row) + slotName;
    return rowKey in allExpandKeys.value ? allExpandKeys.value[rowKey] : defaultExpandAll.value;
  };
  const toggleExpandRow = (row: RowDataType, slotName: string) => {
    const key = getRowKey(row);
    toggleExpand(key, slotName);
  };
  const toggleExpand = (key: string, slotName: string) => {
    const rowKey = key + slotName;
    allExpandKeys.value[rowKey] =
      rowKey in allExpandKeys.value ? !allExpandKeys.value[rowKey] : !defaultExpandAll.value;
    emit('expand', allExpandKeys.value[rowKey], rowKey, slotName);
  };

  watch(expandRowKeys, () => {
    allExpandKeys.value = expandRowKeys.value.reduce(
      (prev, cur) => ((prev[cur] = true), prev),
      {} as Record<string, boolean>,
    );
  });

  return {
    expandedKeyExisted,
    toggleExpandRow,
    toggleExpand,
  };
}

export { useExpand };
