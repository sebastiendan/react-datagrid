import { connect } from 'react-redux';

import App from '../App';
import StoreState from '../types/';

export function mapStateToProps({ error, isLoading }: StoreState) {
  return {
    error: error,
    isLoading: isLoading
  };
}

export default connect(mapStateToProps)(App);