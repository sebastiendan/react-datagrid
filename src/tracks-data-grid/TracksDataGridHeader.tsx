import * as React from 'react';
import { MouseEvent } from 'react';
import TracksDataGridCell from './TracksDataGridCell';
import { Column } from './TracksDataGrid.interfaces';

import './TracksDataGridHeader.scss';

export interface Props {
  columns: Column[];
  onHeaderClick?: (columnId: string, event: MouseEvent<HTMLDivElement>) => void;
}

class TracksDataGridHeader extends React.Component<Props, object> {
  render() {
    return (
      <div className="TracksDataGridHeader">
        {this.props.columns.map((column) => 
          <TracksDataGridCell 
            key={column.id} 
            column={column} 
            value={column.name} 
            onHeaderClick={this.props.onHeaderClick}
          />
        )}
      </div>
    );
  }
}

export default TracksDataGridHeader;
