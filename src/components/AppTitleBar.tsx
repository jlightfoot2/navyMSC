import * as React from 'react';

export interface Props {
  title : string;
}

export interface State {
}

export default class AppTitleBar extends React.Component<Props, State>{
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
    const {title} = this.props;
    return (
      <div>
         <div style={headerWrapper}>
          <div style={titleWrapper}>
            <h2 style={{color:'#fff'}}>{title}</h2>
          </div>
        </div>
      </div>
    );
  }
}