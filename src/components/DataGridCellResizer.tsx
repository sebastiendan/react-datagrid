import * as React from 'react';
import { MouseEvent } from 'react';
import { Column } from '../types';

import './DataGridCellResizer.scss';

export interface Props {
  column: Column;
  onDragEnd?: (columnId: string, width: number) => void;
}

function DataGridCellResizer(props: Props) {
  let deltaWidth: number,      
      originalXPos: number,
      onDragStart: (e: MouseEvent<HTMLDivElement>) => void = (e: MouseEvent<HTMLDivElement>) => {
        originalXPos = e.clientX;
      },
      onDragEnd: (e: MouseEvent<HTMLDivElement>) => void = (e: MouseEvent<HTMLDivElement>) => {
        const columnWidth: number = document.getElementsByClassName(props.column.id)[0].clientWidth,
              tableWidth: number = document.getElementsByClassName('DataGrid')[0].clientWidth;
        
        deltaWidth = columnWidth - (originalXPos - e.clientX);

        if (props.onDragEnd) {
          props.onDragEnd(props.column.id, deltaWidth / tableWidth * 100);
        }
      };

  return (
    <div className="DataGridCellResizer" draggable={true} onDragStart={onDragStart} onDragEnd={onDragEnd} />
  );
}

export default DataGridCellResizer;
