import * as React from 'react';
import { withRouter } from 'react-router-dom';
import {ResourcesInterface} from '../res/data/resources';
import {ListItem} from 'material-ui/List';

export interface Props {
  resources: ResourcesInterface;
}

export interface State {

}

class ResourcesItem extends React.Component<Props, State>{

  constructor(props){
    super(props);
  }
  resourceLinkClick(url,isExternal,props){
    if(isExternal){
      window.open(url,'_blank');
    }else{
      props.history.push(url);
    }
  }
  render(){
    const {resources} = this.props;
    const listStyle = {
      margin: 10,
      border: '1px groove #FBF8F8',
      padding : "10px 5px"
    }
    return (
      <ListItem primaryText={resources.title} style={listStyle} onTouchTap={()=>this.resourceLinkClick(resources.link,resources.isExternal,this.props)}/>
    );
  }
}

export default withRouter(ResourcesItem);