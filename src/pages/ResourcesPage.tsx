import * as React from 'react';
import { withRouter } from 'react-router-dom';
import ResourcesContainer from '../containers/ResourcesList';
import {AppPageInterface} from '../components/AppTheme';
import AppTitleBar from '../components/AppTitleBar';

export interface Props {
  appPage: AppPageInterface;
  setPageTitle(title: string): void;
}

export interface State {
  
}

class ResourcesPage extends React.Component<Props, State>{

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

export default withRouter(ResourcesPage);