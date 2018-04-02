import * as React from 'react';
import { MouseEvent } from 'react';
import { Column } from '../types';

import DataGridCellResizer from '../containers/DataGridCellResizer';
import './DataGridCell.scss';

export interface Props {
  column: Column;
  isHeader?: boolean;
  onHeaderClick?: (event: MouseEvent<HTMLDivElement>, columnId: string) => void;
  value: string;
}

function DataGridCell(props: Props) {
  let content: JSX.Element,
      handleClick: (event: MouseEvent<HTMLDivElement>) => void = (e: MouseEvent<HTMLDivElement>) => {
        if (props.onHeaderClick) {
          props.onHeaderClick(e, props.column.id);
        }
      };
  
  if (!props.column.type || props.column.type !== 'image') {
    if (props.isHeader && props.onHeaderClick) {
      content = (
        <div className="HeaderCell" onClick={handleClick}>
          {props.value}
          <DataGridCellResizer column={props.column} />
        </div>
      );
    } else {
      content = (<div>{props.value}</div>);
    }
  } else {
    content = (<img src={props.value} width="28" />);
  }

  return (
    <div className={props.column.id + ' DataGridCell'} style={{width: props.column.width + '%'}}>
      {content}
    </div>
  );
}

export default DataGridCell;
