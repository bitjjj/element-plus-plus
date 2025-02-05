<template>
  <epp-banner v-if="mounted" v-model="visible" to="#bannerContainer" effect="dark">
    <b>Some Container</b>
  </epp-banner>
  <div
    id="bannerContainer"
    class="m-b-lg"
    style="height: 200px; position: relative; background-color: var(--el-color-primary-light-3)"
  ></div>
  <el-button @click="show">Show/Hide(Delay 1s)</el-button>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false);
const mounted = ref(false);

const show = () => {
  mounted.value = true;
  window.setTimeout(() => {
    visible.value = !visible.value;
  }, 1000);
};
</script>
