import {connect} from 'react-redux';
import ResourcesComponent from '../components/ResourcesList';

const stateToProps = (state,ownProps) => {
  return {
    resources: state.resourcesIds.map(hid => state.resources[hid])
  }
}
const dispatchToProps = (dispatch,ownProps) => {
  return {
    
  }
}

export default connect(stateToProps,dispatchToProps)(ResourcesComponent);