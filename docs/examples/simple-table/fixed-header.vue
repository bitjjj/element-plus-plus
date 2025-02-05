<template>
  <div class="table-scroll" style="height: 200px">
    <epp-simple-table :cols="cols" :data="tableData" border="bordered" fixed-header>
      <template #tableIndex="{ rowIndex }">
        <span>{{ rowIndex + 1 }}</span>
      </template>
      <template #handle>
        <el-button link type="primary">修改</el-button>
      </template>
    </epp-simple-table>
  </div>
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
  { id: 4, name: '李四2', sex: '男', org: '某个公司', des: '来自中国' },
  { id: 5, name: '李四3', sex: '男', org: '某个公司', des: '来自中国' },
  { id: 6, name: '李四4', sex: '男', org: '某个公司', des: '来自中国' },
]);
const cols = ref([
  { title: '#', slotName: 'tableIndex' },
  { title: '用户名', prop: 'name' },
  { title: '性别', prop: 'sex' },
  { title: '单位', prop: 'org' },
  { title: '简介', prop: 'des' },
  { title: '操作', slotName: 'handle', align: 'center' },
]);
</script>
