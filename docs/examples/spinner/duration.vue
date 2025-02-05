<template>
  <el-space block size="large">
    <el-space size="large" direction="vertical">
      <epp-spinner>
        <el-icon>
          <Present />
        </el-icon>
      </epp-spinner>
      <p>默认(Default) 2s</p>
    </el-space>

    <el-space size="large" direction="vertical">
      <epp-spinner duration="500ms">
        <el-icon>
          <Present />
        </el-icon>
      </epp-spinner>
      <p>500ms</p>
    </el-space>

    <el-space size="large" direction="vertical">
      <epp-spinner duration="12s">
        <el-icon>
          <Present />
        </el-icon>
      </epp-spinner>
      <p>12s</p>
    </el-space>
  </el-space>
</template>
<script lang="ts" setup>
import { Present } from '@element-plus/icons-vue';
</script>
