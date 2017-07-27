/**
 * @file DetailingContent.tsx
 * 
 
 * Name: DetailingContent.tsx
 * 
 *
 * Modified by Daniel Gilfoy <daniel.gilfoy@tee2.org> on 7/25/2017.
 *
 * Navy MSC Cordova App
 *
 * Copyright © 2009-2017 United States Government as represented by
 * the Chief Information Officer of the National Center for Telehealth
 * and Technology. All Rights Reserved.
 *
 * Copyright © 2009-2017 Contributors. All Rights Reserved.
 *
 * THIS OPEN SOURCE AGREEMENT ("AGREEMENT") DEFINES THE RIGHTS OF USE,
 * REPRODUCTION, DISTRIBUTION, MODIFICATION AND REDISTRIBUTION OF CERTAIN
 * COMPUTER SOFTWARE ORIGINALLY RELEASED BY THE UNITED STATES GOVERNMENT
 * AS REPRESENTED BY THE GOVERNMENT AGENCY LISTED BELOW ("GOVERNMENT AGENCY").
 * THE UNITED STATES GOVERNMENT, AS REPRESENTED BY GOVERNMENT AGENCY, IS AN
 * INTENDED THIRD-PARTY BENEFICIARY OF ALL SUBSEQUENT DISTRIBUTIONS OR
 * REDISTRIBUTIONS OF THE SUBJECT SOFTWARE. ANYONE WHO USES, REPRODUCES,
 * DISTRIBUTES, MODIFIES OR REDISTRIBUTES THE SUBJECT SOFTWARE, AS DEFINED
 * HEREIN, OR ANY PART THEREOF, IS, BY THAT ACTION, ACCEPTING IN FULL THE
 * RESPONSIBILITIES AND OBLIGATIONS CONTAINED IN THIS AGREEMENT.
 *
 * Government Agency: The National Center for Telehealth and Technology
 * User Registration Requested. Please send email
 * with your contact information to: robert.a.kayl.civ@mail.mil
 * Government Agency Point of Contact for
 * Original Software: robert.a.kayl.civ@mail.mil
 */ 
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
    window.scrollTo(0,0);
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
            <h3 style={{marginBottom: 0, color: '#1b4583'}}>{detailContent.name}</h3>
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