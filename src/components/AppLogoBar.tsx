import * as React from 'react';

const logoImg = require("../res/images/ui/mscLogo.png");

export interface Props {
}

export interface State {
}

export default class AppLogoBar extends React.Component<Props, State>{
  render(){
    const logoHeaderWrapper = {
      width:'100%',
      backgroundColor: '#000',
      padding: 10
    }
    const logoWrapper = {
      maxWidth : 300,
      margin : '0 auto'
    }
    return (
      <div>
         <div style={logoHeaderWrapper}>
          <div style={logoWrapper}>
            <img src={logoImg}/>
          </div>
        </div>
      </div>
    );
  }
}