import * as React from 'react';
import SpecialtiesContainer from '../containers/SpecialtiesList';
import {AppPageInterface} from '../components/AppTheme'
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
    console.log(this.props.appPage.screen);
    return ( 
      <div>
        <SpecialtiesContainer />
      </div>
    );
  }
}