<template>
  <epp-simple-table :cols="cols" :data="tableData" :load="load" :expand-row-keys="['1']">
    <template #tableIndex="{ row }">
      <span>{{ row.id }}</span>
    </template>
    <template #handle>
      <a>修改</a>
    </template>
  </epp-simple-table>
  <br /><br />
  <epp-simple-table :cols="cols" :data="tableData" :load="load" :expand-row-keys="['1']" :first-column-index="1">
    <template #tableIndex="{ row }">
      <span>{{ row.id }}</span>
    </template>
    <template #handle>
      <a>修改</a>
    </template>
  </epp-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { isClient } from '@vueuse/core';

let count = 10000;
const tableData = ref();
const cols = ref([
  { title: 'ID', slotName: 'tableIndex' },
  { title: '用户名', prop: 'name' },
  { title: '性别', prop: 'sex' },
  { title: '单位', prop: 'org' },
  { title: '简介', prop: 'des', width: '220px', showTooltip: true },
  { title: '操作', slotName: 'handle', align: 'center' },
]);

const load = (_: Record<string, any>, __: Record<string, any>, resolve: (data: Record<string, any>[]) => void) => {
  window.setTimeout(() => {
    resolve([
      {
        id: count++,
        name: '王二麻子',
        sex: '男',
        org: '某个公司',
        des: '来自中国南方的温暖城市哦！',
        hasChildren: true,
      },
      {
        id: count++,
        name: '王二麻子',
        sex: '男',
        org: '某个公司',
        des: '来自中国南方的温暖城市！',
        children: [
          {
            id: count++,
            name: '王二麻子',
            sex: '男',
            org: '某个公司',
            des: '来自中国南方的温暖城市！',
          },
        ],
      },
    ]);
  }, 3000);
};

if (isClient) {
  window.setTimeout(() => {
    tableData.value = [
      {
        id: 1,
        name: '王二麻子',
        sex: '男',
        org: '某个公司',
        des: '来自中国南方的温暖城市啊！',
        children: [
          {
            id: 11,
            name: '王二麻子11',
            sex: '男',
            org: '某个公司',
            des: '来自中国南方的温暖城市！',
            children: [
              {
                id: 111,
                name: '王二麻子111',
                sex: '男',
                org: '某个公司',
                des: '来自中国南方的温暖城市！',
              },
              {
                id: 112,
                name: '王二麻子112',
                sex: '男',
                org: '某个公司',
                des: '来自中国南方的温暖城市！',
              },
            ],
          },
          {
            id: 12,
            name: '王二麻子12',
            sex: '男',
            org: '某个公司',
            des: '来自中国南方的温暖城市！',
            children: [],
          },
        ],
      },
      {
        id: 2,
        name: '李四',
        sex: '男',
        org: '某个公司',
        des: '来自中国',
        hasChildren: true,
      },
      {
        id: 3,
        name: '张三',
        sex: '男',
        org: '某个公司',
        des: '来自中国北方的寒冷的城市！',
      },
    ];
  }, 100);
}
</script>
