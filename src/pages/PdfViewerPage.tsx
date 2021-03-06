/**
 * @file PdfViewerPage.tsx
 * 
 
 * Name: PdfViewerPage.tsx
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
import {AppPageInterface} from '../components/AppTheme';
import AppTitleBar from '../components/AppTitleBar';
import ReactPDF from 'react-pdf';
import {NavigationChevronLeft} from 'material-ui/svg-icons';
import {NavigationChevronRight} from 'material-ui/svg-icons';

export interface Props {
  appPage: AppPageInterface;
  setPageTitle(title: string): void;
}
export interface State {
  totalPages : number;
  pageIndex : number;
  pageNumber : number;  
}

class PdfViewerPage extends React.Component<Props, State>{
  private file: any;
  private title: any;
  
  onDocumentLoad({ total }) {
    this.setState({totalPages:total});
  }
  onPageLoad({ pageIndex, pageNumber }) {
    this.setState({pageIndex,pageNumber});
  }
  componentWillMount(){
    let path = this.props['location'].pathname.split('/');
    this.title = path[2].replace('.pdf','').replace(/_/gi,' ');
    this.file = require('../res/files/' + path[2] );
    
    this.setState({
      totalPages : 0,
      pageIndex : 0,
      pageNumber : 0
    });
  }
  incrementPage(){
    if(this.state.pageIndex < this.state.totalPages ){
      this.setState(prevState => ({
        pageIndex: prevState.pageIndex + 1,
      }));
    }
  }
  decrementPage(){
    if(this.state.pageIndex > 0){
      // go to previous page
      this.setState(prevState => ({
        pageIndex: prevState.pageIndex - 1,
      }));
    }
  }
  render(){
    const PDFWrapper = {
      width:'100%', 
      paddingTop:60, 
      backgroundColor:'#fff', 
      minHeight: this.props.appPage.screen.height - 60
    }
    const svgNavChevronStyles = {
      height : 90,
      width : 90,
      opacity : 0.6
    }
    return ( 
      <div>
        <AppTitleBar title={this.title} />
        <div style={PDFWrapper}>
          <div>
            <div style={{position:'absolute', top:'40%', left:'-25px'}}>
              <NavigationChevronLeft style={svgNavChevronStyles} onClick={()=>this.decrementPage()}/>
            </div>
            <div style={{position:'absolute', top:'40%', right:'-25px'}}>
              <NavigationChevronRight style={svgNavChevronStyles} onClick={()=>this.incrementPage()}/>
            </div>
          </div>
          <div style={{width:this.props.appPage.screen.width-25,margin:'0 auto'}}>
            <ReactPDF style={{marginLeft:25}}
              file={this.file} 
              width={this.props.appPage.screen.width-25} 
              pageIndex={this.state.pageIndex} 
              onDocumentLoad={(t)=>{this.onDocumentLoad(t)}}
              onPageLoad={(p)=>{this.onPageLoad(p)}}
              scale={0.5}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PdfViewerPage);