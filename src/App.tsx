import * as React from 'react';

import DataGrid from './containers/DataGrid';
import InfiniteScroll from './components/InfiniteScroll';
import SearchForm from './containers/SearchForm';
import './App.scss';

export interface Props {

  error?: any;
  isLoading?: boolean;
  onPageScroll?: (e: WheelEvent) => void;

}

function App(props: Props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Deezer Track Search</h1>
      </header>
      <InfiniteScroll />
      <SearchForm />
      {props.error &&
        <div className="ErrorMessage">
          Something went wrong: {props.error.response ? props.error.response.data.message : props.error.message}
        </div>
      }
      {props.isLoading &&
        <div>Loading...</div>
      }
      <DataGrid />
    </div>
  );
}

export default App;
