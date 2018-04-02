import axios from 'axios';
import * as moment from 'moment';
import { Dispatch } from 'react-redux';

import * as constants from '../constants';
import { Track, SimpleTrack } from '../types';
import { store } from '..';

export interface GetTracks {
  type: constants.GET_TRACKS_ATTEMPT | constants.GET_TRACKS_SUCCESS | constants.GET_TRACKS_ERROR;
  tracks?: SimpleTrack[];
  error?: any;
}

export function getTracksAttempt(): GetTracks {
  return { 
    type: constants.GET_TRACKS_ATTEMPT
  };
}

export function getTracksSuccess(tracks: SimpleTrack[]): GetTracks {
  return { 
    type: constants.GET_TRACKS_SUCCESS,
    tracks: tracks 
  };
}

export function getTracksError(err: any): GetTracks {
  return {    
    type: constants.GET_TRACKS_ERROR,
    tracks: [],
    error: err
  };
}

export function getTracks(): any {
  const search: string = store.getState().search;

  return (dispatch: Dispatch<GetTracks>) => {
    dispatch(getTracksAttempt());

    axios.get('http://localhost:3001/track?search=' + search)
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
        dispatch(getTracksSuccess(tracks));
      })
      .catch(err => {
        dispatch(getTracksError(err));
      });
  };
}

export type TracksAction = GetTracks;