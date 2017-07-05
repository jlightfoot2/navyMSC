import * as React from 'react';
import AppTitleBar from '../components/AppTitleBar';
import AppLogoBar  from '../components/AppLogoBar';
import RaisedButton from 'material-ui/RaisedButton';

export interface Props {}
export interface State {}

export default class AskChiefPage extends React.Component<Props, State>{
 
  render(){
    return (
      <div>
        <AppTitleBar title="Ask the Corps Chief" />
        <AppLogoBar hasPaddingTop={true}/>
        <div style={{backgroundColor:"#fff",padding:'15px', position:'relative', minHeight:'350px'}}>
          <p>For questions or concerns, please feel free to send an email to the Corps Chief’s Office by tapping the button below.</p>
          <RaisedButton  label="Email Corps Chief"
            backgroundColor='#1b4583' 
            labelColor='#fff' 
            style={{minWidth:'60%', maxWidth:'80%', display:'block', position:'absolute',left:'20%',bottom:'20px',cursor:'pointer'}}
            href="mailto:usn.ncr.bumedfchva.list.msc-corps-chiefs-office@mail.mil" />  
        </div>
      </div>
    )
  }
}