import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import StoreState from './types';
import App from './containers/App';
import { track } from './reducers';
import './index.scss';

export const store = createStore<StoreState>(
  track, 
  {
    columns: [
      {
        id: 'cover',
        name: '',
        type: 'image',
        width: 5
      },
      {
        id: 'title',
        name: 'Title',
        width: 35
      },
      {
        id: 'artist',
        name: 'Artist',
        width: 20
      },
      {
        id: 'album',
        name: 'Album',
        width: 30
      },
      {
        id: 'duration',
        name: 'Duration',
        width: 10
      }
    ],
    error: null,
    isLoading: false,
    search: 'Foo fighters',
    sort: {direction: -1, id: ''},
    tracks: []
  }, 
  applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
