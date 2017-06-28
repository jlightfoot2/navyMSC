import * as React from 'react';
import NewsContainer from '../containers/NewsList';
import {AppPageInterface} from '../components/AppTheme';
import AppTitleBar from '../components/AppTitleBar';

export interface Props {
  appPage: AppPageInterface;
  setPageTitle(title: string): void;
}

export interface State {
  
}

export default class NewsPage extends React.Component<Props, State>{

  componentWillMount(){
    this.props.setPageTitle("News");
  }

  render(){
    return ( 
      <div>
        <AppTitleBar title="News" />
        <NewsContainer />
      </div>
    );
  }
}