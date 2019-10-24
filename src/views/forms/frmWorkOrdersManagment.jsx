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
  render() {
    return (
      <Form>
        <ILabel text={"Create New Work Order"} />
        <Form.Group widths={2}>
        <IInput label={"Search"} />
        </Form.Group>
        <ITable header1={"Date"}
        header2={"Status"}
        header3={"Customer"}
        header4={"Required truck or trailer"}
        header5={"Parts"}
        />
      </Form>
    );
  }
}
export default FrmWorkOrdersManagment;