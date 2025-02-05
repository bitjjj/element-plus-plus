<template>
  <el-button @click="show">{{ visible ? 'Hide' : 'Show' }}</el-button>
  <epp-modeless-dialog v-model="visible" title="非模态对话框示例" resize @resize="resizeCB">
    <p>非模态对话框示例</p>
  </epp-modeless-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false);

const show = () => {
  visible.value = !visible.value;
};
const resizeCB = () => {
  console.log('resizing...');
};
</script>
