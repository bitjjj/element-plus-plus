<template>
  <el-tooltip
    ref="tooltip"
    :visible="tooltipVisible"
    :offset="0"
    :placement="placement"
    :show-arrow="false"
    :stop-popper-mouse-event="false"
    :popper-class="`popover popover-table-filter ${popperClass}`"
    :effect="effect"
    trigger="click"
    manual-mode
    append-to-body
  >
    <template #content>
      <slot :close="hidden"></slot>
    </template>
    <template #default>
      <span
        v-click-outside:[popperPaneRef]="hidden"
        class="table-filter-trigger"
        @click="showByClick"
        @mouseover="showByHover"
      >
        <el-icon>
          <FilterIcon />
        </el-icon>
      </span>
    </template>
  </el-tooltip>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { ElTooltip, ElIcon, ClickOutside, Effect } from 'element-plus';
import { Filter as FilterIcon } from '@element-plus/icons-vue';

import type { PropType } from 'vue';
import type { Placement, PopperEffect } from 'element-plus';

export default defineComponent({
  name: 'SimpleTableFilterIcon',
  components: {
    ElTooltip,
    ElIcon,
    FilterIcon,
  },
  directives: { ClickOutside },
  props: {
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom',
    },
    effect: {
      type: String as PropType<PopperEffect>,
      default: Effect.LIGHT,
    },
    popperClass: {
      type: String,
      default: '',
    },
    trigger: {
      type: String as PropType<'hover' | 'click' | 'all'>,
      default: 'click',
    },
  },
  setup(props) {
    const tooltipVisible = ref(false);
    const tooltip = ref();

    const hidden = () => {
      tooltipVisible.value = false;
    };
    const show = () => {
      tooltipVisible.value = true;
    };
    const showByClick = (e: MouseEvent) => {
      if (props.trigger === 'click' || props.trigger === 'all') {
        e.stopPropagation();
        tooltipVisible.value = !tooltipVisible.value;
      }
    };
    const showByHover = (e: MouseEvent) => {
      if (props.trigger === 'hover' || props.trigger === 'all') {
        e.stopPropagation();
        show();
      }
    };
    const popperPaneRef = computed(() => {
      return tooltip.value?.popperRef?.contentRef;
    });

    return {
      tooltipVisible,
      hidden,
      showByClick,
      showByHover,
      popperPaneRef,
      tooltip,
    };
  },
});
</script>
