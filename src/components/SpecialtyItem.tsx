import * as React from 'react';
import {SpecialtyInterface} from '../res/data/specialties';
//import {listItemImage} from './commonStyles';
import {ListItem} from 'material-ui/List';

export interface Props {
  specialty: SpecialtyInterface;
}

export interface State {

}

export default class SpecialtyItem extends React.Component<Props, State>{

  constructor(props){
    super(props);
  }
  
  render(){
    const {specialty} = this.props;

    return <ListItem primaryText={specialty.title} />
  }
}

