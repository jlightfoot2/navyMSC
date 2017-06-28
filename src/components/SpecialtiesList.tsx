import * as React from 'react';
import {SpecialtyInterface} from '../res/data/specialties';
import SpecialtyItem from './SpecialtyItem';
import {List} from 'material-ui/List';

export interface Props {
  specialties: SpecialtyInterface[];
}

export interface State {

}

export default class Specialties extends React.Component<Props, State>{

  constructor(props){
    super(props);

  }
  
  render(){
    const {specialties} = this.props;
    return ( 
      <div>
        <List>
          {specialties.map(specialty => {
            return <SpecialtyItem key={specialty.id} specialty={specialty} />
          })}
        </List>
      </div>
    );
  }
}