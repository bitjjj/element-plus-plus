<template>
  <epp-simple-table :cols="cols" :data="tableData" border="bordered">
    <template #handle>
      <a>修改</a>
    </template>
  </epp-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
]);
const cols = ref([
  { title: '日期', prop: 'date' },
  {
    title: '配送信息',
    prop: 'delivery',
    children: [
      { title: '姓名', prop: 'name' },
      {
        title: '地址信息',
        prop: 'address',
        children: [
          { title: '省/市', prop: 'state' },
          { title: '城市', prop: 'city' },
          { title: '地址', prop: 'address' },
          { title: '操作', prop: 'zip', slotName: 'handle' },
        ],
      },
    ],
  },
]);
</script>
