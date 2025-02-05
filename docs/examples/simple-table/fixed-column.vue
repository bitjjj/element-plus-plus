<template>
  <div class="table-scroll scroll-column">
    <epp-simple-table :cols="cols" :data="tableData" border="border-x">
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
    no: '478343',
    level: 'P8',
    years: 10,
    field1: '测试字段1',
    field2: '测试字段2',
    field3: '测试字段3',
  },
  {
    id: 2,
    name: '李四',
    sex: '男',
    org: '某个公司',
    des: '来自中国',
    no: '238343',
    level: 'P6',
    years: 3,
    field1: '测试字段1',
    field2: '测试字段2',
    field3: '测试字段3',
  },
  {
    id: 3,
    name: '张三',
    sex: '男',
    org: '某个公司',
    des: '来自中国北方的寒冷的城市！',
    no: '178343',
    level: 'P7',
    years: 5,
    field1: '测试字段1',
    field2: '测试字段2',
    field3: '测试字段3',
  },
]);
// 序号 slot名称唯一 tableIndex。 width: 设置宽度。align: 对齐方式。showTooltip: td是否一行显示,超出tooptip
const cols = ref([
  { title: '序号', prop: '', slotName: 'tableIndex', fixed: 'left', minWidth: '50px' },
  { title: '姓名', prop: 'name', showTooltip: true, minWidth: '150px' },
  { title: '性别', prop: 'sex', width: '50px' },
  { title: '工号', prop: 'no', showTooltip: true, minWidth: '120px', fixed: { position: 'left', distance: 'auto' } },
  { title: '职级', prop: 'level' },
  { title: '司龄', prop: 'years' },
  { title: '字段1', prop: 'field1' },
  { title: '字段2', prop: 'field2' },
  { title: '右自动固定', prop: 'field3', fixed: { position: 'right', distance: 'auto' } },
  { title: '描述', prop: 'des', showTooltip: true, minWidth: '400px' },
  { title: '单位', prop: 'org', showTooltip: true, minWidth: '150px', fixed: { position: 'right', distance: 'auto' } },
  {
    title: '操作',
    prop: '',
    slotName: 'handle',
    align: 'center',
    fixed: 'right',
  },
]);
</script>
