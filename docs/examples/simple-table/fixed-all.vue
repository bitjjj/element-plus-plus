<template>
  <el-scrollbar height="200px">
    <epp-simple-table :cols="cols" :data="tableData" border="border-x" fixed-header>
      <template #tableIndex="{ rowIndex }">
        <span>{{ rowIndex + 1 }}</span>
      </template>
      <template #handle>
        <el-button link type="primary">修改</el-button>
      </template>
    </epp-simple-table>
  </el-scrollbar>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const tableData = ref([
  { id: 1, name: '费文轩', sex: '男', org: '14933867329', des: '安徽省六安市东港镇港下锡港东路8栋1204室' },
  { id: 2, name: '刘林', sex: '男', org: '11381484641', des: '内蒙锡林浩特市北六门村南河街8栋1204室' },
  { id: 3, name: '金玥傲', sex: '男', org: '15000688905', des: '黑龙江省北安市三岔路浦沅宿舍131号' },
  { id: 4, name: '王武', sex: '男', org: '18102220035', des: '湖北省洪湖市东五条路林机小区948号' },
  { id: 5, name: '卞嘉怡', sex: '女', org: '11022218210', des: '山东省招远市并州北路2条8号' },
  { id: 6, name: '和文杰', sex: '男', org: '12548097666', des: '陕西省安康市金国里506号517房' },
  { id: 7, name: '潘瑞堂', sex: '男', org: '12065726257', des: '安徽省天长市金霞街道国际商业中心121号' },
  { id: 8, name: '关爽', sex: '女', org: '15570593023', des: '四川省简阳市前进路506号517房' },
]);
// 序号 slot名称唯一 tableIndex。 width: 设置宽度。align: 对齐方式。showTooltip: td是否一行显示,超出tooptip
const cols = ref([
  { title: '#', prop: '', slotName: 'tableIndex', minWidth: '4em' },
  { title: '姓名', prop: 'name', minWidth: '7em', fixed: 'left' },
  { title: '性别', prop: 'sex', minWidth: '6em' },
  { title: '手机号', prop: 'org', minWidth: '10em' },
  { title: '住址', prop: 'des', minWidth: '26em' },
  {
    title: '操作',
    prop: '',
    slotName: 'handle',
    align: 'center',
    fixed: 'right',
  },
]);
</script>
