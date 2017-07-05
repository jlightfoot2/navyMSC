import * as React from 'react';
import { withRouter } from 'react-router-dom';
import {NewsInterface} from '../res/data/news';
import {ListItem} from 'material-ui/List';

export interface Props {
  news: NewsInterface;
}

export interface State {

}

class NewsItem extends React.Component<Props, State>{

  constructor(props){
    super(props);
  }
  
  openDetail( props ){
    props.history.push('/news-content/'+props.news.id);
  }
  
  render(){
    const {news} = this.props;
    const listStyle = {
      margin: 10,
      border: '1px groove #FBF8F8',
      padding : "10px 5px"
    }
    return (
      <ListItem primaryText={news.title} style={listStyle} 
        onClick={() => this.openDetail(this.props)} />
    );
  }
}

export default withRouter(NewsItem);