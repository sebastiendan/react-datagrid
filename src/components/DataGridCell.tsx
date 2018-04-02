import * as React from 'react';
import { MouseEvent } from 'react';
import { Column } from '../types';

import './DataGridCell.scss';

export interface Props {
  column: Column;
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
    if (props.onHeaderClick) {
      content = (<div className="HeaderCell" onClick={handleClick}>{props.value}</div>);
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
