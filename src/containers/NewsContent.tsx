import {connect} from 'react-redux';
import NewsComponent from '../components/NewsContent';

const stateToProps = (state,ownProps) => {
  return {
    news: state.newsIds.map(hid => state.news[hid])
  }
}
const dispatchToProps = (dispatch,ownProps) => {
  return {}
}

export default connect(stateToProps,dispatchToProps)(NewsComponent);