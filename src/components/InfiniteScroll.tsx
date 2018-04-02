import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

import { store } from '..';
import StoreState from '../types';
import * as tracksActions from '../actions/Tracks';

let createHandlers = function(dispatch: Dispatch<tracksActions.TracksAction>) {
  return function() {
    const state: StoreState = store.getState(),
          index: number = state.tracks.length,
          isLoading: boolean = state.isLoading;

    if (!isLoading && (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      dispatch(tracksActions.getTracks(index));
    }
  };
};

export interface Props {
  dispatch: Dispatch<tracksActions.TracksAction>;
}

class InfiniteScroll extends React.Component {
  handlePageScroll: EventListenerOrEventListenerObject;

  constructor(props: Props) {
    super(props);
    this.handlePageScroll = createHandlers(props.dispatch);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handlePageScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handlePageScroll);
  }

  render() {
    return (null);
  }
}

export default connect()(InfiniteScroll);