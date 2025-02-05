<template>
  <div class="table-scroll" style="height: 200px">
    <epp-simple-table :cols="cols" :data="tableData" border="border-x" fixed-header :cell-style="cellStyle">
      <template #tableIndex="{ rowIndex }">
        <span>{{ rowIndex }}</span>
      </template>
      <template #handle>
        <el-button link type="primary">修改</el-button>
      </template>
    </epp-simple-table>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

let idx = 0;
const row = {
  name: '王二麻子',
  sex: '男',
  org: '某个公司',
  des: '来自中国南方的温暖城市！',
};
const tableData = ref(new Array(22).fill(0).map((_) => Object.assign(JSON.parse(JSON.stringify(row)), { id: idx++ })));
const cols = ref([
  { title: '序号', prop: '', slotName: 'tableIndex' },
  { title: '姓名', prop: 'name', showTooltip: true, width: '100px' },
  { title: '性别', prop: 'sex', width: '50px' },
  { title: '单位', prop: 'org', showTooltip: true, width: '150px' },
  { title: '描述', prop: 'des', showTooltip: true, width: '400px' },
  { title: '操作', prop: '', slotName: 'handle', align: 'center' },
]);

// 固定5倍数的行
const cellStyle = ({ rowIndex }: { rowIndex: number }) => {
  return rowIndex % 5 === 0
    ? {
        backgroundColor: 'var(--el-fill-color-darker)',
        zIndex: 10,
        position: 'sticky',
        top: `48px`, // 48为表格头的高度
      }
    : {};
};
</script>
