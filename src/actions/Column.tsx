import * as constants from '../constants';

export interface ResizeColumn {
  type: constants.RESIZE_COLUMN;
  columnId: string;
  width: number;
}

export function resizeColumn(columnId: string, width: number): ResizeColumn {
  return {    
    type: constants.RESIZE_COLUMN,
    columnId: columnId,
    width: width
  };
}

export type ColumnAction = ResizeColumn;