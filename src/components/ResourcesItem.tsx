import * as React from 'react';
import {ResourcesInterface} from '../res/data/resources';
import {ListItem} from 'material-ui/List';

export interface Props {
  resources: ResourcesInterface;
}

export interface State {

}

export default class ResourcesItem extends React.Component<Props, State>{

  constructor(props){
    super(props);
  }
  
  render(){
    const {resources} = this.props;
    const listStyle = {
      margin: 10,
      border: '1px groove #FBF8F8',
      padding : "10px 5px"
    }
    return (
      <ListItem primaryText={resources.title} style={listStyle} />
    );
  }
}

