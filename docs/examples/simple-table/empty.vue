<template>
  <epp-simple-table :cols="cols" border="border-x" :data="tableData" />
</template>
<script setup lang="ts">
import { ref } from 'vue';

const tableData = ref([]);
// 序号 slot名称唯一 tableIndex。 width: 设置宽度。align: 对齐方式。showTooltip: td是否一行显示,超出tooptip
const cols = ref([
  { title: '序号', prop: '', slotName: 'tableIndex' },
  { title: '姓名', prop: 'name' },
  { title: '性别', prop: 'sex' },
  { title: '操作', prop: '', align: 'center' },
]);
</script>
