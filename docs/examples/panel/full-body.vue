<template>
  <epp-panel style="height: 220px" full-body>
    <template #header>
      <div class="panel-title">这是一个标题</div>
      <div class="panel-header-right">
        <el-icon>
          <CloseBold />
        </el-icon>
      </div>
    </template>
    <el-scrollbar ref="scrollbarRef" height="100%" always>
      <div class="p-lg" style="height: 320px">这是一段body信息</div>
    </el-scrollbar>
    <template #footer>
      <el-button class="m-r-md">取 消</el-button>
      <el-button type="primary">确 定</el-button>
    </template>
  </epp-panel>
</template>

<script setup lang="ts">
import { CloseBold } from '@element-plus/icons-vue';
</script>
