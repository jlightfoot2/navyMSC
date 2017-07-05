import * as React from 'react';
import {Link} from 'react-router-dom';
import AppLogoBar  from '../components/AppLogoBar';

const ourStoryImage = require("../res/images/ui/button-our-story.png");
const specialtiesImage = require("../res/images/ui/button-specialties.png");
const detailingImage = require("../res/images/ui/button-detailing.png");
const newsImage = require("../res/images/ui/button-news.png");
const aglobeImage = require("../res/images/ui/button-around-globe.png");
const resourcesImage = require("../res/images/ui/button-resources.png");
const chiefImg = require("../res/images/ui/button-ask-chief.png");

export interface Props {
}
export interface State {}

export default class DashboardPage extends React.Component<Props, State>{
  render(){
    const buttonRowSpacing = {
      margin: '40px auto 40px auto',
      padding: '40px auto 40px auto',
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
      backgroundColor: '#1E1C1D'
    }
    const buttonsWrapper = {
      backgroundColor: '#1b4583',
      width : '100%',
      float: 'left',
      padding : '5px'
    }
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
        </div>
        <div style={askChiefWrapper}>
          <div style={chiefImgWrapper}>
            <Link to="/ask-the-chief"><img src={chiefImg} style={{width:'100%'}} /></Link>
          </div>
        </div>
      </div>
    )
  }
}