import { connect } from 'react-redux';

import DataGrid from '../components/DataGrid';
import StoreState from '../types/';

export function mapStateToProps({ filteredTracks }: StoreState) {
  return {
    rows: filteredTracks
  };
}

export default connect(mapStateToProps)(DataGrid);