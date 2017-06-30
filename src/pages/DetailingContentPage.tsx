import * as React from 'react';
import DetailingContainer from '../containers/DetailingContent';
import { withRouter } from 'react-router-dom';
import {AppPageInterface} from '../components/AppTheme';
import AppTitleBar from '../components/AppTitleBar';

export interface Props {
  appPage: AppPageInterface;
  setPageTitle(title: string): void;
  params;
}

export interface State {}

class DetailingContent extends React.Component<Props, State>{
  constructor(props,state){
    super(props,state);
  }

  render(){
    return ( 
      <div>
        <AppTitleBar title="Detailing" />
        <DetailingContainer />
      </div>
    );
  }
}

export default withRouter(DetailingContent);