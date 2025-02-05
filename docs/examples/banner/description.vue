<template>
  <epp-banner
    v-model="visible"
    type="success"
    effect="dark"
    dashed
    :closable="false"
    :timeout="5000"
    title="Custom Banner"
  >
    <el-space size="large">
      <el-icon size="20px">
        <GoodsFilled />
      </el-icon>
      <div class="text-regular">
        Read full articles, watch videos, browse thousands of titles and more on the "Home page".
      </div>
    </el-space>
  </epp-banner>
  <el-button @click="show">Show/Hide</el-button>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { GoodsFilled } from '@element-plus/icons-vue';

const visible = ref(false);

const show = () => {
  visible.value = !visible.value;
};
</script>
