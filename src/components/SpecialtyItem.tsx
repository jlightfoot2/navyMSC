import * as React from 'react';
import {SpecialtyInterface} from '../res/data/specialties';
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
    const listStyle = {
      margin: 10,
      border: '1px groove #FBF8F8',
      padding : "10px 5px"
    }
    return (
      <ListItem primaryText={specialty.title} style={listStyle} />
    );
  }
}

