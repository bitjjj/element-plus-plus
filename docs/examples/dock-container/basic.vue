<template>
  <el-space size="large">
    <el-button @click="show1">无snapshot(no snapshot)</el-button>
    <el-button @click="show2">自动截屏(auto capture)</el-button>
  </el-space>
  <br /><br />
  <el-space size="large">
    <el-button @click="show3">文本(Text)</el-button>
    <el-button @click="show4">图片(Image)</el-button>
    <el-button @click="show5">视频(Video)</el-button>
    <el-button @click="show6">音频(Audio)</el-button>
  </el-space>
  <hr />
  <el-space size="large" class="m-t-lg">
    <el-button @click="showDock">显示/隐藏Dock(Show/Hide Dock)</el-button>
    <el-button @click="placement = 'bottom'">底部(Bottom)</el-button>
    <el-button @click="placement = 'right'">右侧(Right)</el-button>
    <el-button @click="placement = 'top'">顶部(Top)</el-button>
    <el-button @click="placement = 'left'">左侧(Left)</el-button>
  </el-space>
  <epp-dock-container v-model="visible" :placement="placement" />
</template>
<script setup lang="ts">
import { ref, h } from 'vue';
import { ElEmpty } from 'element-plus';
import { ModelessDialogManager } from 'element-plus-plus';

const visible = ref(false);
const placement = ref('bottom');

const showDock = () => {
  visible.value = !visible.value;
};

const show1 = () => {
  ModelessDialogManager.show({
    title: '无Snapshot',
    useDock: true,
  });
};
const show2 = () => {
  ModelessDialogManager.show({
    title: '自动截屏',
    snapshot: true,
    useDock: true,
    body: h(ElEmpty, { description: '自定截屏测试' }),
  });
};
const show3 = () => {
  ModelessDialogManager.show({
    title: '文本',
    useDock: true,
    snapshot:
      '“历史将继续被书写，加油，法国队！”帮助法国队拿到欧国联冠军之后，姆巴佩在自己的社交平台上晒出了亲吻冠军奖杯的照片。今年夏天那个失意的姆巴佩，终于在国家队重获幸福。',
    body: h('span', ['文字测试']),
  });
};
const show4 = () => {
  ModelessDialogManager.show({
    title: '图片类型',
    useDock: true,
    snapshot: { type: 'image', url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' },
    body: h('span', ['图片类型测试']),
  });
};
const show5 = () => {
  ModelessDialogManager.show({
    title: '视频类型',
    useDock: true,
    snapshot: { type: 'video', url: 'https://vjs.zencdn.net/v/oceans.mp4' },
    body: h('span', ['视频类型测试']),
  });
};
const show6 = () => {
  ModelessDialogManager.show({
    title: '音频类型',
    useDock: true,
    snapshot: { type: 'audio', url: 'https://www.w3school.com.cn/i/horse.ogg' },
    body: h('span', ['音频类型测试']),
  });
};
</script>
