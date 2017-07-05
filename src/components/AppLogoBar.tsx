import * as React from 'react';

const logoImg = require("../res/images/ui/mscLogo.png");

export interface Props {
  hasPaddingTop: boolean;
}

export interface State {
}

export default class AppLogoBar extends React.Component<Props, State>{
  render(){
    const logoHeaderWrapper = {
      width:'100%',
      backgroundColor: '#000',
      padding: '50px 0 0'
    }
    const logoHeaderWrapperNoTopPadding = {
      width:'100%',
      backgroundColor: '#000',
      padding: '0'  
    }
    const logoWrapper = {
      maxWidth : 245,
      margin : '0 auto'
    }
    const {hasPaddingTop} = this.props;
    return (
      <div>
         <div style={(hasPaddingTop) ? logoHeaderWrapper : logoHeaderWrapperNoTopPadding}>
          <div style={logoWrapper}>
            <img src={logoImg}/>
          </div>
        </div>
      </div>
    );
  }
}