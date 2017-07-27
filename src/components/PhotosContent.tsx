/**
 * @file PhotosContent.tsx
 * 
 
 * Name: PhotosContent.tsx
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
import {PhotosInterface} from '../res/data/photos';

export interface Props {
  photos: PhotosInterface[];
  history;
}

export interface State {}

class PhotosContentComponent extends React.Component<Props, State>{
  private path : any;
  constructor(props){
    super(props);

  }
  componentWillMount(){
    window.scrollTo(0,0);
    this.path = this.props['location'].pathname.split('/');
  }
  learnMoreButtonClick(url){
    window.open(url,'_blank');
  }
  render(){
    const {photos} = this.props;
    const photosId = parseInt(this.path[2]);
    let photosContent = photos.filter(photosItem => {
      return photosItem.id === photosId;
    })[0];
    return ( 
      <div>
        <img style={{width:'100%', marginBottom:'-4px', paddingTop:50}} src={require('../res/images/around-the-world/' + photosContent.src)} />
        <div style={{backgroundColor:"#fff",width:'100%',padding:'5px 0 10px 5px',minHeight:385, position:'relative'}}>
          {photosContent.content}
        </div>
      </div>
    );
  }
}
export default withRouter(PhotosContentComponent);