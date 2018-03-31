export default interface Track {

  album: Album;
  artist: Artist;
  duration: number;
  durationString: string;
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