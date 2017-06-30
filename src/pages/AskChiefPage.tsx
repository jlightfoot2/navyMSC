import * as React from 'react';
import AppTitleBar from '../components/AppTitleBar';
import AppLogoBar  from '../components/AppLogoBar';

export interface Props {}
export interface State {}

export default class AskChiefPage extends React.Component<Props, State>{
  render(){
    return (
      <div>
        <AppTitleBar title="Ask the Corps Chief" />
        <AppLogoBar />
        <div style={{backgroundColor:"#fff",padding:'5px'}}>
          <h2 style={{padding:'10px 5px 5px',marginTop:0}}><u>The Medical Service Corps</u></h2>
          <p>The Medical Service Corps (MSC) is the most highly diversified Corps within Navy medicine. An integral part of the Navy, 
            the Medical Service Corps is comprised of a multidisciplinary team of commissioned Naval Officers in clinical,
            scientific, and administrative health care fields.</p>
        </div>
      </div>
    )
  }
}