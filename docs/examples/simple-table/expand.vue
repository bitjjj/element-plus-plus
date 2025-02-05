<template>
  <epp-simple-table ref="tableRef" :cols="cols" :data="tableData" :expand-row-keys="['1index', '2nameExpand']">
    <template #index="{ row }">
      <p>{{ row.org }} / {{ row.des }}</p>
    </template>
    <template #name="{ row }"> <a href="javascript:;" @click="expand(row)">点我展开</a> / {{ row.name }} </template>
    <template #nameExpand>
      <p>手工展开数据</p>
    </template>
    <template #des="{ row }">
      <p>{{ row.sex }} / {{ row.des }}</p>
    </template>
  </epp-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const tableRef = ref();
const tableData = ref([
  {
    id: 1,
    name: '范xx',
    sex: '女',
    org: '某个公司',
    des: '来自安全应急UED的设计师来自安全应急UED的设计',
  },
  {
    id: 2,
    name: 'xxx',
    sex: '男',
    org: '某个公司',
    des: '经验丰富的前端工程师',
  },
  {
    id: 3,
    name: '王xx',
    sex: '男',
    org: '某个公司',
    des: '90后交互设计师',
  },
]);
const cols = ref([
  { title: '#', prop: 'id', expand: { slotName: 'index', hideLabel: true } },
  { title: '用户名', prop: 'name', slotName: 'name', expand: { slotName: 'nameExpand' } },
  { title: '性别', prop: 'sex' },
  { title: '单位', prop: 'org' },
  {
    title: '简介',
    prop: 'des',
    showTooltip: true,
    width: '40%',
    expand: { slotName: 'des' },
    tooltipProps: { width: '200px', popperClass: 'test-tip' },
  },
  { title: '操作', slotName: 'handle', align: 'center' },
]);

const expand = (row: { id: number }) => {
  tableRef.value.toggleExpand(row.id, 'nameExpand');
};
</script>
