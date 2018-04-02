import * as React from 'react';
import DataGridCell from '../containers/DataGridCell';
import { Column, Row } from '../types';

import './DataGridRow.scss';

export interface Props {
  columns?: Column[];
  row: Row;
}

function DataGridRow(props: Props) {
  return (
    <div className="DataGridRow">
      {props.columns && props.columns.map((column: Column) =>
        <DataGridCell key={column.id} column={column} value={props.row[column.id]}/>
      )}
    </div>
  );
}

export default DataGridRow;
