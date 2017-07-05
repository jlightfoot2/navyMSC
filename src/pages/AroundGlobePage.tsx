import * as React from 'react';
import { withRouter } from 'react-router-dom';
import PhotosContainer from '../containers/PhotosList';
import {AppPageInterface} from '../components/AppTheme';
import AppTitleBar from '../components/AppTitleBar';

export interface Props {
  appPage: AppPageInterface;
  setPageTitle(title: string): void;
}

export interface State {
  
}

class AroundGlobePage extends React.Component<Props, State>{

  componentWillMount(){
    this.props.setPageTitle("Around the Globe");
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
export default withRouter(AroundGlobePage);