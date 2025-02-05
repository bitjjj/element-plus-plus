<template>
  <teleport :to="to">
    <transition :name="animName">
      <el-alert
        v-if="visible"
        :title="title"
        :description="description"
        :type="type"
        :closable="closable"
        :close-text="closeText"
        :show-icon="showIcon"
        :effect="effect"
        :class="['epp-banner', 'at-' + placement]"
        :style="{
          height,
          position: realPosition,
          zIndex: realZIndex,
        }"
        v-bind="$attrs"
        @close="doClose"
      >
        <template #default>
          <slot></slot>
        </template>
        <template #title>
          <slot name="title"></slot>
        </template>
        <template #icon>
          <slot name="icon"></slot>
        </template>
      </el-alert>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import { ElAlert, useZIndex } from 'element-plus';
import { useTimeoutFn } from '@vueuse/core';
import { isServer } from '@/utils';
import { bannerProps, bannerEmits } from './banner';

defineOptions({
  name: 'EppBanner',
  inheritAttrs: false,
});

const props = defineProps(bannerProps);
const emit = defineEmits(bannerEmits);

const { nextZIndex } = useZIndex();
const visible = ref(false);
const realZIndex = ref(props.zIndex || nextZIndex());
let autoCloseTimer: (() => void) | undefined = undefined;

const realPosition = computed(() => {
  let position = props.position;
  if (!position) {
    if (props.to === 'body') {
      position = 'fixed';
    } else {
      position = 'absolute';
    }
  }
  return position;
});
const animName = computed(() => {
  let name = props.animationName;
  if (!name) {
    switch (props.placement) {
      case 'bottom':
        name = 'slideTop';
        break;
      case 'top':
        name = 'slideDown';
        break;
    }
  }
  return name;
});

const doOpen = () => {
  if (isServer) {
    return;
  }
  visible.value = true;
};
const doClose = () => {
  autoCloseTimer?.();

  visible.value = false;
  emit('update:modelValue', false);
  emit('close');
};

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      doOpen();
      if (props.timeout && !isNaN(+props.timeout)) {
        ({ stop: autoCloseTimer } = useTimeoutFn(() => doClose(), +props.timeout));
      }
      realZIndex.value = props.zIndex ? realZIndex.value++ : nextZIndex();
    } else {
      if (visible.value) {
        doClose();
      }
    }
  },
  {
    immediate: true,
  },
);
</script>
