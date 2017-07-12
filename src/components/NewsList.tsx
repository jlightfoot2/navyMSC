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
  error(){
    return (
      <div style={{padding:30, minHeight:300}}>
        <p>Something went wrong!  An internet connection is required to access the news feed. Please check your connection and try again.</p>
      </div>
    )
  }
  render(){
    const {news} = this.props;
    return ( 
      <div style={{backgroundColor:"#fff", paddingTop:50}}>
        <List>
          { (news.length < 1) ? this.error() : '' }
          {news.map(newsItem => {
            return <NewsItem key={newsItem.id} news={newsItem} />
          })}
        </List>
      </div>
    );
  }
}