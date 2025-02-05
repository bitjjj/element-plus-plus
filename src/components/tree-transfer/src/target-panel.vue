<template>
  <div :class="['el-transfer-panel transfer-panel target-panel', !filterable ? 'unfilterable' : '']">
    <div class="panel-header el-transfer-panel__header">
      {{ title }}
    </div>

    <div :class="['panel-body el-transfer-panel__body', hasFooter ? 'is-with-footer' : '']">
      <div v-if="filterable" class="panel-filter">
        <el-input
          v-model="query"
          block
          fill
          :placeholder="placeholder"
          class="el-transfer-panel__filter"
          @mouseenter="inputHover = true"
          @mouseleave="inputHover = false"
        >
          <template #suffix>
            <i :class="['input-close', showClose]" @click="clearQuery"></i>
          </template>
          <template #prefix>
            <el-icon><Search /></el-icon>
          </template>
        </el-input>
      </div>
      <el-scrollbar class="checkbox-scrollbar">
        <el-checkbox-group
          v-show="!hasNoMatch && data.length > 0"
          v-model="checked"
          dir="vertical"
          gap="0"
          :class="{ 'panel-list': true, filterable }"
          :custom="true"
        >
          <el-checkbox
            v-for="item in filteredData"
            :key="item[keyProp]"
            class="item"
            :label="item[keyProp]"
            :disabled="item[disabledProp]"
          >
            <option-content :option="optionRender(item)" />
            <el-icon v-if="!item[disabledProp]" class="item-close" @click="$emit('checked-change', item[keyProp])">
              <CloseBold />
            </el-icon>
          </el-checkbox>
        </el-checkbox-group>
      </el-scrollbar>
      <p v-show="hasNoMatch || data.length === 0" class="el-transfer-panel__empty">
        {{ hasNoMatch ? t('hl.transfer.noMatch') : t('hl.transfer.noData') }}
      </p>
    </div>
    <p v-if="hasFooter" class="el-transfer-panel__footer">
      <slot></slot>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, useSlots } from 'vue';
import { ElCheckbox, ElCheckboxGroup, ElInput, ElIcon, useLocale } from 'element-plus';
import { CloseBold, Search } from '@element-plus/icons-vue';
import { useTreeProp } from './useTreeProp';

import type { PropType } from 'vue';
import type { TreeProps } from './tree.type';

const props = defineProps({
  data: {
    type: Array as PropType<Record<string, any>[]>,
    default: () => [],
  },
  optionRender: {
    type: Function,
    required: true,
  },
  placeholder: String,
  title: String,
  filterable: Boolean,
  filterMethod: Function,
  props: Object,
});
defineEmits(['checked-change']);

const OptionContent = ({ option }: { option: any }) => option;

const slots = useSlots();
const { t } = useLocale();
const query = ref('');
const inputHover = ref(false);
const checked = ref([]);

const { key: keyProp, label: labelProp, disabled: disabledProp } = useTreeProp({ props } as unknown as TreeProps);

const filteredData = computed(() => {
  return props.data.filter((item) => {
    if (typeof props.filterMethod === 'function') {
      return props.filterMethod(query.value, item);
    } else {
      const label = item[labelProp.value] || item[keyProp.value].toString();
      return label.toLowerCase().includes(query.value.toLowerCase());
    }
  });
});
const hasNoMatch = computed(() => {
  return query.value.length > 0 && filteredData.value.length === 0;
});
const showClose = computed(() => {
  return query.value.length > 0 && inputHover.value ? 'show-close' : '';
});
const hasFooter = computed(() => !!slots.default?.()[0].children?.length);

const clearQuery = () => {
  if (showClose.value === 'show-close') {
    query.value = '';
  }
};
</script>
