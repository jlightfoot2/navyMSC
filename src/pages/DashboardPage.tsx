/**
 * @file DashboardPage.tsx
 * File in charge of Displaying the home page or "Dashboard"
 
 * Name: DashboardPage.ts
 * Purpose of this file is to provide the view for the main page of the app -  or it's dashboard
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
import {Link} from 'react-router-dom';
import AppLogoBar  from '../components/AppLogoBar';
import {AppPageInterface} from '../components/AppTheme';
import {
  buttonRowSpacing,
  smallImage,
  smallImageLeft,
  smallImageRight,
  askChiefWrapper,
  chiefImgWrapper,
  buttonsWrapper,
  versionStyle
} from '../styles/dashboardStyles';

const ourStoryImage = require("../res/images/ui/button-our-story.png");
const specialtiesImage = require("../res/images/ui/button-specialties.png");
const detailingImage = require("../res/images/ui/button-detailing.png");
const newsImage = require("../res/images/ui/button-news.png");
const aglobeImage = require("../res/images/ui/button-around-globe.png");
const resourcesImage = require("../res/images/ui/button-resources.png");
const chiefImg = require("../res/images/ui/button-ask-chief.png");
const fbImage = require("../res/images/ui/msc-facebook-centered.png");

export interface Props {
  appPage: AppPageInterface;
}
export interface State {}

export default class DashboardPage extends React.Component<Props, State>{
  setMaxHeight(){
    let scrHeight = this.props.appPage.screen.height,
      multi = ( scrHeight > 700 ) ? .65 : .59;
    return ( scrHeight * multi );
  }
  render(){
    //@todo move all of my styles to a folder and do imports and/or use combines
    const buttonWrapperMinHeight = {
      minHeight: this.setMaxHeight()
    }
    const fbIconSize = (this.props.appPage.screen.height > 700 ) ? 90 : 78;
    return (
      <div style={{position:'relative'}}>
       <AppLogoBar hasPaddingTop={false}/>
        <div style={{...buttonsWrapper,...buttonWrapperMinHeight}}>
          <div style={buttonRowSpacing} className="clearfix">
            <Link to="/our-story"><img src={ourStoryImage} style={{...smallImage,...smallImageLeft}}/></Link>
            <Link to="/specialties"><img src={specialtiesImage} style={{...smallImage,...smallImageRight}}/></Link>
          </div>
          <div style={buttonRowSpacing} className="clearfix">
            <Link to="/detailing"><img src={detailingImage} style={{...smallImage,...smallImageLeft}}/></Link>
            <Link to="/news"><img src={newsImage} style={{...smallImage,...smallImageRight}}/></Link>
          </div>
          <div style={buttonRowSpacing} className="clearfix">
            <Link to="/around-the-globe"><img src={aglobeImage} style={{...smallImage,...smallImageLeft}}/></Link>
            <Link to="/resources"><img src={resourcesImage} style={{...smallImage,...smallImageRight}}/></Link>
          </div>
          <div style={{width:'80%',margin:'0 auto', maxWidth:fbIconSize, height:fbIconSize, paddingBottom:20}} className="clearfix">
            <a href="https://www.facebook.com/groups/usnavymsc/" target="_blank"><img style={{maxWidth:fbIconSize, marginRight:'20%'}} src={fbImage}/></a>
          </div>
        </div>
        <div style={askChiefWrapper}>
          <div style={chiefImgWrapper}>
            <Link to="/ask-the-chief"><img src={chiefImg} style={{width:'100%'}} /></Link>
          </div>
        </div>
        <div style={versionStyle}>version 1.0.1</div>
      </div>
    )
  }
}