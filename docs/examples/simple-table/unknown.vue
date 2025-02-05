<template>
  <epp-simple-table :cols="cols" border="border-x" :data="tableData">
    <template #unknown>
      <p style="text-align: center">可能数据报错了哦~</p>
    </template>
  </epp-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const tableData = ref(null);
// 序号 slot名称唯一 tableIndex。 width: 设置宽度。align: 对齐方式。showTooltip: td是否一行显示,超出tooptip
const cols = ref([
  { title: '序号', prop: '', slotName: 'tableIndex' },
  { title: '姓名', prop: 'name' },
  { title: '性别', prop: 'sex' },
  { title: '操作', prop: '', align: 'center' },
]);
</script>
