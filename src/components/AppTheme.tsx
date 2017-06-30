import * as React from 'react';
import { withRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import OurStoryPage from '../pages/OurStoryPage';
import SpecialtiesPage from '../pages/SpecialtiesPage';
import DetailingPage from '../pages/DetailingPage';
import DetailingContentPage from '../pages/DetailingContentPage';
import SpecialtiesContentPage from '../pages/SpecialtiesContentPage';
import NewsPage from '../pages/NewsPage';
import AroundGlobePage from '../pages/AroundGlobePage';
import ResourcesPage from '../pages/ResourcesPage';
import AskChiefPage from '../pages/AskChiefPage';
import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import BasicPage from '../containers/BasicPage';

const muiTheme = getMuiTheme({
  palette: {
    
    textColor: '#000000',
    primary1Color: '#000000',
    primary2Color: '#1b4583',
    primary3Color: '#1b4583'

  },
  appBar: {
    height: 50,
  },
});

export interface AppPageInterface {
  screen:{width: number, height: number}
}
export interface Props {
  params
}

export interface State {
  screen:{width: number, height: number}
}
class App extends React.Component<Props, State>{
  constructor(props){
    super(props);
    this.state = {
      screen: this.getScreenDimensions(),
    }
  }

  getAppPageObject = ():AppPageInterface => {
    return {
      screen: this.state.screen
    }
  }

  componentWillMount(){
  }

  componentDidMount(){
    this.handlePageResize();
  }

  getScreenDimensions = () => {
    return {
       width: window.innerWidth,
       height: window.innerHeight
    }
  }

  hasScreenChanged = () => {
    const {width, height} = this.state.screen;
    const currentDims = this.getScreenDimensions();

    if(width !== currentDims.width){
      return true;
    }
    if(height !== currentDims.height){
      return true;
    }
    return false;
  }

  handlePageResize = () => {
    let resizeTimeoutId = null;
    window.onresize = () => {
       if(resizeTimeoutId){
         clearTimeout(resizeTimeoutId);
       }

       if(this.hasScreenChanged()){

         resizeTimeoutId = setTimeout(
                () => {
                  
                 this.setState({
                   screen: this.getScreenDimensions()
                 }); 
                  
                },
              500);
       }

      
    }
  }
  renderRouteComponent = (Component) => {

    return () => {  
      return (
        <BasicPage>
          <Component appPage={this.getAppPageObject()} />
        </BasicPage>
      );
    };
  }
  
  render(){
    return <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <div style={{padding: '0px'}}>
        <Route exact path="/" render={this.renderRouteComponent(HomePage)} />
        <Route path="/our-story" render={this.renderRouteComponent(OurStoryPage)} />
        <Route path="/specialties" render={this.renderRouteComponent(SpecialtiesPage)} />
        <Route path="/specialties-content/:sid" render={this.renderRouteComponent(SpecialtiesContentPage)} />
        <Route path="/detailing" render={this.renderRouteComponent(DetailingPage)} />
        <Route path="/detailing-content/:did" render={this.renderRouteComponent(DetailingContentPage)} />
        <Route path="/news" render={this.renderRouteComponent(NewsPage)} />
        <Route path="/around-the-globe" render={this.renderRouteComponent(AroundGlobePage)} />
        <Route path="/resources" render={this.renderRouteComponent(ResourcesPage)} />
        <Route path="/ask-the-chief" render={this.renderRouteComponent(AskChiefPage)} />
      </div>
    </div>
    </MuiThemeProvider>;
 
  }
}

export default withRouter(App);