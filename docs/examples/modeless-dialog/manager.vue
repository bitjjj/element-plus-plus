<template>
  <el-space size="large">
    <el-button @click="create">创建(Create)</el-button>
    <el-button @click="close">手动关闭(Close Manually)</el-button>
  </el-space>
</template>
<script lang="ts" setup>
import { h } from 'vue';
import { ElEmpty } from 'element-plus';
import { ModelessDialogManager } from 'element-plus-plus';

const close = () => {
  ModelessDialogManager.get('my-modelesss-dialog').close();
};

const create = () => {
  ModelessDialogManager.show({
    id: 'my-modelesss-dialog',
    title: '测试Manager',
    body: h(ElEmpty, { description: '空内容' }),
    resize: true,
    onResize: (dlg: HTMLDivElement) => {
      console.log('resize', dlg);
    },
    onOpen: () => {
      console.log('open');
    },
    onOpened: () => {
      console.log('opened');
    },
    onClose: () => {
      console.log('close');
    },
    onClosed: () => {
      console.log('closed');
    },
    onDestroy: () => {
      console.log('destroy');
    },
    onCollapse: (value: boolean) => {
      console.log('collapse', value);
    },
    onMaximize: (value: boolean) => {
      console.log('maximize', value);
    },
  });
};
</script>
