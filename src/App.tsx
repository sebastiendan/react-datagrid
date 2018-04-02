import * as React from 'react';

import SearchForm from './containers/SearchForm';
import DataGrid from './containers/DataGrid';
import './App.scss';

export interface Props {

  error?: any;
  isLoading?: boolean;

}

function App(props: Props) {
  let mainContent: JSX.Element;
  if (props.error) {
    mainContent = (
      <div className="ErrorMessage">
        Something went wrong: {props.error.response ? props.error.response.data.message : props.error.message}
      </div>
    );
  } else
  if (props.isLoading) {
    mainContent = (<div>Loading...</div>);
  } else {
    mainContent = (<DataGrid />);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Deezer Track Search</h1>
      </header>
      <SearchForm />
      {mainContent}
    </div>
  );
}

export default App;
