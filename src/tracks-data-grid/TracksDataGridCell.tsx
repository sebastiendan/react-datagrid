import * as React from 'react';
import { Column } from './TracksDataGrid.interfaces';

import './TracksDataGridCell.scss';

export interface Props {
  column: Column;
  value: string;
}

class TracksDataGridCell extends React.Component<Props, object> {
  render() {
    return (
      <div className={this.props.column.id + ' TracksDataGridCell'}>
        {!this.props.column.type || this.props.column.type !== 'image' ? 
          this.props.value 
          : (
          <img src={this.props.value} width="28" />
        )}
      </div>
    );
  }
}

export default TracksDataGridCell;
