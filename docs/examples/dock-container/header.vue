<template>
  <el-space gap="var(--md)">
    <el-button @click="show1">Custom header</el-button>
    <el-button @click="showDock">Show/Hide Dock</el-button>
  </el-space>
  <epp-dock-container v-model="visible" />
</template>

<script setup lang="ts">
import { ref, h } from 'vue';
import { ElIcon } from 'element-plus';
import { Hide, Close } from '@element-plus/icons-vue';
import { ModelessDialogManager } from 'element-plus-plus';

const visible = ref(false);

const showDock = () => {
  visible.value = !visible.value;
};

const show1 = () => {
  const dialog = ModelessDialogManager.show({
    useDock: true,
    header: h(
      'div',
      { style: 'display: flex; column-gap: 8px; justify-content: space-between; align-items: center;' },
      [
        h('h6', { innerHTML: 'Custom' }),
        h('h5', { innerHTML: 'Header' }),
        h(
          ElIcon,
          {
            size: '20px',
            title: '点我折叠(Click to fold)',
            style: 'cursor: pointer',
            onClick: () => dialog.toggleCollapse(),
          },
          [h(Hide)],
        ),
        h(
          ElIcon,
          {
            size: '20px',
            title: '点我关闭(Click to close)',
            style: 'cursor: pointer',
            onClick: () => dialog.close(),
          },
          [h(Close)],
        ),
      ],
    ),
  });
};
</script>
