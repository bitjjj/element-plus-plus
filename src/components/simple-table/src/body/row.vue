<template>
  <template v-for="(row, rowIndex) of data" :key="getRowKey(row)">
    <tr
      :class="[
        typeof rowClassName === 'string' ? rowClassName : rowClassName({ row, rowIndex }),
        currentSelectedRow === row ? 'current-row' : '',
      ]"
      :style="[
        typeof rowStyle === 'function' ? rowStyle({ row, rowIndex }) : rowStyle,
        level && `--tree-level:${level}`,
      ]"
      @click="($event) => $emit('row-click', row, rowIndex, $event)"
    >
      <template
        v-for="(column, columnIndex) of realColsInfo.realCols"
        :key="`${column.columnKey || ''}${getRowKey(row)},${columnIndex}`"
      >
        <cell
          :column="column"
          :column-index="columnIndex"
          :row="row"
          :row-index="rowIndex"
          :cell-class-name="cellClassName"
          :cell-style="cellStyle"
          :span="getSpan({ row, column, rowIndex, columnIndex })"
          :expanded="expandedKeyExisted(row, column.expand?.slotName)"
          :tree-expanded="tableTreeMap[getRowKey(row)]?.expanded"
          :show-tooltip="column.showTooltip && isShowTooltipMap[rowIndex + '/' + columnIndex]"
          :has-children="hasChildren(row)"
          :is-loading="tableTreeMap[getRowKey(row)]?.isLoading"
          :first-column-index="firstColumnIndex"
          :has-tree-data="hasTreeData"
          @cell-click="($event) => $emit('cell-click', row, column, rowIndex, columnIndex, $event)"
          @expand="toggleExpandRow(row, column.expand?.slotName)"
          @tree-expand="toggleExpandTree(row)"
          @mouseover="($event) => tdMouseover($event, rowIndex, columnIndex)"
          @mouseleave="tdMouseleave"
        >
          <slot :name="column.slotName" v-bind="{ row, rowIndex, column, columnIndex }"></slot>
        </cell>
      </template>
    </tr>
    <template v-for="name in expandSlotNames" :key="name">
      <tr v-if="expandedKeyExisted(row, name)" :class="['expand-row', name]">
        <td :colspan="realColsInfo.realCols.length">
          <slot :name="name" :row="row"></slot>
        </td>
      </tr>
    </template>
    <body-row v-if="tableTreeMap[getRowKey(row)]?.expanded" :data="row?.children ?? []" :level="level + 1">
      <template v-for="name in slotNames" #[name]="colData">
        <slot :name="name" v-bind="colData"></slot>
      </template>
      <template v-for="name in expandSlotNames" #[name]="colData">
        <slot :name="name" v-bind="colData"></slot>
      </template>
    </body-row>
  </template>
</template>
<script lang="ts">
// @ts-nocheck
import { defineComponent, inject } from 'vue';
import Cell from './cell';
import { simpleTableContextKey, simpleTableProps } from '../simple-table';

export default defineComponent({
  name: 'BodyRow',
  components: { Cell },
  props: {
    data: simpleTableProps.data,
    level: {
      type: Number,
      default: 0,
    },
  },
  emits: ['row-click', 'cell-click'],
  setup() {
    const {
      rowClassName,
      rowStyle,
      cellClassName,
      cellStyle,
      firstColumnIndex,
      load,
      getSpan,
      currentSelectedRow,
      slotNames,
      expandSlotNames,
      realColsInfo,
      getRowKey,
      toggleExpandRow,
      expandedKeyExisted,
      isShowTooltipMap,
      tdMouseover,
      tdMouseleave,
      tableTreeMap,
      hasChildren,
      hasTreeData,
      toggleExpandTree,
    } = inject(simpleTableContextKey)!;

    return {
      rowClassName,
      rowStyle,
      cellClassName,
      cellStyle,
      firstColumnIndex,
      load,
      getSpan,
      currentSelectedRow,
      slotNames,
      expandSlotNames,
      realColsInfo,
      getRowKey,
      toggleExpandRow,
      expandedKeyExisted,
      isShowTooltipMap,
      tdMouseover,
      tdMouseleave,
      tableTreeMap,
      hasChildren,
      hasTreeData,
      toggleExpandTree,
    };
  },
});
</script>
