<template>
  <div class="cell" :style="column.align ? `justify-content:${column.align}` : ''" @click="$emit('cell-click', $event)">
    <slot name="expand-icon"></slot>
    <div v-if="column.expand?.slotName" class="expand-icon cursor-pointer" @click.stop="$emit('expand')">
      <el-icon>
        <ArrowRightBold />
      </el-icon>
    </div>
    <template v-if="!column.expand?.hideLabel">
      {{ column.formatter ? column.formatter(row, column, cellValue, rowIndex, columnIndex) : cellValue }}
    </template>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
import { get } from 'lodash-unified';
import { ElIcon } from 'element-plus';
import { ArrowRightBold } from '@element-plus/icons-vue';

import type { PropType } from 'vue';
import type { ColumnType } from '../simple-table';

export default defineComponent({
  components: { ElIcon, ArrowRightBold },
  props: {
    row: Object,
    column: {
      type: Object as PropType<ColumnType>,
      required: true,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
    columnIndex: {
      type: Number,
      required: true,
    },
  },
  emits: ['cell-click', 'expand'],
  setup(props) {
    const cellValue = computed(() => get(props.row, props.column.prop));
    return {
      cellValue,
    };
  },
});
</script>
