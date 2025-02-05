<template>
  <epp-simple-table :cols="cols" :data="tableData" @sort-change="sortChange">
    <template #index>
      自定义列
      <EppSimpleTable.SortableIcon sortable @sort-change="(val) => sortChange('id', val)" />
    </template>
  </epp-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { EppSimpleTable } from 'element-plus-plus';

const defaultData = [
  {
    id: 1,
    name: '范xxxx',
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
    name: '王ssss',
    sex: '男',
    org: '某个公司',
    des: '90后交互设计师',
  },
];
const tableData = ref(JSON.parse(JSON.stringify(defaultData)));
const cols = ref([
  { title: '序号', prop: 'id', headerSlotName: 'index' },
  { title: '用户名', prop: 'name', sortable: true },
  { title: '性别', prop: 'sex', sortable: false },
  { title: '单位', prop: 'org', sortable: 'descending' },
  {
    title: '简介',
    prop: 'des',
    showTooltip: true,
    width: '40%',
    tooltipProps: { width: '200px', popperClass: 'test-tip' },
    sortable: 'ascending',
  },
]);

const sortChange = (prop: string, sort: string) => {
  // 仅作为示例，实际项目需要通过调取后台API实现
  console.log('soring...', prop, sort);
  if (sort) {
    tableData.value.sort((d1: any, d2: any) => {
      const result = String(d1[prop]).localeCompare(String(d2[prop]));
      return sort === 'ascending' ? result : result * -1;
    });
  } else {
    tableData.value = JSON.parse(JSON.stringify(defaultData));
  }
};
</script>
