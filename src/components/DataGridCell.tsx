import * as React from 'react';
import { MouseEvent } from 'react';
import { Column } from '../types';

import './DataGridCell.scss';

export interface Props {
  column: Column;
  onHeaderClick?: (columnId: string, event: MouseEvent<HTMLDivElement>) => void;
  value: string;
}

function DataGridCell(props: Props) {
  let content: JSX.Element;
  
  if (!props.column.type || props.column.type !== 'image') {
    if (props.onHeaderClick) {
      content = (<div className="" onClick={props.onHeaderClick.bind(props.column.id)}>{props.value}</div>);
    } else {
      content = (<div>{props.value}</div>);
    }
  } else {
    content = (<img src={props.value} width="28" />);
  }

  return (
    <div className={props.column.id + ' DataGridCell'}>
      {content}
    </div>
  );
}

export default DataGridCell;
