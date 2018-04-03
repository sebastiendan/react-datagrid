import * as React from 'react';
import { MouseEvent } from 'react';
import { Column, Sort } from '../types';

import DataGridCellResizer from '../containers/DataGridCellResizer';
import './DataGridCell.scss';

export interface Props {
  column: Column;
  isHeader?: boolean;
  onHeaderClick?: (event: MouseEvent<HTMLDivElement>, columnId: string) => void;
  sort?: Sort;
  value: string;
}

function DataGridCell(props: Props) {
  let classes: string = '',
      content: JSX.Element,
      handleClick: (event: MouseEvent<HTMLDivElement>) => void = (e: MouseEvent<HTMLDivElement>) => {
        if (props.onHeaderClick) {
          props.onHeaderClick(e, props.column.id);
        }
      };
      
  if (!props.column.type || props.column.type !== 'image') {
    if (props.isHeader && props.onHeaderClick) {
      if (props.sort && props.sort.id === props.column.id) {
        classes = 'Sort ' + (props.sort.direction === 1 ? 'Asc' : 'Desc');
      }
      
      content = (
        <div className={'HeaderCell ' + classes} onClick={handleClick}>
          <span>{props.value}</span>
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
