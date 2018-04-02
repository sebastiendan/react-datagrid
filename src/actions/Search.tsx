import * as constants from '../constants';

export interface UpdateSearch {
  type: constants.UPDATE_SEARCH;
  search: string;
}

export function updateSearch(search: string): UpdateSearch {
  return {    
    type: constants.UPDATE_SEARCH,
    search: search
  };
}

export type SearchAction = UpdateSearch;