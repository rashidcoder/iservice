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
class FrmCustomerPagrinioLangoDizainas extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      table : {
        title: ["Company", "Telephone", "City", "Prov/State", "Name","Address","Priority"],
        data: [
          ["Grain Translanta", "267-257-5445", "lemont", "IL", "Volodia"," Baisogaios 21","Heigh"],
          ["Grain Translanta", "267-257-5445", "lemont", "IL", "Volodia"," Baisogaios 21","Heigh"],
          ["", "", "", "", " ", " ", " "],
          ["", "", "", "", " ", " ", " "],
          ["", "", "", "", " ", " ", " "],
          ["", "", "", "", " ", " ", " "],
          ["", "", "", "", " ", " ", " "],
          ["", "", "", "", " ", " ", " "],
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

export default FrmCustomerPagrinioLangoDizainas;
