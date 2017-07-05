import * as React from 'react';
import { withRouter } from 'react-router-dom';
import {PhotosInterface} from '../res/data/photos';
import {ListItem} from 'material-ui/List';

export interface Props {
  photos: PhotosInterface;
}

export interface State {

}

class PhotosItem extends React.Component<Props, State>{
  public state = {
    open : false
  };
  constructor(props){
    super(props);
  }
  itemImage(photo){
    return <img style={{width:'100%'}} src={require('../res/images/around-the-world/' + photo.src)} />;
  }
  linkToPhotoContent(props){
    props.history.push('/around-the-globe-content/'+props.photos.id);
  }
  render(){
    const {photos} = this.props;
    const listStyle = {
      margin: 10,
      padding : "10px 5px"
    }
    return (
      <div style={listStyle}>
        <ListItem primaryText={this.itemImage(photos)} onTouchTap={()=>this.linkToPhotoContent(this.props)}/>
      </div>
    );
  }
}


export default withRouter(PhotosItem);