import * as React from 'react';
import ResourcesContainer from '../containers/ResourcesList';
import {AppPageInterface} from '../components/AppTheme';
import AppTitleBar from '../components/AppTitleBar';

export interface Props {
  appPage: AppPageInterface;
  setPageTitle(title: string): void;
}

export interface State {
  
}

export default class ResourcesPage extends React.Component<Props, State>{

  componentWillMount(){
    this.props.setPageTitle("Resources");
  }

  render(){
    return ( 
      <div>
        <AppTitleBar title="Resources" />
        <ResourcesContainer />
      </div>
    );
  }
}