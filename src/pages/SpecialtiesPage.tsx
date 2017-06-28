import * as React from 'react';
import SpecialtiesContainer from '../containers/SpecialtiesList';
import {AppPageInterface} from '../components/AppTheme';
import AppTitleBar from '../components/AppTitleBar';
export interface Props {
  appPage: AppPageInterface;
  setPageTitle(title: string): void;
}

export interface State {
  
}

export default class SpecialtiesPage extends React.Component<Props, State>{

  componentWillMount(){
    this.props.setPageTitle("Specialties");
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