import * as constants from '../constants';

export interface ScrollPage {
  type: constants.SCROLL_PAGE;
}

export function scrollPage(): ScrollPage {
  return {    
    type: constants.SCROLL_PAGE
  };
}

export type PageAction = ScrollPage;