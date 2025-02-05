<template>
  <el-select v-model="value" clearable placeholder="请选择表格填充" class="m-b-md w-200">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </el-select>

  <el-select v-model="value2" clearable placeholder="请选择单元格填充" class="m-l-md m-b-md w-200">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </el-select>

  <epp-simple-table :cols="cols" :data="tableData" border="border-x" :padding="value" :cell-padding="value2">
    <template #tableIndex="{ rowIndex }">
      <span>{{ rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <el-button link type="primary">修改</el-button>
    </template>
  </epp-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const tableData = ref([
  {
    id: 1,
    name: '王二麻子',
    sex: '男',
    org: '某个公司',
    des: '来自中国南方的温暖城市！',
  },
  { id: 2, name: '李四', sex: '男', org: '某个公司', des: '来自中国' },
  {
    id: 3,
    name: '张三',
    sex: '男',
    org: '某个公司',
    des: '来自中国北方的寒冷的城市！',
  },
]);
const cols = ref([
  { title: '#', slotName: 'tableIndex' },
  { title: '用户名', prop: 'name' },
  { title: '性别', prop: 'sex' },
  { title: '单位', prop: 'org' },
  { title: '简介', prop: 'des' },
  { title: '操作', slotName: 'handle', align: 'center' },
]);
const options = ref([
  {
    value: '0',
    label: 'none',
  },
  {
    value: '8px',
    label: '8px',
  },
  {
    value: '12px',
    label: '12px',
  },
  {
    value: '16px',
    label: '16px',
  },
  {
    value: '20px',
    label: '20px',
  },
  {
    value: '24px',
    label: '24px',
  },
]);
const value = ref('0');
const value2 = ref('0');
</script>
