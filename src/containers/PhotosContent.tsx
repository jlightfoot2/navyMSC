import {connect} from 'react-redux';
import PhotosComponent from '../components/PhotosContent';

const stateToProps = (state,ownProps) => {
  return {
    photos: state.photosIds.map(hid => state.photos[hid])
  }
}
const dispatchToProps = (dispatch,ownProps) => {
  return {}
}

export default connect(stateToProps,dispatchToProps)(PhotosComponent);