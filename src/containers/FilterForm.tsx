import { connect, Dispatch } from 'react-redux';

import FilterForm from '../components/FilterForm';
import StoreState, { Filter } from '../types/';
import * as filterActions from '../actions/Filter';
import * as tracksActions from '../actions/Tracks';

export function mapStateToProps({ filter, isFilterVisible, tracks }: StoreState) {
  return {
    filter: filter,
    isFilterVisible: isFilterVisible,
    tracks: tracks
  };
}

export function mapDispatchToProps(dispatch: Dispatch<tracksActions.TracksAction>) {
  return {
    onFilterChange: (filter: Filter) => { dispatch(tracksActions.filterTracks(filter)); },
    onToggleFilterClick: () => { dispatch(filterActions.toggleFilter()); }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);