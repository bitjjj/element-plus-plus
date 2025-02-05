import { getCurrentInstance, ref } from 'vue';

import type { Ref } from 'vue';
import type { GetRowKey, TreeProps, LoadFunction, RowDataType } from '../simple-table';

export type TableTreeNode = {
  isLoading: boolean;
  lazy: boolean;
  level: number;
  expanded?: boolean;
};

function useTree({
  load,
  treeProps,
  getRowKey,
  defaultExpandAll,
  expandRowKeys,
}: {
  load: LoadFunction | undefined;
  treeProps: TreeProps;
  getRowKey: GetRowKey;
  defaultExpandAll: Ref<boolean>;
  expandRowKeys: Ref<string[]>;
}) {
  const tableTreeMap = ref<Record<string, TableTreeNode>>({});

  const { emit } = getCurrentInstance()!;
  const childrenKey = treeProps.children;
  const hasChildrenKey = treeProps.hasChildren;

  const hasChildren = (row: Record<string, any>): boolean => {
    if (row[childrenKey] && Array.isArray(row[childrenKey]) && row[childrenKey].length) return true;
    if (row[hasChildrenKey]) return true;
    return false;
  };

  const walkTreeNode = (data: RowDataType[], level = 0) => {
    data &&
      data.forEach((row: any) => {
        const rowKey = getRowKey(row);
        const expanded = expandRowKeys.value.includes(rowKey) ? true : defaultExpandAll.value;
        if (row[childrenKey] && Array.isArray(row[childrenKey])) {
          tableTreeMap.value[rowKey] = {
            lazy: false,
            isLoading: false,
            expanded,
            level,
          };
          walkTreeNode(row[childrenKey], level + 1);
        } else if (row[hasChildrenKey]) {
          tableTreeMap.value[rowKey] = {
            lazy: true,
            isLoading: false,
            expanded: false,
            level,
          };
          expanded && toggleExpandTree(row);
        }
      });
  };

  const loadChildren = (row: RowDataType, level: number, finish?: () => void) => {
    tableTreeMap.value[getRowKey(row)] = {
      lazy: false,
      isLoading: true,
      expanded: false,
      level: level,
    };
    if (load) {
      load(row, { level }, (children: RowDataType[]) => {
        row[childrenKey] = children;
        tableTreeMap.value[getRowKey(row)].isLoading = false;
        walkTreeNode(children, level + 1);
        finish && finish();
      });
    } else {
      row[childrenKey] = [];
      tableTreeMap.value[getRowKey(row)].isLoading = false;
      finish && finish();
    }
  };

  const toggleExpandTree = (row: RowDataType) => {
    return new Promise<void>((resolve) => {
      if (tableTreeMap.value[getRowKey(row)].lazy) {
        loadChildren(row, tableTreeMap.value[getRowKey(row)].level, () => {
          tableTreeMap.value[getRowKey(row)].expanded = true;
          resolve();
          emit('tree-expand', true, row);
        });
      } else {
        tableTreeMap.value[getRowKey(row)].expanded = !tableTreeMap.value[getRowKey(row)].expanded;
        resolve();
        emit('tree-expand', tableTreeMap.value[getRowKey(row)].expanded, row);
      }
    });
  };

  return {
    walkTreeNode,
    hasChildren,
    loadChildren,
    tableTreeMap,
    toggleExpandTree,
  };
}

export { useTree };
