<template>
  <epp-simple-table :cols="cols" :data="tableData" border="bordered" :span-method="arraySpanMethod" />
  <epp-simple-table :cols="cols" :data="tableData" border="bordered" class="m-t-md" :span-method="objectSpanMethod" />
</template>
<script setup lang="ts">
import { ref } from 'vue';

const tableData = ref([
  {
    id: '12987122',
    name: 'Tom',
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
  },
  {
    id: '12987123',
    name: 'Tom',
    amount1: '165',
    amount2: '4.43',
    amount3: 12,
  },
  {
    id: '12987124',
    name: 'Tom',
    amount1: '324',
    amount2: '1.9',
    amount3: 9,
  },
  {
    id: '12987125',
    name: 'Tom',
    amount1: '621',
    amount2: '2.2',
    amount3: 17,
  },
  {
    id: '12987126',
    name: 'Tom',
    amount1: '539',
    amount2: '4.1',
    amount3: 15,
  },
]);
const cols = ref([
  { title: 'id', prop: 'id' },
  { title: '用户名', prop: 'name' },
  { title: 'Amount1', prop: 'amount1' },
  { title: 'Amount2', prop: 'amount2' },
  { title: 'Amount3', prop: 'amount3' },
]);

const arraySpanMethod = ({ rowIndex, columnIndex }: { rowIndex: number; columnIndex: number }) => {
  if (rowIndex % 2 === 0) {
    if (columnIndex === 0) {
      return [1, 2];
    } else if (columnIndex === 1) {
      return [0, 0];
    }
  }
};

const objectSpanMethod = ({ rowIndex, columnIndex }: { rowIndex: number; columnIndex: number }) => {
  if (columnIndex === 0) {
    if (rowIndex % 2 === 0) {
      return {
        rowspan: 2,
        colspan: 1,
      };
    } else {
      return {
        rowspan: 0,
        colspan: 0,
      };
    }
  }
};
</script>
