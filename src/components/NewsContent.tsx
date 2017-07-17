import * as React from 'react';
import { withRouter } from 'react-router-dom';
import {NewsInterface} from '../res/data/news';
import RaisedButton from 'material-ui/RaisedButton';

export interface Props {
  news: NewsInterface[];
  history;
}

export interface State {}

class NewsContentComponent extends React.Component<Props, State>{
  private path : any;
  constructor(props){
    super(props);

  }
  componentWillMount(){
    this.path = this.props['location'].pathname.split('/');
  }
  learnMoreButtonClick(url){
    window.open(url,'_blank');
  }
  createContent(content){
    return {__html: content};
  }
  render(){
    const {news} = this.props;
    const newsId = parseInt(this.path[2]);
    let newsContent = news.filter(newsItem => {
      return newsItem.id === newsId;
    })[0];
    return ( 
      <div>
        <div style={{width:'100%', margin:'0 auto',color:'#000', backgroundColor:'#F6F0F0',padding:5}}>
          <h2 style={{margin:'0px',padding:'10px', backgroundColor:'#F6F0F0'}}>{newsContent.title}</h2>
        </div>
        <div style={{backgroundColor:"#fff",width:'100%',padding:'5px 0 10px 5px',minHeight:360, position:'relative'}}>
          <div dangerouslySetInnerHTML={this.createContent(newsContent.content)}>
          </div>
          <RaisedButton  label="Learn More"
            backgroundColor='#1b4583' 
            labelColor='#fff' 
            style={{minWidth:'60%', maxWidth:'80%', display:'block', position:'absolute',left:'20%',bottom:'10px',cursor:'pointer'}}
            onTouchTap={()=>this.learnMoreButtonClick(newsContent.link)} />  
        </div>
      </div>
    );
  }
}
export default withRouter(NewsContentComponent);