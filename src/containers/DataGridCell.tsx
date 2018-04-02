import { MouseEvent } from 'react';
import { connect, Dispatch } from 'react-redux';

import DataGridCell, { Props } from '../components/DataGridCell';
import * as gridActions from '../actions/Grid';
import StoreState from '../types/';

export function mapStateToProps({ columns }: StoreState, ownProps: Props) {
  return {
    column: ownProps.column,
    value: ownProps.value
  };
}

export function mapDispatchToProps(dispatch: Dispatch<gridActions.GridAction>) {
  return {
    onHeaderClick: (e: MouseEvent<HTMLDivElement>, columnId: string) => 
    dispatch(gridActions.sortGrid(columnId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DataGridCell);