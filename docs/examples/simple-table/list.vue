<template>
  <div style="background-color: #25303f; height: 240px; padding: 12px;">
    <el-scrollbar style="height: 200px">
      <epp-simple-table :cols="cols" :data="tableData" gap-y="8px" list fixed-header>
        <template #tableIndex="{ row }">
          {{ row.icon }}
        </template>
        <template #handle>
          <a>修改</a>
        </template>
      </epp-simple-table>
    </el-scrollbar>
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
    icon: 'Briefcase',
  },
  {
    id: 2,
    name: '李四',
    sex: '男',
    org: '某个公司',
    des: '来自中国',
    icon: 'ChartPie',
  },
  {
    id: 3,
    name: '张三',
    sex: '男',
    org: '某个公司',
    des: '来自中国北方的寒冷的城市！',
    icon: 'Archive',
  },
  { id: 4, name: '李四2', sex: '男', org: '某个公司', des: '来自中国', icon: 'Archive' },
  { id: 5, name: '李四3', sex: '男', org: '某个公司', des: '来自中国', icon: 'Archive' },
  { id: 6, name: '李四4', sex: '男', org: '某个公司', des: '来自中国', icon: 'Archive' },
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
