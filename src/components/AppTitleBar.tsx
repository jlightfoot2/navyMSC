import * as React from 'react';
import { withRouter } from 'react-router-dom';
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
  render(){
    const headerWrapper = {
      width:'100%',
      backgroundColor: '#000',
      padding: 10
    }
    const titleWrapper = {
      width:'80%',
      marginLeft : '10%'
    }
    const leftNavChevSVG = {
      color : '#fff',
      marginTop : 10,
      float : 'left',
      height : "75px", 
      width : "75px",
      cursor : "pointer"
    }
    const {title} = this.props;
    return (
      <div>
         <div style={headerWrapper}>
           <NavigationChevronLeft 
            viewBox="0 0 40 35" 
            style={leftNavChevSVG} 
            onClick={()=>this.goBack(this.props['history'])}/>
          <div style={titleWrapper}>
            <h2 style={{color:'#fff'}}>
              <img style={{marginRight:20}} src={require('../res/images/ui/icon.png')}/>   
              {title}
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AppTitleBar);