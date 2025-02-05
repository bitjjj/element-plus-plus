import { defineComponent, h, withDirectives, vShow, toRefs, getCurrentInstance, inject } from 'vue';
import { ElIcon, ElPopover } from 'element-plus';
import { ArrowRightBold } from '@element-plus/icons-vue';
import EppSpinner from '@/components/spinner';
import DefaultCellContent from './default-cell-content.vue';
import { simpleTableContextKey } from '../simple-table';

import type { PropType, VNode } from 'vue';
import type { ColumnType, CellClassFunction, CellStyleFunction } from '../simple-table';

export default defineComponent({
  props: {
    row: {
      type: Object,
      required: true,
    },
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
    width: String,
    minWidth: String,
    maxWidth: String,
    expanded: Boolean,
    showTooltip: Boolean,
    hasChildren: Boolean,
    hasTreeData: Boolean,
    isLoading: Boolean,
    treeExpanded: Boolean,
    firstColumnIndex: Number,
    cellClassName: {
      type: [String, Function] as PropType<string | CellClassFunction>,
      default: '',
    },
    cellStyle: {
      type: [Object, Function] as PropType<Record<string, any> | CellStyleFunction>,
      default: () => ({}),
    },
    span: Object as PropType<{ rowspan: number; colspan: number }>,
  },
  emits: ['mouseover', 'mouseleave', 'expand', 'tree-expand', 'cell-click'],
  setup(props, { emit, slots }) {
    const { row, column, rowIndex, columnIndex } = toRefs(props);

    const cellClassName =
      typeof props.cellClassName === 'string'
        ? props.cellClassName
        : props.cellClassName({
            row: row.value,
            column: column.value,
            rowIndex: rowIndex.value,
            columnIndex: columnIndex.value,
          });
    const cellStyle =
      typeof props.cellStyle === 'function'
        ? props.cellStyle({
            row: row.value,
            column: column.value,
            rowIndex: rowIndex.value,
            columnIndex: columnIndex.value,
          })
        : props.cellStyle;

    const { $parent } = getCurrentInstance()!.proxy as any;
    const { isShowCol, getColFixed, hoverColIndex } = inject(simpleTableContextKey)!;

    return () => {
      const width = props.width ?? (column.value.width ? column.value.width : false);
      const minWidth = props.minWidth ?? (column.value.minWidth ? column.value.minWidth : false);
      const maxWidth = props.maxWidth ?? (column.value.maxWidth ? column.value.maxWidth : false);
      const align = column.value.align ? column.value.align : false;

      let treeNode: VNode | null = null;
      if (props.columnIndex === props.firstColumnIndex) {
        if (props.isLoading) {
          treeNode = h('div', { class: 'expand-icon' }, [h(EppSpinner)]);
        } else if (props.hasChildren) {
          treeNode = h(
            'div',
            {
              class: 'expand-icon cursor-pointer',
              onClick: () => emit('tree-expand'),
            },
            [h(ElIcon, null, { default: () => [h(ArrowRightBold)] })],
          );
        } else if (($parent.$props as any).level) {
          treeNode = h('div', {
            class: 'placeholder-icon',
          });
        } else if (!($parent.$props as any).level && props.hasTreeData) {
          // algin level = 0 row
          treeNode = h('div', {
            class: 'placeholder-icon',
          });
        }
      }

      let child: VNode | null = null;
      if (!column.value.slotName) {
        const defaultCellContent = h(
          DefaultCellContent,
          {
            row: row.value,
            column: column.value,
            onCellClick: ($event: Event) => emit('cell-click', $event),
            onExpand: () => emit('expand'),
            rowIndex: rowIndex.value,
            columnIndex: columnIndex.value,
          },
          treeNode
            ? {
                'expand-icon': () => h(treeNode!),
              }
            : {},
        );

        if (props.showTooltip) {
          child = h(
            ElPopover as any,
            {
              content: row.value[column.value.prop],
              placement: 'top',
              effect: 'dark',
              tooltip: true,
              ...column.value.tooltipProps,
            },
            {
              reference: () => defaultCellContent,
            },
          );
        } else {
          child = defaultCellContent;
        }
      } else {
        child = h(
          'div',
          {
            class: 'cell',
            style: [
              {
                'justify-content': align,
              },
            ],
            onClick: ($event: Event) => emit('cell-click', $event),
          },
          [treeNode, slots.default?.()],
        );
      }

      const TdNode = withDirectives(
        h(
          'td',
          {
            rowspan: props.span?.rowspan,
            colspan: props.span?.colspan,
            class: [
              align ? `align-${align}` : '',
              {
                'show-tooltip': column.value.showTooltip,
                ['fixed-' + getColFixed(column.value).position]: !!column.value.fixed,
                'show-shadow': getColFixed(column.value).hasShadow,
                expanded: props.expanded,
                'first-column-index': props.columnIndex === props.firstColumnIndex,
                'tree-expanded': props.columnIndex === props.firstColumnIndex && props.treeExpanded,
              },
              cellClassName,
            ],
            style: [
              {
                width: width,
                'min-width': minWidth,
                'max-width': maxWidth,
              },
              !!column.value.fixed && getColFixed(column.value, props.columnIndex).distance
                ? '--table-fixed-distance:' + getColFixed(column.value, props.columnIndex).distance
                : '',
              cellStyle,
            ],
            onMouseover: ($event: Event) => {
              hoverColIndex.value = props.columnIndex;
              emit('mouseover', $event);
            },
            onMouseleave: ($event: Event) => emit('mouseleave', $event),
          },
          [child],
        ),
        [[vShow, isShowCol(column.value)]],
      );

      if (!props.span?.rowspan || !props.span?.rowspan) return null;
      else return TdNode;
    };
  },
});
