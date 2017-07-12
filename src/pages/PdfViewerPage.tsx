import * as React from 'react';
import { withRouter } from 'react-router-dom';
import {AppPageInterface} from '../components/AppTheme';
import AppTitleBar from '../components/AppTitleBar';
import ReactPDF from 'react-pdf';
import IconButton from 'material-ui/IconButton';
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
    this.file = require('../' + path[2] );
    
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
    return ( 
      <div>
        <AppTitleBar title={this.title} />
        <div style={PDFWrapper}>
        <div>
          <IconButton onTouchTap={()=>this.decrementPage()}>
            <NavigationChevronLeft/>
          </IconButton>
          <IconButton onTouchTap={()=>this.incrementPage()}>
            <NavigationChevronRight/>
          </IconButton>
        </div>
          <ReactPDF 
            file={this.file} 
            width={this.props.appPage.screen.width} 
            pageIndex={this.state.pageIndex} 
            onDocumentLoad={(t)=>{this.onDocumentLoad(t)}}
            onPageLoad={(p)=>{this.onPageLoad(p)}}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(PdfViewerPage);