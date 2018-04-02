import * as React from 'react';

import DataGridCell from '../containers/DataGridCell';
import { Column } from '../types';

import './DataGridHeader.scss';

export interface Props {
  columns?: Column[];
}

function DataGridHeader(props: Props) {
  return (
    <div className="DataGridHeader">
      {props.columns && props.columns.map((column) => 
        <DataGridCell
          key={column.id} 
          column={column} 
          isHeader={true}
          value={column.name} 
        />
      )}
    </div>
  );
}

export default DataGridHeader;
