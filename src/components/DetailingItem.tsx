import * as React from 'react';
import {DetailingInterface} from '../res/data/detailing';
import { withRouter } from 'react-router-dom';
import {ListItem} from 'material-ui/List';

export interface Props {
  detailing: DetailingInterface;
}

export interface State {

}

class DetailingItem extends React.Component<Props, State>{

  constructor(props){
    super(props);
  }

  openDetail( props ){
    props.history.push('/detailing-content/'+props.detailing.id);
  }
  
  render(){
    const {detailing} = this.props;
    const listStyle = {
      margin: 10,
      border: '1px groove #FBF8F8'
    }
    return (
      <ListItem 
        primaryText={detailing.name} 
        secondaryText={detailing.dept} 
        style={listStyle} 
        onClick={() => this.openDetail(this.props)}
      />
    );
  }
}

export default withRouter(DetailingItem);
