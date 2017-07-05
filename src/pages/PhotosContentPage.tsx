import * as React from 'react';
import PhotosContainer from '../containers/PhotosContent';
import { withRouter } from 'react-router-dom';
import {AppPageInterface} from '../components/AppTheme';
import AppTitleBar from '../components/AppTitleBar';

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
        <AppTitleBar title="Around the Globe" />
        <PhotosContainer />
      </div>
    );
  }
}

export default withRouter(NewsContent);