import * as React from 'react';
import { MouseEvent } from 'react';
import { Column } from './TracksDataGrid.interfaces';

import './TracksDataGridCell.scss';

export interface Props {
  column: Column;
  onHeaderClick?: (columnId: string, event: MouseEvent<HTMLDivElement>) => void;
  value: string;
}

class TracksDataGridCell extends React.Component<Props, object> {
  constructor(props: Props) {
    super(props);
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  handleHeaderClick(e: MouseEvent<HTMLDivElement>) {
    if (this.props.onHeaderClick) {
      this.props.onHeaderClick(this.props.column.id, e);
    }
  }

  render() {
    let content: JSX.Element;
    
    if (!this.props.column.type || this.props.column.type !== 'image') {
      if (this.props.onHeaderClick) {
        content = (<div className="" onClick={this.handleHeaderClick}>{this.props.value}</div>);
      } else {
        content = (<div>{this.props.value}</div>);
      }
    } else {
      content = (<img src={this.props.value} width="28" />);
    }

    return (
      <div className={this.props.column.id + ' TracksDataGridCell'}>
        {content}
      </div>
    );
  }
}

export default TracksDataGridCell;
