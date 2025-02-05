<template>
  <el-button @click="show">{{ visible ? 'Hide' : 'Show' }}</el-button>
  <div class="m-t-md">范围：左上角（0,0） / 右下角（1000,600）</div>
  <div class="m-t-md">Range: Top-left (0, 0) / Bottom-right (1000, 600)</div>
  <epp-modeless-dialog v-model="visible" width="400px" title="非模态对话框示例" :boundings="[0, 0, 1000, 600]">
    <p>非模态对话框示例</p>
  </epp-modeless-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false);

const show = () => {
  visible.value = !visible.value;
};
</script>
