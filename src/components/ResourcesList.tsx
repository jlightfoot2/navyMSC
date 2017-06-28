import * as React from 'react';
import {ResourcesInterface} from '../res/data/resources';
import ResourcesItem from './ResourcesItem';
import {List} from 'material-ui/List';

export interface Props {
  resources: ResourcesInterface[];
}

export interface State {

}

export default class ResourcessList extends React.Component<Props, State>{

  constructor(props){
    super(props);

  }
  
  render(){
    const {resources} = this.props;
    return (
      <div style={{backgroundColor:"#fff"}}>
        <List>
          {resources.map(resource => {
            return <ResourcesItem key={resource.id} resources={resource} />
          })}
        </List>
      </div>
    );
  }
}