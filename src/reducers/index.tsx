import { ReactDataGridActions } from '../actions';
import StoreState, { SimpleTrack } from '../types';
import * as constants from '../constants';

export function track(state: StoreState, action: ReactDataGridActions): StoreState {
  switch (action.type) {
    case constants.UPDATE_SEARCH:
      return { 
        ...state,
        search: action.search
      };
    case constants.GET_TRACKS_ATTEMPT:
      return { 
        ...state, 
        isLoading: true
      };
    case constants.GET_TRACKS_SUCCESS:
      return { 
        ...state, 
        isLoading: false,
        tracks: action.tracks ? action.tracks : []
      };
    case constants.GET_TRACKS_ERROR:
      return { 
        ...state, 
        isLoading: false,
        error: action.error
      };
    case constants.SORT_GRID:
      return { 
        ...state,
        sort: {id: action.columnId, direction: -1 * state.sort.direction}, 
        tracks: state.tracks.sort((a: SimpleTrack, b: SimpleTrack) => {
          return a[action.columnId] > b[action.columnId] ? state.sort.direction : -1 * state.sort.direction;
        }).slice()
      };
    default:
      return state;
  }
}