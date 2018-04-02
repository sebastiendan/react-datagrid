import { ChangeEvent, FormEvent } from 'react';
import { connect, Dispatch } from 'react-redux';

import SearchForm from '../components/SearchForm';
import StoreState from '../types/';
import * as searchActions from '../actions/Search';
import * as tracksActions from '../actions/Tracks';

export function mapStateToProps({ search }: StoreState) {
  return {
    search: search
  };
}

export function mapDispatchToProps(dispatch: Dispatch<tracksActions.TracksAction | searchActions.SearchAction>) {
  return {
    onSearchChange: (e: ChangeEvent<HTMLInputElement>) => dispatch(searchActions.updateSearch(e.target.value)),
    onSearchSubmit: (e: FormEvent<HTMLInputElement>) => { e.preventDefault(); dispatch(tracksActions.getTracks()); }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);