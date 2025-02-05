<template>
  <epp-simple-table :cols="cols" :data="tableData">
    <template #filterSlot="{ close }">
      <el-space direction="vertical" size="large">
        <el-space direction="vertical" size="large">
          <el-checkbox v-mode="selectedItems" value="1">条件1</el-checkbox>
          <el-checkbox v-mode="selectedItems" value="2">条件2</el-checkbox>
          <el-checkbox v-mode="selectedItems" value="3">条件3</el-checkbox>
        </el-space>
        <el-button type="primary" size="sm" class="m-t-md" @click="close">确定</el-button>
      </el-space>
    </template>
    <template #index>
      自定义列
      <EppSimpleTable.FilterIcon placement="right">
        <template #default="{ close }">
          <el-space direction="vertical" size="large">
            <el-space direction="vertical" size="large">
              <el-checkbox v-mode="selectedItems" value="1">条件1</el-checkbox>
              <el-checkbox v-mode="selectedItems" value="2">条件2</el-checkbox>
              <el-checkbox v-mode="selectedItems" value="3">条件3</el-checkbox>
            </el-space>
            <el-button type="primary" size="sm" class="m-t-md" @click="close">确定</el-button>
          </el-space>
        </template>
      </EppSimpleTable.FilterIcon>
    </template>
  </epp-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { EppSimpleTable } from 'element-plus-plus';

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
    name: '王xxx',
    sex: '男',
    org: '某个公司',
    des: '90后交互设计师',
  },
]);
const cols = ref([
  { title: '序号', prop: 'id', headerSlotName: 'index' },
  {
    title: '用户名',
    prop: 'name',
    filter: {
      slotName: 'filterSlot',
      placement: 'top',
      popperClass: 'test-filter-slot',
    },
  },
  { title: '单位', prop: 'org' },
  {
    title: '简介',
    prop: 'des',
    showTooltip: true,
    width: '40%',
    tooltipProps: { width: '200px', popperClass: 'test-tip' },
    filter: { slotName: 'filterSlot' },
  },
  { title: '操作', slotName: 'handle', align: 'center' },
]);

const selectedItems = ref<string[]>([]);
</script>
