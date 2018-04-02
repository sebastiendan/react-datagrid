import { connect } from 'react-redux';

import DataGridHeader from '../components/DataGridHeader';
import StoreState from '../types/';

export function mapStateToProps({ columns }: StoreState) {
  return {
    columns: columns
  };
}

export default connect(mapStateToProps)(DataGridHeader);