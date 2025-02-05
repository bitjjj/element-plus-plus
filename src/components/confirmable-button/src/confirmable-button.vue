<template>
  <el-popover
    trigger="click"
    :show-arrow="false"
    placement="top"
    v-bind="popoverProps"
    @after-enter="popoverShown"
    @after-leave="popoverHidden"
  >
    <slot name="tip">
      {{ tip }}
    </slot>
    <template #reference>
      <el-button v-bind="state" :class="`epp-confirmable-button`" @click="handleClick">
        <slot></slot>
      </el-button>
    </template>
  </el-popover>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { ElButton, ElPopover } from 'element-plus';
import { confirmableButtonProps, confirmableButtonEmits } from './confirmable-button';

defineOptions({
  name: 'EppConfirmableButton',
});

const props = defineProps(confirmableButtonProps);
const emit = defineEmits(confirmableButtonEmits);

const visible = ref(false);
const state = computed(() => (visible.value ? props.confirmState : props.defaultState));

const popoverShown = () => {
  visible.value = true;
};
const popoverHidden = () => {
  visible.value = false;
};
const handleClick = () => {
  if (visible.value) {
    emit('confirm');
  }
};
</script>
