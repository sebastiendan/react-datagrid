import * as React from 'react';
import { ChangeEvent } from 'react';
import { SimpleTrack, Filter } from '../types/index';

import './FilterForm.scss';

export interface Option {
  artist: Artist;
  albums: Album[];
}

export interface Artist {
  id: number;
  name: string;
}

export interface Album {
  cover: string;
  id: number;
  title: string;
}

export interface Props {
  filter: Filter;
  isFilterVisible: boolean;
  onFilterChange?: (filter: Filter) => void;
  onToggleFilterClick?: () => void;
  tracks: SimpleTrack[];
}

function FilterForm(props: Props) {  
  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>, filterType: string, filterValue: number) => {
    if (e.target.checked) {
      props.filter[filterType].push(filterValue);
    } else {
      props.filter[filterType].splice(props.filter[filterType].indexOf(filterValue), 1);
    }

    if (props.onFilterChange) {      
      props.onFilterChange(props.filter);
    }
  },
  options: Option[] = props.tracks
    .map(x => { return {name: x.artist, id: x.artistId} as Artist; })
    .filter((item: Artist, index: number, array: Artist[]) => {
      return array.map(x => x.id).indexOf(item.id) === index;
    })
    .reduce(
      (prev: Option[], curr: Artist) => {
        let option: any = {};
        option.artist = curr;
        option.albums = props.tracks
          .filter(x => x.artistId === curr.id)
          .map(x => { return {id: x.albumId, title: x.album, cover: x.cover} as Album; })
          .filter((item: Album, index: number, array: Album[]) => {
            return array.map(x => x.title).indexOf(item.title) === index;
          });
          
        prev.push(option);
        return prev;
      }, 
      []);
  
  if (!options.length) {
    return (null);
  }
  
  return (
    <div className="FilterWrapper">
      <div 
        className={'FilterToggle ' + (props.isFilterVisible ? 'Open' : '')} 
        onClick={props.onToggleFilterClick}
      >Filter
      </div>
      {props.isFilterVisible &&
        <form className="FilterForm">
          {options.map((option: any) => {
            return (
              <div className="ArtistWrapper" key={option.artist.id}>
                <input 
                  type="checkbox" 
                  hidden={true}
                  id={'artist-' + option.artist.id}
                  checked={props.filter.artists.indexOf(option.artist.id) > -1}
                  value={option.artist.id} 
                  onChange={
                    (e: any) => { 
                      handleFilterChange(e, 'artists', option.artist.id);
                    }  
                  }
                />
                <label className="Filter" htmlFor={'artist-' + option.artist.id}>{option.artist.name}</label>
                <div>
                  {option.albums.map((album: Album) => {
                    return (
                      <div className="AlbumWrapper" key={album.title}>                    
                        <input 
                          type="checkbox"
                          hidden={true}
                          id={'album-' + album.id}
                          checked={props.filter.albums.indexOf(album.id) > -1}
                          value={album.title} 
                          onChange={
                            (e: any) => { 
                              handleFilterChange(e, 'albums', album.id);
                            }  
                          }
                        />
                        <label className="Filter" htmlFor={'album-' + album.id}>
                          <img src={album.cover} width="28"/>
                          <div>{album.title}</div>
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}  
        </form>
      }
    </div>
  );
}

export default FilterForm;
