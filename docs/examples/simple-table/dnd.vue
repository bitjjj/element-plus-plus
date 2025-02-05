<template>
  <epp-simple-table
    :cols="cols"
    :data="tableData"
    class="sortable-table"
    @row-click="rowClicked"
    @cell-click="cellClicked"
  >
    <template #firstCol>
      <el-checkbox v-model="selectedAll" :indeterminate="isIndeterminate" @change="selectAll" />
    </template>
    <template #tableIndex="{ row }">
      <el-checkbox v-model="selectedRows" :value="row.id" @change="selectRow(row.id)">{{ '' }}</el-checkbox>
    </template>

    <template #handle>
      <a>修改</a>
    </template>
  </epp-simple-table>
</template>
<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import { isClient } from '@vueuse/core';
import Sortable from 'sortablejs';
import type { ColumnType } from 'element-plus-plus';

const selectedAll = ref(false);
const selectedRows = ref<number[]>([]);
const isIndeterminate = ref(false);

const tableData = ref([
  {
    id: 1,
    name: '柏庐',
    sex: '女',
    org: '某个公司',
    des: '来自UED的设计师来自UED的设计来自UED的设计师来自UED的设计来自UED的设计师来自UED的设计来自UED的设计师来自UED的设计来自UED的设计师来自UED的设计来自UED的设计师来自UED的设计',
    otherInfo: {
      age: 20,
    },
  },
  {
    id: 2,
    name: '军结',
    sex: '男',
    org: '某个公司',
    des: '经验丰富的前端工程师',
    otherInfo: {
      age: 22,
    },
  },
  {
    id: 3,
    name: '钞洋',
    sex: '男',
    org: '某个公司',
    des: '90后交互设计师',
    otherInfo: {
      age: 28,
    },
  },
  {
    id: 4,
    name: '钞洋1',
    sex: '男',
    org: '某个公司',
    des: '90后交互设计师',
    otherInfo: {
      age: 28,
    },
  },
  {
    id: 5,
    name: '钞洋2',
    sex: '男',
    org: '某个公司',
    des: '90后交互设计师',
    otherInfo: {
      age: 28,
    },
  },
]);
const cols = ref([
  { title: '#', slotName: 'tableIndex', headerSlotName: 'firstCol', width: '3em' },
  { title: '用户名', prop: 'name' },
  { title: '年龄', prop: 'otherInfo.age' },
  { title: '单位', prop: 'org', align: 'center' },
  {
    title: '简介',
    prop: 'des',
    align: 'center',
    showTooltip: true,
    width: '40%',
    tooltipProps: { width: '200px', popperClass: 'test-tip' },
  },
  { title: '操作', slotName: 'handle', align: 'center' },
]);

const selectAll = () => {
  if (selectedAll.value) {
    selectedRows.value.splice(0, selectedRows.value.length);
    selectedRows.value.push(...tableData.value.map((d) => d.id));
    isIndeterminate.value = false;
  } else {
    selectedRows.value.splice(0, selectedRows.value.length);
  }
};
const selectRow = () => {
  selectedAll.value = selectedRows.value.length === tableData.value.length;
  if (selectedRows.value.length > 0 && selectedAll.value == false) {
    isIndeterminate.value = true;
  } else {
    isIndeterminate.value = false;
  }
};
const rowClicked = (row: Record<string, any>, rowIndex: number, event: Event) => {
  console.log('rowClicked', row, rowIndex, event);
};
const cellClicked = (row: Record<string, any>, col: ColumnType, rowIndex: number, colIndex: number, event: Event) => {
  console.log('cellClicked', row, col, rowIndex, colIndex, event);
};

onMounted(() => {
  if (!isClient) return;
  const el = document.querySelector('.sortable-table > tbody');
  Sortable.create(el, {
    disabled: false,
    handle: 'tr',
    animation: 150,
    onEnd: (e: any) => {
      const arr = tableData.value;
      arr.splice(e.newIndex, 0, arr.splice(e.oldIndex, 1)[0]);
      nextTick(() => {
        tableData.value = arr;
      });
    },
  });
});
</script>
