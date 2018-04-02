import { connect } from 'react-redux';

import DataGridRow, { Props } from '../components/DataGridRow';
import StoreState from '../types/';

export function mapStateToProps({ columns }: StoreState, ownProps: Props) {
  return {
    columns: columns,
    row: ownProps.row
  };
}

export default connect(mapStateToProps)(DataGridRow);