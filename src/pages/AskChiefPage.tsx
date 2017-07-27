/**
 * @file AskChiefPage.tsx
 * 
 * Name: AskChiefPage.tsx
 * 
 * Page that displays explanitory text and a button that will open up default mail app to send 
 * an email to the Corps Chief.  
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
import AppTitleBar from '../components/AppTitleBar';
import AppLogoBar  from '../components/AppLogoBar';
import RaisedButton from 'material-ui/RaisedButton';

export interface Props {
  view;
}
export interface State {}

export default class AskChiefPage extends React.Component<Props, State>{
 
  render(){
    const screenHeight = this.props['appPage'].height;
    return (
      <div style={{backgroundColor: '#1b4583', minHeight:screenHeight}}>
        <AppTitleBar title="Ask the Corps Chief" />
        <AppLogoBar hasPaddingTop={true}/>
        <div style={{backgroundColor:"#fff",padding:'15px', position:'relative', minHeight:'350px'}}>
          <p>For questions or concerns, please feel free to send an email to the Corps Chief's Office by tapping the button below.</p>
          <RaisedButton  label="Email Corps Chief"
            backgroundColor='#1b4583' 
            labelColor='#fff' 
            style={{minWidth:'60%', maxWidth:'80%', display:'block', position:'absolute',left:'20%',bottom:'20px',cursor:'pointer'}}
            href="mailto:usn.ncr.bumedfchva.list.msc-corps-chiefs-office@mail.mil" />  
        </div>
      </div>
    )
  }
}