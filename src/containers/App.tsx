import { WheelEvent } from 'react';
import { connect, Dispatch } from 'react-redux';

import App from '../App';
import StoreState from '../types/';
import * as pageActions from '../actions/Page';

export function mapStateToProps({ error, isLoading }: StoreState) {
  return {
    error: error,
    isLoading: isLoading
  };
}

export function mapDispatchToProps(dispatch: Dispatch<pageActions.PageAction>) {
  return {
    onPageScroll: (e: WheelEvent<HTMLDivElement>) => dispatch(pageActions.scrollPage()),
  };
}

export default connect(mapStateToProps)(App);