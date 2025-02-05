<template>
  <epp-panel>
    <template #header>
      <div class="panel-title">这是一个标题</div>
      <div class="panel-header-right">
        <el-icon>
          <close />
        </el-icon>
      </div>
    </template>
    <div>这是一段body信息</div>
    <template #footer>
      <el-button class="m-r-md">取 消</el-button>
      <el-button type="primary">确 定</el-button>
    </template>
  </epp-panel>
</template>
<script setup lang="ts">
import { Close } from '@element-plus/icons-vue';
</script>
