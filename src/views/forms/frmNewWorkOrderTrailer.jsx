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
class FrmNewWorkOrderTrailer extends Component {
  render() {
    return (
      <Form >
        <ILabel text={"Create New Work Order"} />
        <Form.Group widths={2}>
          <ISelect text={"Select Trailer Types"} placeholder={"Trailer"}/>
        </Form.Group>
        <Form.Group>
          <ILabel text={"Trailer Information"} />
        </Form.Group>
        <Form.Group>
          <ISelect text={"Select Truck Type"} placeholder={"Trailer Types"} width={4}/>
        </Form.Group>
        <Form.Group widths={4}>
          <IInput label={"Trailer Brand"} />
          <IInput label={"Model"} />
          <IInput label={"Unite ID"} />
        </Form.Group>
        <Form.Group widths={4}>
          <IInput label={"License"} />
          <IInput label={"V.I.N"}  />
        </Form.Group>
        <Form.Group widths={4}>
          <IInput label={"Manufacture Year"} />
          <IInput label={"Trailer Color"} />
        </Form.Group>
        <Grid>
          <Grid.Row>
            <Grid.Column width={6}>
              <ILabel text={"Last Read"} />
              <Form.Group inline>
          <IInput label={"Odometer"} />
        </Form.Group>
        <Form.Group inline>
          <IInput label={"Hours"} />
        </Form.Group>
            </Grid.Column>
            <Grid.Column width={6}>
              <ILabel text={"Current"} />
              <Form.Group inline>
          <IInput label={"Odometer"} />
        </Form.Group>
        <Form.Group inline>
          <IInput label={"Hours"} />
        </Form.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Form.Group>
        <ILabel text={"Work Information"} />
        </Form.Group>
        <Form.Group widths={4}>
          <ISelect text={"Priority"} placeholder={"Priority"} widths={4}/>
          <IInput label={"Plan service Data"} widths={4}/>
          <IInput label={"Budget"} widths={4}/>
        </Form.Group>
        <ITable header1={"Task"}
        header2={"Empolyee"}
        header3={"Category"}
        header4={"Part"}
        header5={"Part Price"}
        />
        <Form.Group>
          <ILabel text={"Client Information"} />
        </Form.Group>
        <Form.Group width={6}>
          <IInput label={"Name"}width={4} />
          <IInput label={"Company"} width={4}/>
          <ISelect text={"Customer Type"} placeholder={"Customer Type"} width={4}/>
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

export default FrmNewWorkOrderTrailer;
