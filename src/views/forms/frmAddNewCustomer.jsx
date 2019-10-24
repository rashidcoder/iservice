import { Grid, FormGroup } from "semantic-ui-react";
import React, { Component } from "react";
import ISidebar from "../navigation/isidebar";
import ITabs from "../tabs/itabs";
import ILabel from "../basic/ilabel";
import ITextArea from "../basic/itextarea";
import {
  Button,
  Form,
  Checkbox,
  Input,
  Radio,
  Select,
  TextArea
} from "semantic-ui-react";
import ISelect from "../basic/iselect";
import IInput from "../basic/input";
import ITable from "../table/itable";
import IAdd from "../basic/iadd";
class FrmAddNewCustomer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       table : {
        title: ["Name", "Telephone", "Email", "Fax", "Telephone(alt)"],
        data: [
          ["", "", "", "", " "],
          ["", "", "", "", " "],
          ["", "", "", "", " "],
          ["", "", "", "", " "],
          ["", "", "", "", " "],

        ] 
    }
    }
  }
  render() {
    return (
      <Form>
        <ILabel text={"Add New Customer"} />
        <Form.Group>
          <ILabel text={"Customer Information"} />
        </Form.Group>
        <Form.Group width={6}>
          <IInput label={"Name"} width={4} />
          <IInput label={"Company"} width={4} />
          <ISelect
            text={"Customer Type"}
            placeholder={"Customer Type"}
            width={4}
          />
        </Form.Group>
        <Form.Group>
          <IInput label={"City"} width={4} />
          <IInput label={"Prov/State"} width={2} />
          <IInput label={"Address"} width={6} />
          <IInput label={"Zip/Postal code"} width={2} />
          <IInput label={"Country"} width={2} />
        </Form.Group>
        <Form.Group>
          <IInput label={"Email"} width={4} />
          <IInput label={"Telephone"} width={4} />
          <IInput label={"Fax"} width={4} />
        </Form.Group>

        <Form.Group>
          <IInput label={"Toll Free"} width={4} />
          <IInput label={"Telephone"} width={4} />
          <IInput label={"Extension"} width={2} />
        </Form.Group>
        <Form.Group>
          <ILabel text={"Billing"} />
        </Form.Group>
        <Form.Group>
          <IInput label={"Credit Limit"} width={4} />
        </Form.Group>
        <Form.Group>
          <IInput label={"Labor Price"} />
          <IAdd text={"Add more prices"} />
          <IInput label={"Parts Discount"} />
          <IAdd text={"Add more discount"} />
          <IInput label={"Labor Discount"} />
          <IAdd text={"Add more discount"} />
        </Form.Group>
        <Form.Group>
          <ILabel text={"Add more contacts"} />
        </Form.Group>
        <Form.Group>
          <IInput label={"Name"} width={4}/>
        </Form.Group>
        <Form.Group>
          <IInput label={"Email"} width={4} />
          <IInput label={"Telephone"} width={4} />
          <IInput label={"Fax"} width={4} />
        </Form.Group>

        <Form.Group>
          <IInput label={"Toll Free"} width={4} />
          <IInput label={"Telephone"} width={4} />
          <IInput label={"Extension"} width={2} />
          <IAdd text={"Add more Contacts"} />
        </Form.Group>
        <ITable
        data={this.state.table}
        />
        <Form.Group>
          <ILabel text={"Comments"} />
        </Form.Group>
        <ITextArea label={"Comments"} />
      </Form>
    );
  }
}

export default FrmAddNewCustomer;
