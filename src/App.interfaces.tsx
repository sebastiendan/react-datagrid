export default interface State {
  isLoading: boolean;
  search: string;
  sort: {direction: number, id: string};
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
  artist: string;
  cover: string;
  duration: string;
  id: number;
  title: string;

}