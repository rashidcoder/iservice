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
class FrmNewWorkOrder extends Component {
  render() {
    return (
      <Form unstackable>
        <ILabel text={"Create New Work Order"} />
        <Form.Group>
          <ILabel text={"Truck Information"} />
        </Form.Group>
        <Form.Group>
          <ISelect text={"Truck Types"} placeholder={"Truck Types"} />
        </Form.Group>
        <Form.Group widths={2}>
          <IInput label={"Truck Brand"} />
          <IInput label={"Model"} />
          <IInput label={"Unite ID"} />
        </Form.Group>
        <Form.Group widths={2}>
          <IInput label={"License"} />
          <IInput label={"V.I.N"} />
          <IInput label={"Engine Number"} />
        </Form.Group>
        <Form.Group widths={2}>
          <IInput label={"Manufacture Year"} />
          <IInput label={"Engine Capacity"} />
          <IInput label={"Truck Color"} />
        </Form.Group>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <ILabel text={"Last Read"} />
              <Form.Group inline>
          <IInput label={"Hours"} />
        </Form.Group>
        <Form.Group inline>
          <IInput label={"Odometer"} />
        </Form.Group>
            </Grid.Column>
            <Grid.Column width={8}>
              <ILabel text={"Current"} />
              <Form.Group inline>
          <IInput label={"Hours"} />
        </Form.Group>
        <Form.Group inline>
          <IInput label={"Odometer"} />
        </Form.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Form.Group>
        <ILabel text={"Work Information"} />
        </Form.Group>
        <Form.Group widths={2}>
          <ISelect text={"Priority"} placeholder={"Priority"} />
          <IInput label={"Plan service Data"} />
          <IInput label={"Budget"} />
        </Form.Group>
        <ITable/>
        <Form.Group>
          <ILabel text={"Client Information"} />
        </Form.Group>
        <Form.Group width={2}>
          <IInput label={"Name"} />
          <IInput label={"Company"} />
          <ISelect text={"Customer Type"} placeholder={"Customer Type"} />
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
          <ILabel text={"Additional Information"} />
        </Form.Group>
        <Form.Group>
          <ILabel text={"Comments"} />
        </Form.Group>
        <ITextArea label={"Comments"} />

      </Form>
    );
  }
}

export default FrmNewWorkOrder;
