import * as React from 'react';
import { Component, FormEvent, ChangeEvent } from 'react';
import * as moment from 'moment';
import axios from 'axios';

import Track from './interfaces';
import SearchForm from './SearchForm';
import TracksDataGrid from './TracksDataGrid';
import './App.css';

export interface State {
  tracks: Track[];
  search: string;
}

class App extends Component {
  state: State = {
    tracks: [],
    search: 'foo fighters'
  };
  search: string = '';

  constructor(props: object) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  componentDidMount() {
    this.getTracks();
  }

  getTracks() {
    axios.get('http://localhost:3001/track?search=' + this.state.search)
      .then(res => {
        const tracks: Track[] = res.data.data.map((track: Track) => {
          const momentDuration: moment.Duration = moment.duration(track.duration, 's');
          track.durationString = moment(momentDuration.minutes(), 'mm').format('mm') 
          + ':' + moment(momentDuration.seconds(), 'ss').format('ss');
          return track;
        });

        this.setState({ tracks: tracks });
      })
      .catch(err => {
        alert(err);
      });
  }

  handleSearchChange(e: ChangeEvent<HTMLInputElement>): void {
    this.setState({search: e.target.value});
  }

  handleSearchSubmit(e: FormEvent<HTMLFormElement>): void {
    this.getTracks();
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Deezer Track Search</h1>
        </header>
        <SearchForm 
          search={this.state.search} 
          onSearchChange={this.handleSearchChange} 
          onSearchSubmit={this.handleSearchSubmit}
        />
        <TracksDataGrid tracks={this.state.tracks} />
      </div>
    );
  }
}

export default App;
