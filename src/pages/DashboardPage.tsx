import * as React from 'react';
import {Link} from 'react-router-dom';
import AppLogoBar  from '../components/AppLogoBar';
import {AppPageInterface} from '../components/AppTheme';

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
    //@todo move all of my styles to a folder and do imports and/or use combines (eg styles={[style1,style2]})
    const buttonRowSpacing = {
      margin: '16px auto 16px auto',
      padding: '16px auto 16px auto',
      width : '80%',
      maxWidth: 600
    }
    const smallImageLeft = {
      width : '48%',
      maxWidth : 244,
      float : 'left',
      marginBottom: '20px'
    }
    const smallImageRight = {
      width : '48%',
      maxWidth : 244,
      float : 'right',
      marginBottom: '20px'
    }
    const askChiefWrapper = {
      width:'100%'
    }
    const chiefImgWrapper = {
      width : '100%',
      paddingRight : '5px',
      backgroundColor: '#1E1C1D',
      marginTop: 10
    }
    const buttonsWrapper = {
      backgroundColor: '#1b4583',
      width : '100%',
      float: 'left',
      padding : '35px 5px 0',
      minHeight: this.setMaxHeight()
    }
    const versionStyle = {
      textAlign : 'center',
      width : '100%',
      color : '#fff',
      padding : '5px'
    }
    const fbIconSize = (this.props.appPage.screen.height > 700 ) ? 90 : 78;
    return (
      <div style={{position:'relative'}}>
       <AppLogoBar hasPaddingTop={false}/>
        <div style={buttonsWrapper}>
          <div style={buttonRowSpacing} className="clearfix">
            <Link to="/our-story"><img src={ourStoryImage} style={smallImageLeft}/></Link>
            <Link to="/specialties"><img src={specialtiesImage} style={smallImageRight}/></Link>
          </div>
          <div style={buttonRowSpacing} className="clearfix">
            <Link to="/detailing"><img src={detailingImage} style={smallImageLeft}/></Link>
            <Link to="/news"><img src={newsImage} style={smallImageRight}/></Link>
          </div>
          <div style={buttonRowSpacing} className="clearfix">
            <Link to="/around-the-globe"><img src={aglobeImage} style={smallImageLeft}/></Link>
            <Link to="/resources"><img src={resourcesImage} style={smallImageRight}/></Link>
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
        <div style={versionStyle}>version 1.0</div>
      </div>
    )
  }
}