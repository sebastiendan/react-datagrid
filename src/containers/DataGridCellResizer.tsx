import { connect, Dispatch } from 'react-redux';

import DataGridCellResizer, { Props } from '../components/DataGridCellResizer';
import * as columnActions from '../actions/Column';
import StoreState from '../types/';

export function mapStateToProps({ columns }: StoreState, ownProps: Props) {
  return {
    column: ownProps.column
  };
}

export function mapDispatchToProps(dispatch: Dispatch<columnActions.ColumnAction>) {
  return {
    onDragEnd: (columnId: string, deltaWidth: number) => 
    dispatch(columnActions.resizeColumn(columnId, deltaWidth))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DataGridCellResizer);