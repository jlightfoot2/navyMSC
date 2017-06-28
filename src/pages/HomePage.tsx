import * as React from 'react';
import {AppPageInterface} from '../components/AppTheme';
import DashboardPage from './DashboardPage';
import SplashPage from './SplashPage';

export interface Props {
  appPage: AppPageInterface;
  setPageTitle(title: string): void;
}

export interface State {
  
}

export default class Home extends React.Component<Props, State>{
  private isAuthenticated : Boolean;
  
  componentWillMount(){
    this.isAuthenticated = true;
    this.props.setPageTitle("Home");
  }

  render(){
    return (
      <div>
        {this.isAuthenticated ? <DashboardPage/> : <SplashPage/>}
      </div>
    )
  }
}