import * as constants from '../constants';

export interface SortGird {
  type: constants.SORT_GRID;
  columnId: string;
}

export function sortGrid(columnId: string): SortGird {
  return {    
    type: constants.SORT_GRID,
    columnId: columnId
  };
}

export type GridAction = SortGird;