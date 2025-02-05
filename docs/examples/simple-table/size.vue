<template>
  <el-select v-model="value" clearable placeholder="请选择" class="m-b-md w-200">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </el-select>

  <epp-simple-table :cols="cols" :data="tableData" :size="value" class="borderless-last">
    <template #tableIndex="{ rowIndex }">
      <span>{{ rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <a>修改</a>
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
    value: 'sm',
    label: 'sm',
  },
  {
    value: 'md',
    label: 'md',
  },
  {
    value: 'lg',
    label: 'lg',
  },
]);
const value = ref('md');
</script>
