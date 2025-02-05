<template>
  <template v-for="(item, idx) in list" :key="idx">
    <epp-alias :obj2="item.obj1.innerObj2" #="{ obj2 }">
      <h5>Inner Prop</h5>
      <span>prop1: [{{ obj2.prop1 }}]</span> / <span>prop2: [{{ obj2.prop2 }}]</span>
      <br />
    </epp-alias>
  </template>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const list = ref([
  {
    obj1: {
      innerObj2: {
        prop1: '1',
        prop2: '2',
      },
    },
  },
  {
    obj1: {
      innerObj2: {
        prop1: '3',
        prop2: '4',
      },
    },
  },
]);
</script>
