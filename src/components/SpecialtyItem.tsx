import * as React from 'react';
import {SpecialtyInterface} from '../res/data/specialties';
import { withRouter } from 'react-router-dom';
import {ListItem} from 'material-ui/List';

export interface Props {
  specialty: SpecialtyInterface;
}

export interface State {

}

class SpecialtyItem extends React.Component<Props, State>{

  constructor(props){
    super(props);
  }

  openDetail( props ){
    props.history.push('/specialties/'+props.specialty.id);
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

export default withRouter(SpecialtyItem);