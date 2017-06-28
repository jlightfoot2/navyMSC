import * as React from 'react';
import {PhotosInterface} from '../res/data/photos';
import {ListItem} from 'material-ui/List';

export interface Props {
  photos: PhotosInterface;
}

export interface State {

}

export default class PhotosItem extends React.Component<Props, State>{

  constructor(props){
    super(props);
  }
  
  render(){
    const {photos} = this.props;
    const listStyle = {
      margin: 10,
      border: '1px groove #FBF8F8',
      padding : "10px 5px"
    }
    return (
      <ListItem primaryText={photos.title} style={listStyle} />
    );
  }
}

