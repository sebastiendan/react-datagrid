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
    case constants.TOGGLE_FILTER:
      return { 
        ...state,
        isFilterVisible: !state.isFilterVisible
      };
    case constants.FILTER_TRACKS:
      return { 
        ...state, 
        filter: Object.assign({}, action.filter) || {albums: [], artists: []},
        filteredTracks: state.tracks.filter((item: SimpleTrack) => {
          let artistFilter: boolean = true,
              albumFilter: boolean = true;

          if (action.filter && action.filter.artists && action.filter.artists.length) {
            artistFilter = action.filter.artists.indexOf(item.artistId) > -1;
          }
          if (action.filter && action.filter.albums && action.filter.albums.length) {
            albumFilter = action.filter.albums.indexOf(item.albumId) > -1;
          }

          return artistFilter && albumFilter;
        })
      };
    case constants.CLEAR_TRACKS:
      return { 
        ...state, 
        filteredTracks: [],
        tracks: []
      };
    case constants.GET_TRACKS_ATTEMPT:
      return { 
        ...state, 
        isLoading: true
      };
    case constants.GET_TRACKS_SUCCESS:
      const tracks: SimpleTrack[] = action.tracks ? 
        state.tracks
          .concat(action.tracks.filter((item: SimpleTrack) => { 
            return !state.tracks.find(x => x.id === item.id);
          }))
        : 
        [];            

      return { 
        ...state, 
        isLoading: false,
        filter: {albums: [], artists: []},
        filteredTracks: tracks,
        tracks: tracks
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
        filteredTracks: state.filteredTracks.sort((a: SimpleTrack, b: SimpleTrack) => {
          return a[action.columnId] > b[action.columnId] ? state.sort.direction : -1 * state.sort.direction;
        }).slice()
      };
    case constants.RESIZE_COLUMN:
      return { 
        ...state,
        columns: state.columns.map(column => {
          if (column.id === action.columnId) {
            column.width = action.width;
            return Object.assign({}, column);
          }
          return column;
        })
      };
    default:
      return state;
  }
}