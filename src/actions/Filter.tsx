import * as constants from '../constants';

export interface ToggleFilter {
  type: constants.TOGGLE_FILTER;
}

export function toggleFilter(): ToggleFilter {
  return {    
    type: constants.TOGGLE_FILTER
  };
}

export type FilterAction = ToggleFilter;