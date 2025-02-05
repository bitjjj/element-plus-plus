<template>
  <el-space size="large">
    <el-button @click="create">创建(Create)</el-button>
    <el-button @click="modifyProp">修改对话框属性(Modify properties)</el-button>
  </el-space>
  <br /><br />
  <el-space size="large">
    <el-button @click="modifySlot">修改Slot(Modify slot)</el-button>
    <el-button @click="modifyPanel">修改Panel属性(Modify panel properties)</el-button>
  </el-space>
</template>
<script lang="ts" setup>
import { ref, reactive, h } from 'vue';
import { ElButton } from 'element-plus';
import { ModelessDialogManager } from 'element-plus-plus';

const inputVal = ref('');
const dialogProps = reactive({
  id: 'my-modelesss-dialog3',
  borderless: true,
  bodyPadding: 'var(--lg)',
  title: '测试Manager',
  body: h('input', {
    value: inputVal.value,
    onInput: (e: InputEvent) => {
      inputVal.value = (e.target as HTMLInputElement).value;
    },
  }),
  footer: h('div', null, [
    h(ElButton, { type: 'primary', class: 'm-r-md' }, { default: () => '确定' }),
    h(ElButton, null, { default: () => '取消' }),
  ]),
});

const create = () => {
  ModelessDialogManager.show(dialogProps);
};
const modifyProp = () => {
  dialogProps.title = '修改对话框标题';
};
const modifySlot = () => {
  dialogProps.footer = h('div', { innerHTML: '修改Footer Slot内容' });
};
const modifyPanel = () => {
  dialogProps.borderless = false;
  dialogProps.bodyPadding = '8px';
};
</script>
