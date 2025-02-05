<template>
  <el-space size="large">
    <el-button @click="create1">图片(Image)</el-button>
    <el-button @click="create2">多张图(2x2 Image)</el-button>
    <el-button @click="create3">PDF预览(Preview)</el-button>
  </el-space>
</template>
<script lang="ts" setup>
import { h } from 'vue';
import { withBase } from 'vitepress';
import { ModelessDialogManager } from 'element-plus-plus';

const create1 = () => {
  ModelessDialogManager.show({
    customClass: 'example-modeless',
    title: '图片预览',
    width: '40vw',
    height: '30vh',
    body: h('div', { class: 'image-example', innerHTML: `<img src="${withBase('/zen.jpg')}" />` }),
    resize: true,
    onResize: (dlg: HTMLDivElement) => {
      console.log('resize', dlg);
    },
  });
};

const create2 = () => {
  ModelessDialogManager.show({
    customClass: 'example-modeless2',
    title: '图片预览',
    width: '40vw',
    height: '30vh',
    body: h('div', {
      class: 'image-example2',
      innerHTML: `
<img src="${withBase('/zen.jpg')}" />
<img src="${withBase('/zen.jpg')}" />
<img src="${withBase('/zen.jpg')}" />
<img src="${withBase('/zen.jpg')}" />
`,
    }),
    resize: true,
    onResize: (dlg: HTMLDivElement) => {
      console.log('resize', dlg);
    },
  });
};

const create3 = () => {
  ModelessDialogManager.show({
    customClass: 'example-modeless3',
    title: 'PDF预览',
    width: '40vw',
    height: '50vh',
    body: h('iframe', { class: 'pdf-example', src: `${withBase('/example.pdf')}` }),
    resize: true,
  });
};
</script>
<style lang="scss">
.example-modeless,
.example-modeless2 {
  .panel-body {
    height: calc(100% - var(--panel-header-height));
  }
}
.example-modeless3 {
  .panel-body {
    padding: 0;
    height: calc(100% - var(--panel-header-height));
  }
}
.image-example {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.image-example2 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  img {
    width: calc(50% - 20px / 2);
    height: calc(50% - 20px / 2);
    object-fit: cover;
  }
}
.pdf-example {
  width: 100%;
  height: 100%;
}
</style>
