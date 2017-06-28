import * as React from 'react';
import {NewsInterface} from '../res/data/news';
import {ListItem} from 'material-ui/List';

export interface Props {
  news: NewsInterface;
}

export interface State {

}

export default class NewsItem extends React.Component<Props, State>{

  constructor(props){
    super(props);
  }
  
  render(){
    const {news} = this.props;
    const listStyle = {
      margin: 10,
      border: '1px groove #FBF8F8',
      padding : "10px 5px"
    }
    return (
      <ListItem primaryText={news.title} style={listStyle} />
    );
  }
}

