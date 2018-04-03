export default interface StoreState {

  columns: Column[];
  error: any;
  filter: Filter;
  filteredTracks: SimpleTrack[];
  isFilterVisible: boolean;
  isLoading: boolean;
  search: string;
  sort: Sort;
  tracks: SimpleTrack[];

}

export interface Track {

  album: Album;
  artist: Artist;
  duration: number;
  id: number;
  title: string;

}

export interface Artist {

  id: number;
  name: string;
  picture_small: string;

}

export interface Album {

  cover_small: string;
  id: number;
  title: string;

}

export interface SimpleTrack {

  album: string;
  albumId: number;
  artist: string;
  artistId: number;
  cover: string;
  duration: string;
  id: number;
  title: string;

}

export interface Sort {

  direction: number;
  id: string;

}

export interface Filter {

  albums: number[];
  artists: number[];

}

export interface Cell {
  
  id: number;
  value: string | number;
  
}

export interface Column {

  id: string;
  name: string;
  type?: string;
  width: number;

}

export interface Row {

  id: number;

}