<template>
  <div :class="['el-transfer-panel transfer-panel tree-panel', !filterable ? 'unfilterable' : '']">
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
          @input="onInput"
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
      <el-scrollbar class="tree-scrollbar">
        <el-tree
          ref="hlTree"
          class="panel-list"
          node-key="id"
          v-bind="treeProps"
          :show-checkbox="true"
          @check-change="checkChange"
        >
          <template #default="{ data }">
            <option-content :option="optionRender(data)" />
          </template>
        </el-tree>
      </el-scrollbar>
      <p v-show="treeProps?.data?.length === 0" class="el-transfer-panel__empty">
        {{ t('el.transfer.noData') }}
      </p>
    </div>
    <p v-if="hasFooter" class="el-transfer-panel__footer">
      <slot></slot>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, useSlots } from 'vue';
import { ElInput, ElTree, ElIcon, ElScrollbar, useLocale } from 'element-plus';
import { Search } from '@element-plus/icons-vue';
import { debounce } from 'lodash-unified';

defineProps({
  treeProps: Object,
  placeholder: String,
  title: String,
  filterable: Boolean,
  optionRender: {
    type: Function,
    required: true,
  },
});
const emit = defineEmits(['checked-change']);

const OptionContent = ({ option }: { option: any }) => option;

const slots = useSlots();
const { t } = useLocale();

const hlTree = ref();
const query = ref('');
const inputHover = ref(false);

const hasFooter = computed(() => !!slots.default?.()[0].children?.length);
const showClose = computed(() => {
  return query.value.length > 0 && inputHover.value ? 'show-close' : '';
});

const onInput = debounce((val) => {
  hlTree.value!.filter(val);
}, 300);
const clearQuery = () => {
  if (showClose.value === 'show-close') {
    query.value = '';
    hlTree.value!.filter('');
  }
};
const callTreeMethod = (name: string, ...args: unknown[]) => {
  if (hlTree.value![name]) {
    return hlTree.value![name](...args);
  }
  console.error("tree method don't exist!!");
};
const checkChange = () => {
  emit('checked-change');
};

defineExpose({
  callTreeMethod,
});
</script>
