import * as React from 'react';

import DataGridHeader from '../containers/DataGridHeader';
import DataGridRow from '../containers/DataGridRow';

import './DataGrid.scss';

export interface Props {
  rows?: any[];
}

function DataGrid(props: Props) {
  if (props.rows && !props.rows.length) {
    return (<div>No data</div>);
  }

  return (
    <div className="DataGrid">
      <DataGridHeader />
      {props.rows && props.rows.map((row) =>
        <DataGridRow key={row.id} row={row} />
      )}
    </div>
  );
}

export default DataGrid;
