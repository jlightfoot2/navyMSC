/**
 * @file SpecialtiesContent.tsx
 * 
 
 * Name: SpecialtiesContent.tsx
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
import {SpecialtyInterface} from '../res/data/specialties';

export interface Props {
  specialties: SpecialtyInterface[];
}

export interface State {}

class SpecialtiesComponent extends React.Component<Props, State>{
  private path : any;
  constructor(props){
    super(props);

  }
  componentWillMount(){
    window.scrollTo(0,0);
    this.path = this.props['location'].pathname.split('/');
  }
  createContent(content){
    return {__html: content};
  }
  render(){
    const {specialties} = this.props;
    const specId = parseInt(this.path[2]);
    let specialtyContent = specialties.filter(specialty => {
      return specialty.id === specId;
    })[0];
    return ( 
      <div>
        <div style={{width:'100%', margin:'0 auto',color:'#fff', paddingTop:50, backgroundColor: '#1b4583'}}>
          <h2 style={{marginTop:0,padding:'30px 20px'}}>{specialtyContent.title}</h2>
        </div>
        <div style={{backgroundColor:"#fff",width:'94.5%',padding:'10px',minHeight:540}} 
          dangerouslySetInnerHTML={this.createContent(specialtyContent.content)}>
        </div>
      </div>
    );
  }
}
export default withRouter(SpecialtiesComponent);