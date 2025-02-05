<template>
  <epp-simple-table ref="simpleTableRef" :cols="cols" :data="tableData">
    <template #handle>
      <a>修改</a>
    </template>
  </epp-simple-table>
  <br /><br />
  <el-button type="primary" @click="toggleColumn">隐藏/显示第3列</el-button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const simpleTableRef = ref();
const tableData = ref([
  {
    id: 1,
    name: '范xxx',
    sex: '女',
    org: '某个公司',
    des: '来自安全应急UED的设计师来自安全应急',
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
    name: '王xxxxx',
    sex: '男',
    org: '某个公司',
    des: '90后交互设计师',
  },
]);
const cols = ref([
  { title: '#', prop: 'id' },
  { title: '用户名', prop: 'name' },
  { title: '性别', prop: 'sex' },
  { title: '单位', prop: 'org', align: 'center' },
  {
    title: '简介',
    prop: 'des',
    showTooltip: true,
    width: '40%',
    tooltipProps: { width: '200px', popperClass: 'test-tip' },
  },
  { title: '操作', slotName: 'handle', align: 'center' },
]);

const toggleColumn = () => {
  simpleTableRef.value.toggleColumn(2);
};
</script>
