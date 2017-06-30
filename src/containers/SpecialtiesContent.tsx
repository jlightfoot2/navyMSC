import {connect} from 'react-redux';
import SpecialtiesComponent from '../components/SpecialtiesContent';

const stateToProps = (state,ownProps) => {
  return {
    specialties: state.specialtyIds.map(hid => state.specialties[hid])
  }
}
const dispatchToProps = (dispatch,ownProps) => {
  return {}
}

export default connect(stateToProps,dispatchToProps)(SpecialtiesComponent);