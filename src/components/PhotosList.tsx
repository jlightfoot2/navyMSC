import * as React from 'react';
import {PhotosInterface} from '../res/data/photos';
import PhotosItem from './PhotosItem';
import {List} from 'material-ui/List';

export interface Props {
  photos: PhotosInterface[];
}

export interface State {

}

export default class PhotosList extends React.Component<Props, State>{

  constructor(props){
    super(props);

  }
  
  render(){
    const {photos} = this.props;
    return ( 
      <div style={{backgroundColor:"#fff", paddingTop:50}}>
        <List>
          {photos.map(photo => {
            return <PhotosItem key={photo.id} photos={photo} />
          })}
        </List>
      </div>
    );
  }
}