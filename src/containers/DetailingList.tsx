import {connect} from 'react-redux';
import DetailingComponent from '../components/DetailingList';

const stateToProps = (state,ownProps) => {
  return {
    detailing: state.detailingIds.map(hid => state.detailing[hid])
  }
}
const dispatchToProps = (dispatch,ownProps) => {
  return {
    
  }
}

export default connect(stateToProps,dispatchToProps)(DetailingComponent);