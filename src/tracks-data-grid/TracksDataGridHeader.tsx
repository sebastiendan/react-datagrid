import * as React from 'react';
import TracksDataGridCell from './TracksDataGridCell';
import { Column } from './TracksDataGrid.interfaces';

import './TracksDataGridHeader.scss';

export interface Props {
  columns: Column[];
}

class TracksDataGridHeader extends React.Component<Props, object> {
  render() {
    return (
      <div className="TracksDataGridHeader">
        {this.props.columns.map((column) => 
          <TracksDataGridCell key={column.id} column={column} value={column.name} />
        )}
      </div>
    );
  }
}

export default TracksDataGridHeader;
