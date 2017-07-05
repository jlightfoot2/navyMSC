import * as React from 'react';
import NewsContainer from '../containers/NewsContent';
import { withRouter } from 'react-router-dom';
import {AppPageInterface} from '../components/AppTheme';
import AppTitleBar from '../components/AppTitleBar';
import AppLogoBar  from '../components/AppLogoBar';

export interface Props {
  appPage: AppPageInterface;
  setPageTitle(title: string): void;
  params;
}

export interface State {}

class NewsContent extends React.Component<Props, State>{
  constructor(props,state){
    super(props,state);
  }

  render(){
    return ( 
      <div>
        <AppTitleBar title="News" />
        <AppLogoBar hasPaddingTop={true}/>
        <NewsContainer />
      </div>
    );
  }
}

export default withRouter(NewsContent);