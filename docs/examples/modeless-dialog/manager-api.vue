<template>
  <el-space size="large">
    <el-button @click="create">创建(Create)</el-button>
    <el-tag>状态(Status)：{{ visible ? '显示(Show)' : '隐藏(Hide)' }}</el-tag>
  </el-space>
  <br /><br />
  <el-space size="large">
    <el-button @click="max">最大化(Max)</el-button>
    <el-button @click="collapse">折叠(Collapse)</el-button>
    <el-button @click="show">显示/隐藏(Show/Hide)</el-button>
    <el-button @click="close">手工关闭(Close Manually)</el-button>
  </el-space>
  <hr />
  <el-space size="large" class="m-t-lg">
    <el-button @click="create2">创建多个对话框(Create Dialogs)</el-button>
  </el-space>
  <br />
  <el-space size="large" class="m-t-lg">
    <el-button @click="collaseAll">折叠所有(Collapse All)</el-button>
    <el-button @click="closeAll">关闭所有(Close All)</el-button>
    <el-button @click="hideAll">隐藏所有(Hide All)</el-button>
    <el-button @click="showAll">显示所有(Show All)</el-button>
  </el-space>
</template>
<script lang="ts" setup>
import { ref, h } from 'vue';
import { ElButton } from 'element-plus';
import { ModelessDialogManager } from 'element-plus-plus';

const inputVal = ref('');
const visible = ref(false);

const create = () => {
  ModelessDialogManager.show({
    id: 'my-modelesss-dialog2',
    title: '测试Manager，固定ID',
    body: h('input', {
      value: inputVal.value,
      style: 'border: 1px solid #efefef',
      onInput: (e: InputEvent) => {
        inputVal.value = (e.target as HTMLInputElement).value;
      },
    }),
    footer: h('div', null, [
      h(ElButton, { type: 'primary', class: 'm-r-md' }, { default: () => '确定' }),
      h(ElButton, null, { default: () => '取消' }),
    ]),
  });
  visible.value = ModelessDialogManager.get('my-modelesss-dialog2').isShown();
};

const show = () => {
  ModelessDialogManager.get('my-modelesss-dialog2').toggleShow();
  visible.value = ModelessDialogManager.get('my-modelesss-dialog2').isShown();
};
const max = () => {
  ModelessDialogManager.get('my-modelesss-dialog2').toggleMaximize();
};
const collapse = () => {
  ModelessDialogManager.get('my-modelesss-dialog2').toggleCollapse();
};
const close = () => {
  ModelessDialogManager.get('my-modelesss-dialog2').close();
};

const create2 = () => {
  ModelessDialogManager.show({
    title: '测试Manager',
  });
};

const collaseAll = () => {
  ModelessDialogManager.collapseAll();
};
const closeAll = () => {
  ModelessDialogManager.closeAll();
};
const showAll = () => {
  ModelessDialogManager.showAll();
};
const hideAll = () => {
  ModelessDialogManager.hideAll();
};
</script>
