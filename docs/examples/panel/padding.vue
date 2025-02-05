<template>
  <el-space size="large" class="m-b-lg">
    <el-select v-model="padding" clearable placeholder="padding" style="width: 150px">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
    <el-select v-model="bodyPadding" clearable placeholder="body-padding" style="width: 150px">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
  </el-space>

  <epp-panel :padding="padding" :body-padding="bodyPadding">
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
import { ref } from 'vue';
import { Monitor, FullScreen } from '@element-plus/icons-vue';

const options = ref([
  {
    value: '0',
    label: 'none',
  },
  {
    value: '8px',
    label: '8px',
  },
  {
    value: '16px',
    label: '16px',
  },
  {
    value: '20px',
    label: '20px',
  },
]);
const padding = ref('');
const bodyPadding = ref('');
</script>
