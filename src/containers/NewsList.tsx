import {connect} from 'react-redux';
import NewsComponent from '../components/NewsList';
import fetchNews from '../actions/news';

const stateToProps = (state,ownProps) => {
  return {
    news: state.newsIds.map(hid => state.news[hid])
  }
}
const dispatchToProps = (dispatch,ownProps) => {
  return {
    fetchNews: () => {
      dispatch( fetchNews() )
    }
  }
}

export default connect(stateToProps,dispatchToProps)(NewsComponent);