<template>
  <div ref="spaceRef" class="epp-avatar-list" :style="`--indent: ${computedIndent}`">
    <template v-for="img in imgList" :key="img[urlField]">
      <el-popover
        trigger="hover"
        :disabled="!img[urlField] || img[urlField] === 'LAST_NUMBER' || !$slots.tip"
        v-bind="popoverProps"
      >
        <slot name="tip" :item="img" />
        <template #reference>
          <el-avatar
            v-if="img[urlField] !== 'LAST_NUMBER'"
            :src="img[urlField]"
            :size="size"
            :fit="fit"
            :shape="shape"
            @click="$emit('click', img)"
          />
          <el-avatar
            v-else
            :size="size"
            :fit="fit"
            :style="'background-color:' + maxBgColor"
            bordered
            round
            @click="$emit('click', img)"
          >
            <span :class="lastClazz">{{ img.maxNumber }}</span>
          </el-avatar>
        </template>
      </el-popover>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { ElAvatar, ElPopover } from 'element-plus';
import { avatarListProps, avatarListEmits } from './avatar-list';

defineOptions({
  name: 'EppAvatarList',
});

const props = defineProps(avatarListProps);
defineEmits(avatarListEmits);

const computedIndent = ref(props.indent);
const spaceRef = ref();

const imgList = computed(() => {
  if (isNaN(+props.max) || props.data.length < props.max) {
    return props.data;
  } else {
    const last = {
      [props.urlField]: 'LAST_NUMBER',
      maxNumber: props.data.length - props.max,
    };
    return [...props.data.slice(0, props.max), last];
  }
});
const lastClazz = computed(() => {
  let clazz = '';
  if (!isNaN(+props.max) && props.data.length > props.max) {
    const lastNum = props.data.length - props.max;
    if (lastNum < 10) {
      clazz = 'less-10';
    } else if (lastNum < 100) {
      clazz = 'less-100';
    } else if (lastNum < 1000) {
      clazz = 'less-1k';
    } else if (lastNum < 10000) {
      clazz = 'less-10k';
    } else if (lastNum < 100000) {
      clazz = 'less-100k';
    }
  }
  return clazz;
});

onMounted(() => {
  if (!computedIndent.value) {
    const img = spaceRef.value.querySelector('.el-avatar') as HTMLElement;
    try {
      computedIndent.value = -img.offsetWidth / 2 + 'px';
    } catch {
      computedIndent.value = '0px';
    }
  }
});
</script>
