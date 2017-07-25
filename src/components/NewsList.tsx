/**
 * @file NewsList.tsx
 * 
 
 * Name: NewsList.tsx
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
import {NewsInterface} from '../res/data/news';
import NewsItem from './NewsItem';
import {List} from 'material-ui/List';

export interface Props {
  news: NewsInterface[];
}

export interface State {}

export default class NewsList extends React.Component<Props, State>{

  constructor(props){
    super(props);

  }
  error(){
    return (
      <div style={{padding:30, minHeight:300}}>
        <p>Something went wrong!  An internet connection is required to access the news feed. Please check your connection and try again.</p>
      </div>
    )
  }
  render(){
    const {news} = this.props;
    return ( 
      <div style={{backgroundColor:"#fff", paddingTop:50}}>
        <List>
          { (news.length < 1) ? this.error() : '' }
          {news.map(newsItem => {
            return <NewsItem key={newsItem.id} news={newsItem} />
          })}
        </List>
      </div>
    );
  }
}