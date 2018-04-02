import { connect } from 'react-redux';

import DataGrid from '../components/DataGrid';
import StoreState from '../types/';

export function mapStateToProps({ tracks }: StoreState) {
  return {
    rows: tracks
  };
}

export default connect(mapStateToProps)(DataGrid);