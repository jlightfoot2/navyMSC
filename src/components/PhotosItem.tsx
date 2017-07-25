/**
 * @file PhotosItem.tsx
 * 
 
 * Name: PhotosItem.tsx
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
import {ListItem} from 'material-ui/List';

export interface Props {
  photos: PhotosInterface;
}

export interface State {

}

class PhotosItem extends React.Component<Props, State>{
  public state = {
    open : false
  };
  constructor(props){
    super(props);
  }
  itemImage(photo){
    return <img style={{width:'100%'}} src={require('../res/images/around-the-world/' + photo.src)} />;
  }
  linkToPhotoContent(props){
    props.history.push('/around-the-globe-content/'+props.photos.id);
  }
  render(){
    const {photos} = this.props;
    const listStyle = {
      margin: 10,
      padding : "10px 5px"
    }
    return (
      <div style={listStyle}>
        <ListItem primaryText={this.itemImage(photos)} onTouchTap={()=>this.linkToPhotoContent(this.props)}/>
      </div>
    );
  }
}


export default withRouter(PhotosItem);