<template>
  <div :class="['epp-tree-transfer', 'el-transfer']">
    <tree-panel
      ref="treePanel"
      :title="leftPanelTitle"
      :placeholder="panelFilterPlaceholder"
      :filterable="filterable"
      :option-render="optionTreeRender"
      :tree-props="treeProps"
      @checked-change="onTreeCheckedChange"
    >
      <slot name="left-footer"></slot>
    </tree-panel>
    <target-panel
      ref="targetPanel"
      :data="checkedData"
      :option-render="optionTargetRender"
      :placeholder="panelFilterPlaceholder"
      :filterable="filterable"
      :filter-method="filterMethod"
      :title="rightPanelTitle"
      :props="treeProps.props"
      @checked-change="onTargetCheckedChange"
    >
      <slot name="right-footer"></slot>
    </target-panel>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject, h, ref, watch, onMounted, useSlots } from 'vue';
import { useLocale, formItemContextKey } from 'element-plus';
import TargetPanel from './target-panel.vue';
import TreePanel from './tree-panel.vue';
import { useTreeProp } from './useTreeProp';
import { treeTransferProps, treeTransferEmits } from './tree-transfer';

import type { Slot } from 'vue';
import type { FormItemContext } from 'element-plus';

defineOptions({
  name: 'EppTreeTransfer',
  inheritAttrs: false,
});

const props = defineProps(treeTransferProps);
const emit = defineEmits(treeTransferEmits);

const { t } = useLocale();
const slots = useSlots();

const formItem = inject(formItemContextKey, {} as FormItemContext);
const treePanel = ref();
const rightPanel = ref();
const checkedData = ref<Record<string, any>[]>([]);

const clearQuery = (which: 'left' | 'right') => {
  if (which === 'left') {
    treePanel.value.query = '';
  } else if (which === 'right') {
    rightPanel.value.query = '';
  }
};

const leftPanelTitle = computed(() => props.titles[0] || t('el.transfer.titles.0'));
const rightPanelTitle = computed(() => props.titles[1] || t('el.transfer.titles.1'));

const panelFilterPlaceholder = computed(() => props.filterPlaceholder || t('el.transfer.filterPlaceholder'));
const filterMethod = computed(() => {
  return props.treeProps.filterNodeMethod || (() => true);
});

watch(
  () => props.modelValue,
  () => {
    formItem.validate?.('change');
  },
);

const { label: treeLabel } = useTreeProp(props.treeProps);

const optionTreeRender = computed(() => (data: any) => {
  if (props.renderContent) return props.renderContent(h, data, 'left');
  const treeNodeSlot: Slot = slots.treeNode! || slots['tree-node'];
  if (treeNodeSlot) return treeNodeSlot({ data });

  return h('span', { class: 'tree-node-label' }, data[treeLabel.value]);
});

const optionTargetRender = computed(() => (data: any) => {
  if (props.renderContent) return props.renderContent(h, data, 'right');
  const targetNodeSlot: Slot = slots.targetNode! || slots['target-node'];
  if (targetNodeSlot) return targetNodeSlot({ data });

  return h('span', data[treeLabel.value]);
});

const onTreeCheckedChange = () => {
  const leafOnly = !props.treeProps.checkStrictly;
  const keys = treePanel.value.callTreeMethod('getCheckedKeys', leafOnly);
  const nodes = treePanel.value.callTreeMethod('getCheckedNodes', leafOnly);
  emit('update:modelValue', keys);
  checkedData.value = [...nodes];
};

const onTargetCheckedChange = (key: string) => {
  const leafOnly = !props.treeProps.checkStrictly;
  const keys = treePanel.value.callTreeMethod('getCheckedKeys', leafOnly);
  keys.indexOf(key) !== -1 && keys.splice(keys.indexOf(key), 1);
  treePanel.value.callTreeMethod('setCheckedKeys', keys, leafOnly);
};

onMounted(() => {
  const leafOnly = !props.treeProps.checkStrictly;
  treePanel.value.callTreeMethod('setCheckedKeys', props.modelValue, leafOnly);
  const defaultCheckedData: Record<string, any>[] = [];
  props.modelValue.forEach((id) => {
    defaultCheckedData.push(treePanel.value.callTreeMethod('getNode', id));
  });
  checkedData.value = [...defaultCheckedData.map((c) => c.data)];
});

defineExpose({
  clearQuery,
});
</script>
