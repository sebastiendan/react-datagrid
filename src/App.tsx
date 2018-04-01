import * as React from 'react';
import { Component, FormEvent, ChangeEvent } from 'react';
import * as moment from 'moment';
import axios from 'axios';

import { Column } from './tracks-data-grid/TracksDataGrid.interfaces';
import Track, { SimpleTrack } from './App.interfaces';
import SearchForm from './search-form/SearchForm';
import TracksDataGrid from './tracks-data-grid/TracksDataGrid';
import './App.scss';

const COLUMNS: Column[] = [
  {
    id: 'cover',
    name: '',
    type: 'image'
  },
  {
    id: 'title',
    name: 'Title'
  },
  {
    id: 'artist',
    name: 'Artist'
  },
  {
    id: 'album',
    name: 'Album'
  },
  {
    id: 'duration',
    name: 'Duration'
  }
];

export interface State {
  isLoading: boolean;
  search: string;
  tracks: SimpleTrack[];
}

class App extends Component {
  columns: Column[] = COLUMNS;
  search: string = '';
  state: State = {
    isLoading: true,
    search: 'foo fighters',
    tracks: []
  };

  constructor(props: object) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  componentDidMount() {
    this.getTracks();
  }

  getTracks() {
    this.setState({isLoading: true});
    axios.get('http://localhost:3001/track?search=' + this.state.search)
    .then(res => {
      const tracks: SimpleTrack[] = res.data.data.map((track: Track) => {
        const momentDuration: moment.Duration = moment.duration(track.duration, 's'),
        simpleTrack: SimpleTrack = {
          album: track.album.title,
          artist: track.artist.name,
          cover: track.album.cover_small,
          duration: moment(momentDuration.minutes(), 'mm').format('mm') + ':' 
          + moment(momentDuration.minutes(), 'ss').format('ss'),
          id: track.id,
          title: track.title
        };
        
        return simpleTrack;
      });
      
      this.setState({ isLoading: false, tracks: tracks });
    })
    .catch(err => {
      // alert(err);
      this.setState({isLoading: true});
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
        {this.state.isLoading ? (
          <div>Loading...</div>
        ) : (
          <TracksDataGrid columns={this.columns} rows={this.state.tracks} />
        )}
      </div>
    );
  }
}

export default App;
