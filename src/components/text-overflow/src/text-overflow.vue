<template>
  <el-popover
    tooltip
    popper-class="text-overflow-poppper"
    :placement="placement"
    :effect="effect"
    :disabled="disabled"
    :width="width"
  >
    <template #reference>
      <span ref="textContentRef" class="epp-text-overflow" v-bind="$attrs">
        <slot></slot>
      </span>
    </template>
    <div class="text-overflow-content" v-html="tooltipContent"></div>
  </el-popover>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import { ElPopover } from 'element-plus';
import { getStyle, isServer } from '@/utils';
import { textOverflowProps } from './text-overflow';

defineOptions({
  name: 'EppTextOverflow',
  inheritAttrs: false,
});

const props = defineProps(textOverflowProps);

const tooltipContent = ref<string>();
const textContentRef = ref<HTMLElement>();
const disabled = ref(false);
let observer: MutationObserver | null;

const cutTextContent = () => {
  unobserveDom();
  const text = (textContentRef.value!.innerText || textContentRef.value!.textContent)!;
  tooltipContent.value = text;
  if (props.method === 'length' && props.length !== -1) {
    if (text.length > props.length) {
      // 两边各有一个空白节点
      textContentRef.value!.childNodes[1].nodeValue = text.substring(0, props.length) + '...';
      disabled.value = false;
    } else {
      disabled.value = true;
    }
  } else if (props.method === 'width' || props.method === 'autoWidth') {
    const cellChild = textContentRef.value!;
    const range = document.createRange();
    range.setStart(cellChild, 0);
    range.setEnd(cellChild, cellChild.childNodes.length);
    const rangeWidth = range.getBoundingClientRect().width - 1;
    const padding =
      (parseInt(getStyle(cellChild, 'paddingLeft')!, 10) || 0) +
      (parseInt(getStyle(cellChild, 'paddingRight')!, 10) || 0);
    if (rangeWidth + padding > cellChild.offsetWidth || cellChild.scrollWidth > cellChild.offsetWidth) {
      disabled.value = false;
    } else {
      disabled.value = true;
    }
  }
  observeDom();
};

const observeDom = () => {
  observer!.observe(textContentRef.value!, {
    characterData: true,
    childList: true,
    subtree: true,
  });
};
const unobserveDom = () => {
  observer!.disconnect();
};

if (!isServer) {
  observer = new MutationObserver(cutTextContent);
}

onMounted(() => {
  if (props.method === 'autoWidth' && props.length > 0) {
    textContentRef.value!.style.maxWidth = `${props.length}em`;
    nextTick(() => {
      cutTextContent();
    });
  } else {
    cutTextContent();
  }
});

onBeforeUnmount(() => {
  unobserveDom();
  observer = null;
});
</script>
