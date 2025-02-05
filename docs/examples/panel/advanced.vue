<template>
  <epp-panel :fullscreen="maxStatus" :collapsed="minStatus">
    <template #header>
      <div class="panel-title">这是一个标题</div>
      <div class="panel-header-right">
        <el-button type="success" circle @click="min">
          <el-icon><ZoomOut /></el-icon>
        </el-button>
        <el-button type="warning" circle @click="max">
          <el-icon><ZoomIn /></el-icon>
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
import { ref } from 'vue';
import { ZoomOut, ZoomIn } from '@element-plus/icons-vue';

const maxStatus = ref<boolean | Record<string, string>>(false);
const minStatus = ref(false);

const min = () => {
  minStatus.value = !minStatus.value;
};
const max = () => {
  if (maxStatus.value) {
    maxStatus.value = false;
  } else {
    maxStatus.value = { top: '16px', left: '16px', right: '16px', bottom: '16px' };
  }
};
</script>
