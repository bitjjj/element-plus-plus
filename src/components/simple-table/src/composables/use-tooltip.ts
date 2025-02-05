import { ref } from 'vue';
import { getStyle } from '@/utils';

import type { ComputedRef } from 'vue';
import type { ColumnType } from '../simple-table';

function useTooltip(cols: ComputedRef<{ realCols: ColumnType[] }>) {
  const isShowTooltipMap = ref<Record<string, boolean>>({});

  const clearTooltip = () => {
    isShowTooltipMap.value = {};
  };

  const tdMouseover = (e: Event, rowIndex: number, colIndex: number) => {
    if (!cols.value.realCols[colIndex].showTooltip) {
      return;
    }
    const cell = e.target as HTMLElement;
    const cellChild = cell.querySelector('.cell') as HTMLElement;
    if (!cellChild) return;

    const range = document.createRange();
    range.setStart(cellChild, 0);
    range.setEnd(cellChild, cellChild.childNodes.length);
    const rangeWidth = range.getBoundingClientRect().width;
    const padding =
      (Number.parseInt(getStyle(cellChild, 'paddingLeft')!, 10) || 0) +
      (Number.parseInt(getStyle(cellChild, 'paddingRight')!, 10) || 0);

    const isTextOverflow = getStyle(cellChild, 'textOverflow') === 'ellipsis';
    const shouldShow = isTextOverflow
      ? rangeWidth + padding > cellChild.offsetWidth || cellChild.scrollWidth > cellChild.offsetWidth
      : cellChild.scrollHeight > cellChild.offsetHeight; // css line-clamp

    if (shouldShow) {
      clearTooltip();
      isShowTooltipMap.value[rowIndex + '/' + colIndex] = true;
    }
  };
  const tdMouseleave = () => {
    clearTooltip();
  };

  return {
    isShowTooltipMap,
    clearTooltip,
    tdMouseover,
    tdMouseleave,
  };
}

export { useTooltip };
