<template>
  <div :class="['epp-panel', panelClass]" :style="panelStyle">
    <div v-if="$slots.header" :class="['panel-header', headerClass ? headerClass : '']" :style="headerStyle">
      <slot name="header"></slot>
    </div>
    <div :class="['panel-body', bodyClass ? bodyClass : '']" :style="bodyStyle">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" :class="['panel-footer', footerClass ? footerClass : '']" :style="footerStyle">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { watchEffect, ref } from 'vue';
import { panelProps, usePanelProps } from './panel';

defineOptions({
  name: 'EppPanel',
});

const props = defineProps(panelProps);

let panelStyle = ref<string[]>([]),
  panelClass = ref<Record<string, unknown>>({});

watchEffect(() => {
  const panelProps = usePanelProps(props);
  panelStyle.value = panelProps.panelStyle;
  panelClass.value = panelProps.panelClass;
});
</script>
