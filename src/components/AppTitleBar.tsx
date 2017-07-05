import * as React from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import {NavigationChevronLeft} from 'material-ui/svg-icons';

export interface Props {
  title : string;
}

export interface State {
}

class AppTitleBar extends React.Component<Props, State>{
  goBack(history){
    history.goBack();
  }
  setTitle(title){
    return (
      <span>
        <img style={{margin:'5px 10px 0 0'}} src={require('../res/images/ui/icon.png')}/>
        <span style={{paddingBottom:5}}>{...title}</span>
      </span>
    );
  }
  backIcon(){
    const leftNavChevSVG = {
      color : '#fff',
      marginTop : 10,
      float : 'left',
      height : "35px", 
      width : "15px",
      cursor : "pointer"
    }
    return (
      <NavigationChevronLeft 
        viewBox="5 0 15 32" 
        style={leftNavChevSVG} 
        onClick={()=>this.goBack(this.props['history'])}/>
    );
  }
  render(){
    const {title} = this.props;
    return (
      <div>
        <AppBar
          style={{position:'fixed'}}
          title={this.setTitle(title)}
          iconElementLeft={this.backIcon()}/>
      </div>
    );
  }
}

export default withRouter(AppTitleBar);