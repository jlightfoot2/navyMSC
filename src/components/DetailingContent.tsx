import * as React from 'react';
import { withRouter } from 'react-router-dom';
import {DetailingInterface} from '../res/data/detailing';
import AppLogoBar  from '../components/AppLogoBar';

export interface Props {
  detailing: DetailingInterface[];
}

export interface State {

}

class DetailingComponent extends React.Component<Props, State>{
  private path : any;
  constructor(props){
    super(props);

  }
  componentWillMount(){
    this.path = this.props['location'].pathname.split('/');
  }
  render(){
    const {detailing} = this.props;
    const detId = parseInt(this.path[2]);
    let detailContent = detailing.filter(detail => {
      return detail.id === detId;
    })[0];
    return ( 
      <div>
        <AppLogoBar hasPaddingTop={true}/>
        <div style={{backgroundColor:"#fff",width:'100%',padding:'0 0 10px'}}>
          <div style={{width:'90%', margin:'0 auto'}}>
            <h2 style={{marginTop:0,textAlign:'center',paddingTop:10}}>{detailContent.dept}</h2>
            <h3 style={{marginBottom: 0}}>{detailContent.name}</h3>
            {detailContent.title.length > 0 ? <p style={{marginTop: 0}}>{detailContent.title}</p> : ''}
            <h4>Area</h4>
            <p>{detailContent.area}</p>
            <h4>Email</h4>
            <p>{detailContent.email}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(DetailingComponent);