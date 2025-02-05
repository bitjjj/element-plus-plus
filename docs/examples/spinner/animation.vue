<template>
  <el-space block size="large">
    <el-space size="large" direction="vertical">
      <epp-spinner animation="around-right">
        <el-icon>
          <Present />
        </el-icon>
      </epp-spinner>
      <p>向右旋转(Rotate right)</p>
    </el-space>

    <el-space size="large" direction="vertical">
      <epp-spinner animation="around-left">
        <el-icon>
          <Present />
        </el-icon>
      </epp-spinner>
      <p>向左旋转(Rotate left)</p>
    </el-space>

    <el-space size="large" direction="vertical">
      <epp-spinner animation="none">
        <el-icon>
          <Present />
        </el-icon>
      </epp-spinner>
      <p>禁止旋转(No Rotation)</p>
    </el-space>
  </el-space>
</template>
<script lang="ts" setup>
import { Present } from '@element-plus/icons-vue';
</script>
