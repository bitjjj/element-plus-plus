import type { ColumnType, RealCols } from './simple-table';

let columnIdSeed = 1;

export const convertCols = (originColumns: ColumnType[]): RealCols => {
  let maxLevel = 1;
  const traverse = (column: ColumnType, parent: ColumnType | undefined) => {
    if (parent) {
      column.level = parent.level! + 1;
      if (maxLevel < column.level) {
        maxLevel = column.level;
      }
    }
    if (column.children) {
      let colSpan = 0;
      column.children.forEach((subColumn) => {
        traverse(subColumn, column);
        colSpan += subColumn.colSpan!;
      });
      column.colSpan = colSpan;
    } else {
      column.colSpan = 1;
    }
  };

  originColumns.forEach((column) => {
    column.level = 1;
    column.id = `${columnIdSeed++}`;
    traverse(column, undefined);
  });

  const rows: Array<ColumnType[]> = [];
  for (let i = 0; i < maxLevel; i++) {
    rows.push([] as ColumnType[]);
  }

  const allColumns = getAllColumns(originColumns);

  allColumns.forEach((column) => {
    if (!column.children) {
      column.rowSpan = maxLevel - column.level! + 1;
    } else {
      column.rowSpan = 1;
    }
    rows[column.level! - 1].push(column);
  });

  return { headerRows: rows, realCols: allColumns.filter((c) => c.colSpan === 1) };
};

export const getAllColumns = (columns: ColumnType[]): ColumnType[] => {
  const result: ColumnType[] = [];
  columns.forEach((column) => {
    if (column.children) {
      result.push(column);
      // eslint-disable-next-line prefer-spread
      result.push.apply(result, getAllColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};
