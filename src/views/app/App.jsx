import React, { Component } from 'react';
import logo from './logo.svg';
import '../../styles/App.css';
 
import ISidebar from '../navigation/isidebar';
import IInput, { iInput } from '../basic/input';
import IButton from '../basic/ibutton';
import ILabel from '../basic/ilabel';
import ISelect from '../basic/iselect';
import ITextArea from '../basic/itextarea';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

          <ISidebar/>
          <IInput/>
          <IButton/>
          <ILabel/>
          <ISelect/>
          <ITextArea/>
        </div>
      </div>
    );
  }

}
// yarn add semantic-ui-react
export default App;
