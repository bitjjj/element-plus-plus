<template>
  <el-space block size="large">
    <epp-spinner color="var(--el-color-danger)">
      <el-icon><Present /></el-icon>
    </epp-spinner>
    <epp-spinner color="#4a7fb1">
      <el-icon><ShoppingBag /></el-icon>
    </epp-spinner>
    <epp-spinner color="#b14a4a">
      <el-icon><Flag /></el-icon>
    </epp-spinner>
    <epp-spinner color="#b9bd47">
      <el-icon><GoodsFilled /></el-icon>
    </epp-spinner>
  </el-space>
</template>
<script lang="ts" setup>
import { Present, ShoppingBag, Flag, GoodsFilled } from '@element-plus/icons-vue';
</script>
