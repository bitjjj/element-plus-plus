<template>
  <epp-confirmable-button
    :confirm-state="{ type: 'warning', text: true, bg: true }"
    :popover-props="{ effect: 'dark', showArrow: true }"
  >
    <template #tip>
      <el-icon type="warning" class="m-r-md">
        <Discount />
      </el-icon>
      Click Again for Transfer Money
    </template>
    Transfer
  </epp-confirmable-button>
</template>
<script lang="ts" setup>
import { Discount } from '@element-plus/icons-vue';
</script>
