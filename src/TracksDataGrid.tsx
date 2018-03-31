import * as React from 'react';
import Track from './interfaces';

export interface Props {
  tracks: Track[];
}

class TracksDataGrid extends React.Component<Props, object> {
  render() {
    if (!this.props.tracks.length) {
      return (<div>No tracks found</div>);
    }

    return (
      <table>
        <thead>
          <tr>
            <th/>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {this.props.tracks.map((track) =>
            <tr key={track.id}>
              <td><img src={track.album.cover_small} width="28"/></td>
              <td>{track.title}</td>
              <td>{track.artist.name}</td>
              <td>{track.album.title}</td>
              <td>{track.durationString}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

export default TracksDataGrid;
