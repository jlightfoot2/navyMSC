import * as React from 'react';
import { withRouter } from 'react-router-dom';
import {SpecialtyInterface} from '../res/data/specialties';

export interface Props {
  specialties: SpecialtyInterface[];
}

export interface State {}

class SpecialtiesComponent extends React.Component<Props, State>{
  private path : any;
  constructor(props){
    super(props);

  }
  componentWillMount(){
    this.path = this.props['location'].pathname.split('/');
  }
  createContent(content){
    return {__html: content};
  }
  render(){
    const {specialties} = this.props;
    const specId = parseInt(this.path[2]);
    let specialtyContent = specialties.filter(specialty => {
      return specialty.id === specId;
    })[0];
    return ( 
      <div>
        <div style={{width:'90%', margin:'0 auto',color:'#fff', paddingTop:50}}>
          <h2 style={{marginTop:0,paddingTop:10}}>{specialtyContent.title}</h2>
        </div>
        <div style={{backgroundColor:"#fff",width:'100%',padding:'10px',minHeight:540}} 
          dangerouslySetInnerHTML={this.createContent(specialtyContent.content)}>
        </div>
      </div>
    );
  }
}
export default withRouter(SpecialtiesComponent);