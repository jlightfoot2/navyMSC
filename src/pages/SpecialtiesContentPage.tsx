import * as React from 'react';
import SpecialtiesContainer from '../containers/SpecialtiesContent';
import { withRouter } from 'react-router-dom';
import {AppPageInterface} from '../components/AppTheme';
import AppTitleBar from '../components/AppTitleBar';

export interface Props {
  appPage: AppPageInterface;
  setPageTitle(title: string): void;
  params;
}

export interface State {}

class SpecialtiesContent extends React.Component<Props, State>{
  constructor(props,state){
    super(props,state);
  }

  render(){
    return ( 
      <div>
        <AppTitleBar title="Specialties" />
        <SpecialtiesContainer />
      </div>
    );
  }
}

export default withRouter(SpecialtiesContent);