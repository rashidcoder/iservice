import { Grid } from "semantic-ui-react";
import React, { Component } from "react";
import ISidebar from "../navigation/isidebar";
import ITabs from "../tabs/itabs";
import ILabel from "../basic/ilabel";
import ITextArea from "../basic/itextarea";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea
} from "semantic-ui-react";
import ISelect from "../basic/iselect";
import IInput from "../basic/input";
import ITable from "../table/itable";
class FrmWorkOrdersManagment extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      table : {
        title: ["Data", "Status", "Customer", "Required Truck or Trailer", "Parts"," Labor","Total"],
        data: [
          ["04/03/1997", "wating", "Trango", "Kenworth T-60", "225$","14$","392$"],
          ["04/03/1997", "wating", "Trango", "Kenworth T-60", "225$","14$","392$"],
        ] 
    } 
    }
  }
  
  render() {
    return (
      <Form>
        <ILabel text={"Create New Work Order"} />
        <Form.Group widths={2}>
        <IInput label={"Search"} />
        </Form.Group>
        <ITable data={this.state.table}
        />
      </Form>
    );
  }
}
export default FrmWorkOrdersManagment;