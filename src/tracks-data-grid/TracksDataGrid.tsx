import * as React from 'react';
import { MouseEvent } from 'react';
import TracksDataGridHeader from './TracksDataGridHeader';
import TracksDataGridRow from './TracksDataGridRow';
import { Column, Row } from './TracksDataGrid.interfaces';

import './TracksDataGrid.scss';

export interface Props {
  columns: Column[];
  onHeaderClick?: (columnId: string, event: MouseEvent<HTMLDivElement>) => void;
  rows: Row[];
}

class TracksDataGrid extends React.Component<Props, object> {
  render() {
    if (!this.props.rows.length) {
      return (<div>No tracks found</div>);
    }

    return (
      <div className="TracksDataGrid">
        <TracksDataGridHeader columns={this.props.columns} onHeaderClick={this.props.onHeaderClick}/>
        {this.props.rows.map((row) =>
          <TracksDataGridRow key={row.id} row={row} columns={this.props.columns} />
        )}
      </div>
    );
  }
}

export default TracksDataGrid;
