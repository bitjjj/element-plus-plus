import type { ComputedRef, Ref, ExtractPropTypes, InjectionKey, PropType } from 'vue';
import type { PopperEffect, Placement } from 'element-plus';
import type SimpleTable from './simple-table.vue';

export interface ColumnType {
  id: string;
  title: string;
  prop: string;
  columnKey: string;
  tooltipProps: Record<string, any>;
  align: 'left' | 'right' | 'center';
  width: string;
  minWidth: string;
  maxWidth: string;
  fixed: string | { position: 'left' | 'right'; distance: string };
  slotName: string;
  headerSlotName: string;
  filter: {
    slotName: string;
    placement: Placement;
    popperClass: string;
    effect: PopperEffect;
    trigger: 'hover' | 'click' | 'all';
  };
  showTooltip: boolean;
  expand: {
    slotName: string;
    hideLabel: boolean;
  };
  formatter: (row: unknown, column: ColumnType, cellValue: unknown, rowIndex: number, columnIndex: number) => any;
  sortable: boolean | 'descending' | 'ascending';
  $show$: boolean; // 配合列选择工具，参考业务组件
  level: number;
  colSpan: number;
  rowSpan: number;
  children: Array<ColumnType>;
}
export type RowDataType = Record<string, any>;
export type RealCols = { headerRows: Array<ColumnType[]>; realCols: ColumnType[] };

export type RowClassFunction = ({ row, rowIndex }: { row: RowDataType; rowIndex: number }) => string;
export type RowStyleFunction = ({ row, rowIndex }: { row: RowDataType; rowIndex: number }) => Record<string, any>;
export type CellClassFunction = ({
  row,
  column,
  rowIndex,
  columnIndex,
}: {
  row: RowDataType;
  column: ColumnType;
  rowIndex: number;
  columnIndex: number;
}) => string;
export type CellStyleFunction = ({
  row,
  column,
  rowIndex,
  columnIndex,
}: {
  row: RowDataType;
  column: ColumnType;
  rowIndex: number;
  columnIndex: number;
}) => Record<string, any>;
export type SpanFunction = ({
  row,
  column,
  rowIndex,
  columnIndex,
}: {
  row: RowDataType;
  column: ColumnType;
  rowIndex: number;
  columnIndex: number;
}) => [number, number] | { rowspan: number; colspan: number };
export type ResizeOption = { min?: number; max?: number };
export type TreeProps = { children: string; hasChildren: string };
export type GetRowKey = (row: RowDataType) => string;
export type LoadFunction = (
  row: RowDataType,
  node: { level: number },
  resolve: (children: RowDataType[]) => void,
) => Promise<RowDataType[]>;
export type ScrollContainer = string | HTMLElement;
export type EventParams = { row: RowDataType; column: ColumnType; rowIndex: number; columnIndex: number };

export const simpleTableProps = {
  fixedHeader: Boolean,
  fixedFooter: Boolean,
  border: {
    type: String,
    default: '',
  },
  size: String,
  hover: Boolean,
  crossHover: Boolean,
  list: Boolean,
  autoHeight: Boolean,
  tableFixed: Boolean,
  stripe: [Boolean, String],
  padding: String,
  cellPadding: String,
  gap: String,
  gapX: String,
  gapY: String,
  showHeader: {
    type: Boolean,
    default: true,
  },
  data: {
    type: Array as PropType<RowDataType[]>,
  },
  cols: {
    type: Array as PropType<Partial<ColumnType>[]>,
    default: () => [],
  },
  rowKey: {
    type: [String, Function] as PropType<string | ((row: RowDataType) => string)>,
    default: 'id',
  },
  expandRowKeys: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  defaultExpandAll: {
    type: Boolean,
    default: false,
  },
  rowClassName: {
    type: [String, Function] as PropType<string | RowClassFunction>,
    default: '',
  },
  rowStyle: {
    type: [Object, Function] as PropType<Record<string, any> | RowStyleFunction>,
    default: () => ({}),
  },
  cellClassName: {
    type: [String, Function] as PropType<string | CellClassFunction>,
    default: '',
  },
  cellStyle: {
    type: [Object, Function] as PropType<Record<string, any> | CellStyleFunction>,
    default: () => ({}),
  },
  headerRowClassName: {
    type: [String, Function] as PropType<string | RowClassFunction>,
    default: '',
  },
  headerRowStyle: {
    type: [Object, Function] as PropType<Record<string, any> | RowStyleFunction>,
    default: () => ({}),
  },
  headerCellClassName: {
    type: [String, Function] as PropType<string | CellClassFunction>,
    default: '',
  },
  headerCellStyle: {
    type: [Object, Function] as PropType<Record<string, any> | CellStyleFunction>,
    default: () => ({}),
  },
  spanMethod: Function as PropType<SpanFunction>,
  highlightCurrentRow: Boolean,
  resize: {
    type: [Boolean, Object] as PropType<boolean | ResizeOption>,
    default: false,
  },
  firstColumnIndex: {
    type: Number,
    default: 0,
  },
  treeProps: {
    type: Object as PropType<TreeProps>,
    default: () => ({ children: 'children', hasChildren: 'hasChildren' }),
  },
  load: Function as PropType<LoadFunction>,
  scrollContainer: {
    type: [String, Object] as PropType<ScrollContainer>,
  },
};

export type SimpleTableProps = ExtractPropTypes<typeof simpleTableProps>;
export type SimpleTableInstance = InstanceType<typeof SimpleTable>;

export type SimpleTableContext = {
  rowClassName: Ref<string | RowClassFunction>;
  rowStyle: Ref<Record<string, any>>;
  cellClassName: Ref<string | CellClassFunction>;
  cellStyle: Ref<Record<string, any>>;
  hoverColIndex: Ref<string | number>;
  firstColumnIndex: Ref<number>;
  load: LoadFunction | undefined;
  getSpan: (args: any) => any;
  currentSelectedRow: Ref<RowDataType>;
  slotNames: ComputedRef<string[]>;
  expandSlotNames: ComputedRef<string[]>;
  realColsInfo: ComputedRef<RealCols>;
  getRowKey: GetRowKey;
  toggleExpandRow: (row: RowDataType, slotName: string) => void;
  expandedKeyExisted: (row: RowDataType, slotName: string) => boolean;
  isShowTooltipMap: Ref<Record<string, boolean>>;
  tdMouseover: (e: MouseEvent, rowIndex: number, colIndex: number) => void;
  tdMouseleave: () => void;
  tableTreeMap: Ref<Record<string, Record<string, any>>>;
  hasChildren: (row: RowDataType) => boolean;
  hasTreeData: ComputedRef<boolean>;
  toggleExpandTree: (row: RowDataType) => void;
  isShowCol: (col: ColumnType) => boolean;
  getColFixed: (
    col: ColumnType,
    columnIndex?: number,
  ) => { position: string; distance: string | number; hasShadow: boolean };
};
export const simpleTableContextKey: InjectionKey<SimpleTableContext> = Symbol('simpleTableContextKey');
