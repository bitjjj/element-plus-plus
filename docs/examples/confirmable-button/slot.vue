<template>
  <epp-confirmable-button @confirm="del">
    <template #tip>
      <el-icon type="danger" class="m-r-md">
        <Discount />
      </el-icon>
      Click Again for Deleting
    </template>
    <template #default>
      Delete?
      <el-icon>
        <Close />
      </el-icon>
    </template>
  </epp-confirmable-button>
</template>
<script lang="ts" setup>
import { Discount, Close } from '@element-plus/icons-vue';

const del = () => {
  console.log('Make Sure');
};
</script>
