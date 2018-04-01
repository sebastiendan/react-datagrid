import * as React from 'react';
import TracksDataGridCell from './TracksDataGridCell';
import { Column, Row } from './TracksDataGrid.interfaces';

import './TracksDataGridRow.scss';

export interface Props {
  columns: Column[];
  row: Row;
}

class TracksDataGridRow extends React.Component<Props, object> {
  render() {
    return (
      <div className="TracksDataGridRow">
        {this.props.columns.map((column: Column) =>
          <TracksDataGridCell key={column.id} column={column} value={this.props.row[column.id]}/>
        )}
      </div>
    );
  }
}

export default TracksDataGridRow;
