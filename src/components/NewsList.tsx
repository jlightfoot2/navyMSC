import * as React from 'react';
import {NewsInterface} from '../res/data/news';
import NewsItem from './NewsItem';
import {List} from 'material-ui/List';

export interface Props {
  news: NewsInterface[];
}

export interface State {}

export default class NewsList extends React.Component<Props, State>{

  constructor(props){
    super(props);

  }
  
  render(){
    const {news} = this.props;
    return ( 
      <div style={{backgroundColor:"#fff", paddingTop:50}}>
        <List>
          {news.map(newsItem => {
            return <NewsItem key={newsItem.id} news={newsItem} />
          })}
        </List>
      </div>
    );
  }
}