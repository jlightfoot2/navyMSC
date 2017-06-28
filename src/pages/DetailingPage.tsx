import * as React from 'react';
import DetailingContainer from '../containers/DetailingList';
import {AppPageInterface} from '../components/AppTheme';
import AppTitleBar from '../components/AppTitleBar';

export interface Props {
  appPage: AppPageInterface;
  setPageTitle(title: string): void;
}

export interface State {
  
}

export default class Detailing extends React.Component<Props, State>{

  componentWillMount(){
    this.props.setPageTitle("Detailing");
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