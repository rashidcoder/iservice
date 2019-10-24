import React, { Component } from "react";
import logo from "./logo.svg";
import "../../styles/App.css";

import ISidebar from "../navigation/isidebar";
import IInput, { iInput } from "../basic/input";
import IButton from "../basic/ibutton";
import ILabel from "../basic/ilabel";
import ISelect from "../basic/iselect";
import ITextArea from "../basic/itextarea";
import IAdd from "../basic/iadd";
import ITable from "../table/itable";
import ITabs from "../tabs/itabs";
import FrmNewWorkOrder from "../forms/frmNewWorkOrderTruck";
import { Grid } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/**  <div className="App-header"> */}
        {/*<ITable/>
         
          <IInput/>
          <IButton/>
          <ILabel/>
          <ISelect/>
          <ITextArea/>
          <IAdd/>
          
          <ISidebar/>
          <ITabs/>
          */}
        <Grid>
          <Grid.Column width={3}>
            <ISidebar />
          </Grid.Column>
          <Grid.Column width={13}>
            <ITabs />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
// yarn add semantic-ui-react
export default App;
