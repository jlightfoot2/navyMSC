/**
 * @file OurStoryPage.tsx
 * 
 
 * Name: OurStoryPage.tsx
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
import AppLogoBar  from '../components/AppLogoBar';
import AppTitleBar from '../components/AppTitleBar';

export interface Props {}

export interface State {}

export default class OurStoryPage extends React.Component<Props, State>{
  render(){
    const liItemStyle ={
      paddingBottom : '10px'
    }
    return (
      <div>
        <AppTitleBar title=""/>
        <AppLogoBar hasPaddingTop={true}/>
        <div style={{backgroundColor:"#fff",padding:'5px'}}>
          <h2 style={{padding:'10px 5px 5px',marginTop:0}}><u>The Medical Service Corps</u></h2>
          <p>The Medical Service Corps (MSC) is the most highly diversified Corps within Navy medicine. An integral part of the Navy, 
            the Medical Service Corps is comprised of a multidisciplinary team of commissioned Naval Officers in clinical,
            scientific, and administrative health care fields.</p>
            <h2>A Brief History</h2>
            <p>Originally called the Navy Hospital Corps in World War I, its vital role expanded during World War II – as the military recognized the need for a 
              permanent, all-officer medical category comprised of individuals trained in administrative, professional, and scientific specialties.  
              The Medical Service Corps was officially authorized by the Army-Navy Medical Service Corps Act of 1947.
            </p>

            <h2>The Medical Service Corps Today</h2>
            <p>The Medical Service Corps is comprised of thirty one sub specialties, organized under three major categories: Healthcare Administrators, 
              Clinicians, and Scientists.  The Medical Service Corps has approximately 2,800 officers on active duty and 350 officers serving in the reserve 
              component.  Health Care Scientists make up 24 percent of the MSC; Health Care Clinicians make up 40 percent, serving in 22 different specialties, 
              while Health Care Administrators comprise the remaining 36 percent.
            </p>

            <p>MSC Officers serve in more than 250 naval and medical commands throughout the world.  
              About 65 percent serve in facilities delivering direct patient care and 35 percent serve in operational units, training and research commands, 
              occupational and preventive medicine units, material and logistic support commands and headquarters commands.
            </p>
            <h2>Our Mission</h2>
            <p>The Medical Service Corps actively supports the Navy and Marine Corps team and Navy Medicine’s 
              readiness and health benefits missions with a community of active duty and reserve component professionals.
            </p>
            <h2>Our Vision</h2>
            <p>One Corps of many specialties meeting today’s needs and tomorrow’s challenges.</p>

            <h2>Directors of the Medical Service Corps</h2>
            <ul style={{listStyle:'none',paddingLeft: '5px'}}>
              <li style={liItemStyle}>
                CAPT Willard Calkins<br/>
                1954-1958
              </li>
              <li style={liItemStyle}>
                CAPT Leo Elasser<br/>
                1958-1962
              </li>
              <li style={liItemStyle}>
                CAPT Robert Herrmann<br/>
                1962-1968
              </li>
              <li style={liItemStyle}>
                CAPT Emmitt Van Landingham Jr<br/>
                1968-1973
              </li>
              <li style={liItemStyle}>
                CAPT Albert Schwab<br/>
                1973-1976
              </li>
              <li style={liItemStyle}>
                CAPT William Green Jr<br/>
                1976-1978
              </li>
              <li style={liItemStyle}>
                CAPT Paul Nelson<br/>
                1978-1982
              </li>
              <li style={liItemStyle}>
                RDML Lewis E. Angelo<br/>
                1982-1987
              </li>
              <li style={liItemStyle}>
                RDML Donald Schuler<br/>
                1987-1991
              </li>
              <li style={liItemStyle}>
                RDML Charles Loar<br/>
                1991-1993
              </li>
              <li style={liItemStyle}>
                RDML Stephen Todd Fisher<br/>
                1993-1995
              </li>
              <li style={liItemStyle}>
                RDML Edward Phillips<br/>
                1995-1999
              </li>
              <li style={liItemStyle}>
                RDML Phillip Van Landingham<br/>
                1999-2004
              </li>
              <li style={liItemStyle}>
                RDML Brian Brannman<br/>
                2004-2006
              </li>
              <li style={liItemStyle}>
                RDML Michael H. Mittelman<br/>
                2006-2009
              </li>
              <li style={liItemStyle}>
                RDML Eleanor V. Valentin<br/>
                2009-2012
              </li>
              <li style={liItemStyle}>
                RDML Terry J. Moulton<br/>
                2012-2015
              </li>
              <li style={liItemStyle}>
                RDML Anne M. Swap<br/>
                2015-Current
              </li>
            </ul>
        </div>
      </div>
    )
  }
}