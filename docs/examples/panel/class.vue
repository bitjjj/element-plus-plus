<template>
  <epp-panel padding="8px" header-class="new-header-class" body-class="new-body-class" footer-class="new-footer-class">
    <template #header>
      <div class="panel-title">标题</div>
      <div class="panel-header-right">
        <el-button type="success" circle>
          <el-icon><Monitor /></el-icon>
        </el-button>
        <el-button type="warning" circle>
          <el-icon><FullScreen /></el-icon>
        </el-button>
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
import { Monitor, FullScreen } from '@element-plus/icons-vue';
</script>
