import * as React from 'react';
import {DetailingInterface} from '../res/data/detailing';
import DetailingItem from './DetailingItem';
import {List} from 'material-ui/List';

export interface Props {
  detailing: DetailingInterface[];
}

export interface State {

}

export default class DetailingComponent extends React.Component<Props, State>{

  constructor(props){
    super(props);

  }
  
  render(){
    const {detailing} = this.props;
    return ( 
      <div style={{backgroundColor:"#fff", paddingTop:50}}>
        <List>
          {detailing.map(detail => {
            return <DetailingItem key={detail.id} detailing={detail} />
          })}
        </List>
      </div>
    );
  }
}