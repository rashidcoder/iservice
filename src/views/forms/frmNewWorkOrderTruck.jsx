import { Grid } from "semantic-ui-react";
import React, { Component } from "react";
import ILabel from "../basic/ilabel";
import ITextArea from "../basic/itextarea";
import { Form } from "semantic-ui-react";
import ISelect from "../basic/iselect";
import IInput from "../basic/input";
import ITable from "../table/itable";
import IButton from "../basic/ibutton";
class FrmNewWorkOrderTruck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      table: {
        title: [
          "Task",
          "Employee",
          "Category",
          "Part",
          "Part Price",
          " Cost/Hours"
        ],
        data: [
          ["Suspension", "Valdas", "General", "Suspension", "50$", "50$"],
          ["Suspension", "Valdas", "Restuation", "Ball joint", "50$", "50$"]
        ]
      }
    };
  }

  render() {
    return (
      <Form>
        <ILabel text={"Create New Work Order"} class={"ui header"} />
        <Form.Group widths={2}>
          <ISelect text={"Select Truck Types"} placeholder={"Truck"} />
        </Form.Group>
        <Form.Group>
          <ILabel text={"Truck Information"} class={"ui header"} />
        </Form.Group>
        <Form.Group>
          <ISelect text={"Select Truck Types"} placeholder={"Truck Types"} />
        </Form.Group>
        <Form.Group widths={4}>
          <IInput label={"Truck Brand"} />
          <IInput label={"Model"} />
          <IInput label={"Unite ID"} />
        </Form.Group>
        <Form.Group widths={4}>
          <IInput label={"License"} />
          <IInput label={"V.I.N"} />
          <IInput label={"Engine Number"} />
        </Form.Group>
        <Form.Group widths={4}>
          <IInput label={"Manufacture Year"} />
          <IInput label={"Engine Capacity"} />
          <IInput label={"Truck Color"} />
        </Form.Group>
        <Grid>
          <Grid.Row>
            <Grid.Column width={6}>
              <ILabel text={"Current"} class={"ui header"} />
              <Form.Group inline>
                <IInput label={"Odometer"} />
              </Form.Group>
              <Form.Group inline>
                <IInput label={"Hours"} />
              </Form.Group>
            </Grid.Column>
            <Grid.Column width={6}>
              <ILabel text={"Last Read"} class={"ui header"} />
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
          <ILabel text={"Work Information"} class={"ui header"} />
        </Form.Group>
        <Form.Group widths={4}>
          <ISelect text={"Priority"} placeholder={"Priority"} />
          <IInput label={"Plan service Data"} />
          <IInput label={"Budget"} />
        </Form.Group>

        <IButton text="Add jobs" id={"btnAddJobs"} align={"right"} />

        <ITable data={this.state.table} />
        <Form.Group>
          <ILabel text={"Client Information"} class={"ui header"} />
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
        <IButton
          text={"Check for discount"}
          id={"btnCheckForDiscount"}
          align={"right"}
        />

        <Form.Group>
          <ILabel text={"Additional Information"} class={"ui header"} />
        </Form.Group>
        <Form.Group>
          <ILabel text={"Comments"} class={"ui header"} />
        </Form.Group>
        <Form.Group>
          <ITextArea label={"Comments"} />
        </Form.Group>
        <IButton
          text="Check work order"
          id={"btnCheckWorkOrder"}
          align={"right"}
        />
      </Form>
    );
  }
}

export default FrmNewWorkOrderTruck;
