import * as React from 'react';
import {DetailingInterface} from '../res/data/detailing';
import {ListItem} from 'material-ui/List';

export interface Props {
  detailing: DetailingInterface;
}

export interface State {

}

export default class DetailingItem extends React.Component<Props, State>{

  constructor(props){
    super(props);
  }
  
  render(){
    const {detailing} = this.props;
    const listStyle = {
      margin: 10,
      border: '1px groove #FBF8F8'
    }
    return (
      <ListItem primaryText={detailing.name} secondaryText={detailing.dept} style={listStyle} />
    );
  }
}

