import * as React from 'react';
import { withRouter } from 'react-router-dom';
import {PhotosInterface} from '../res/data/photos';

export interface Props {
  photos: PhotosInterface[];
  history;
}

export interface State {}

class PhotosContentComponent extends React.Component<Props, State>{
  private path : any;
  constructor(props){
    super(props);

  }
  componentWillMount(){
    this.path = this.props['location'].pathname.split('/');
  }
  learnMoreButtonClick(url){
    window.open(url,'_blank');
  }
  render(){
    console.log(this.props);
    const {photos} = this.props;
    const photosId = parseInt(this.path[2]);
    let photosContent = photos.filter(photosItem => {
      return photosItem.id === photosId;
    })[0];
    return ( 
      <div>
        <img style={{width:'100%', marginBottom:'-4px', paddingTop:50}} src={require('../res/images/around-the-world/' + photosContent.src)} />
        <div style={{backgroundColor:"#fff",width:'100%',padding:'5px 0 10px 5px',minHeight:385, position:'relative'}}>
          {photosContent.content}
        </div>
      </div>
    );
  }
}
export default withRouter(PhotosContentComponent);