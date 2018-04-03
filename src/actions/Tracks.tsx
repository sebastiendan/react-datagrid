import axios from 'axios';
import * as moment from 'moment';
import { Dispatch } from 'react-redux';

import * as constants from '../constants';
import { Track, SimpleTrack, Filter } from '../types';
import { store } from '..';

export interface Tracks {
  type: constants.FILTER_TRACKS 
      | constants.CLEAR_TRACKS 
      | constants.GET_TRACKS_ATTEMPT 
      | constants.GET_TRACKS_SUCCESS 
      | constants.GET_TRACKS_ERROR;
  tracks?: SimpleTrack[];
  error?: any;
  filter?: Filter;
}

export function filterTracks(filter: Filter): Tracks {
  return { 
    type: constants.FILTER_TRACKS,
    filter: filter
  };
}

export function clearTracks(): Tracks {
  return { 
    type: constants.CLEAR_TRACKS
  };
}

export function TracksAttempt(): Tracks {
  return { 
    type: constants.GET_TRACKS_ATTEMPT
  };
}

export function TracksSuccess(tracks: SimpleTrack[]): Tracks {
  return { 
    type: constants.GET_TRACKS_SUCCESS,
    tracks: tracks 
  };
}

export function TracksError(err: any): Tracks {
  return {    
    type: constants.GET_TRACKS_ERROR,
    tracks: [],
    error: err
  };
}

export function getTracks(index?: number): any {
  const search: string = store.getState().search;

  return (dispatch: Dispatch<Tracks>) => {
    dispatch(TracksAttempt());

    axios.get('http://localhost:3001/track?search=' + search + '&index=' + (index || 0))
      .then(res => {
        const tracks: SimpleTrack[] = res.data.data.map((track: Track) => {
          const momentDuration: moment.Duration = moment.duration(track.duration, 's'),
          simpleTrack: SimpleTrack = {
            album: track.album.title,
            albumId: track.album.id,
            artist: track.artist.name,
            artistId: track.artist.id,
            cover: track.album.cover_small,
            duration: moment(momentDuration.minutes(), 'mm').format('mm') + ':' 
            + moment(momentDuration.minutes(), 'ss').format('ss'),
            id: track.id,
            title: track.title
          };
          
          return simpleTrack;
        });
        dispatch(TracksSuccess(tracks));
      })
      .catch(err => {
        dispatch(TracksError(err));
      });
  };
}

export type TracksAction = Tracks;