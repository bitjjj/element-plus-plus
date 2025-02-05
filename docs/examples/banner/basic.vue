<template>
  <epp-banner v-model="visible" title="This is Banner" effect="dark" />
  <el-button @click="show">Show/Hide</el-button>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false);

const show = () => {
  visible.value = !visible.value;
};
</script>
