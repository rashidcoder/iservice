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
          <ISelect name={"selectTruckTypes"} id={"selectTruckTypes"} text={"Select Truck Types"} placeholder={"Truck"} />
        </Form.Group>
        <Form.Group>
          <ILabel text={"Truck Information"} class={"ui header"} />
        </Form.Group>
        <Form.Group>
          <ISelect  name={"selectTruckTypes"} id={"selectTruckTypes"}  text={"Select Truck Types"} placeholder={"Truck Types"} />
        </Form.Group>
        <Form.Group widths={4}>
          <IInput name={"txtTruckBrand"} id={"txtTruckBrand"} label={"Truck Brand"} />
          <IInput name={"txtModel "} id={"txtmodel"} label={"Model"} />
          <IInput name={"txtUniteId "} id={"txtUniteId"} label={"Unite ID"} />
        </Form.Group>
        <Form.Group widths={4}>
          <IInput name={"txtLicense"} id={"txtLicense"} label={"License"} />
          <IInput name={"txtVIN"} id={"txtVIN"} label={"V.I.N"} />
          <IInput name={"txtEngineNumber"} id={"txtEngineNumber"} label={"Engine Number"} />
        </Form.Group>
        <Form.Group widths={4}>
          <IInput name={"txtManufactureYear"} id={"txtManufactureYear"} label={"Manufacture Year"} />
          <IInput name={"txtEngineCapacity"} id={"txtEngineCapacity"} label={"Engine Capacity"} />
          <IInput name={"txtTruckColor"} id={"txtTruckColor"} label={"Truck Color"} />
        </Form.Group>
        <Grid>
          <Grid.Row>
            <Grid.Column width={6}>
              <ILabel text={"Current"} class={"ui header"} />
              <Form.Group inline>
                <IInput name={"txtCurrentOrdmeter"} id={"txtCurrentOrdmeter"} label={"Odometer"} />
              </Form.Group>
              <Form.Group inline>
                <IInput name={"txtCurrentHours"} id={"txtCurrentHours"} label={"Hours"} />
              </Form.Group>
            </Grid.Column>
            <Grid.Column width={6}>
              <ILabel text={"Last Read"} class={"ui header"} />
              <Form.Group inline>
                <IInput name={"txtLastOdometer"} id={"txtLastOdometer"} label={"Odometer"} />
              </Form.Group>
              <Form.Group inline>
                <IInput name={"txtLastHours"} id={"txtLastHours"} label={"Hours"} />
              </Form.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Form.Group>
          <ILabel text={"Work Information"} class={"ui header"} />
        </Form.Group>
        <Form.Group widths={4}>
          <ISelect name={"selectPriority"} id={"selectPriority"} text={"Priority"} placeholder={"Priority"} />
          <IInput name={"txtPlaneServiceData"} id={"txtPlaneServiceData"} label={"Plan service Data"} />
          <IInput name={"txtBudget"} id={"txtBudget"} label={"Budget"} />
        </Form.Group>
        <Grid>
          <Grid.Row >
          <Grid.Column width={14}>
          </Grid.Column>
          <Grid.Column width={2}>
          <Form.Group >
          <IButton name={"btnAddJobs"} text="Add jobs" id={"btnAddJobs"} align={"right"} />  
        </Form.Group>
        </Grid.Column>
          </Grid.Row>
          </Grid>
        <ITable name={"tblWorkOrderTruck"} id={"tblWorkOrderTruck"} data={this.state.table} />
        <Form.Group>
          <ILabel text={"Client Information"} class={"ui header"} />
        </Form.Group>
        <Form.Group width={6}>
          <IInput name={"txtName"} id={"txtName"} label={"Name"} width={4} />
          <IInput name={"txtCompany"} id={"txtCompany"} label={"Company"} width={4} />
          <ISelect
            text={"Customer Type"}
            placeholder={"Customer Type"}
            width={4}
            name={"selectCustomerType"} id={"selectCustomerType"}
          />
        </Form.Group>
        <Form.Group>
          <IInput name={"txtCity"} id={"txtCity"} label={"City"} width={4} />
          <IInput name={"txtProvince"} id={"txtProvince"} label={"Prov/State"} width={2} />
          <IInput name={"txtAddress"} id={"txtAddress"} label={"Address"} width={6} />
          <IInput name={"txtZip"} id={"txtZip"} label={"Zip/Postal code"} width={2} />
          <IInput name={"txtCountry"} id={"txtCountry"} label={"Country"} width={2} />
        </Form.Group>
        <Form.Group>
          <IInput name={"txtEmail"} id={"txtEmail"} label={"Email"} width={4} />
          <IInput name={"txtTelephone1"} id={"txtTelephone2"} label={"Telephone"} width={4} />
          <IInput name={"txtFax"} id={"txtFax"} label={"Fax"} width={4} />
        </Form.Group>
        <Form.Group>
          <IInput name={"txtTollFree"} id={"txtTollFree"} label={"Toll Free"} width={4} />
          <IInput name={"txtTelephone2"} id={"TxtTelephone2"} label={"Telephone"} width={4} />
          <IInput name={"txtExtension"} id={"txtExtension"} label={"Extension"} width={2} />
        </Form.Group>
        <Grid>
          <Grid.Row >
          <Grid.Column width={14}>
         
          </Grid.Column>
          <Grid.Column width={2}>
          <Form.Group >
          <IButton
          text={"Check for discount"}
          name={"btnCheckForDiscount"}
          id={"btnCheckForDiscount"}
          align={"right"}
        />
        </Form.Group>
        </Grid.Column>
          </Grid.Row>
          </Grid>

        
        

        <Form.Group>
          <ILabel text={"Additional Information"} class={"ui header"} />
        </Form.Group>
        <Form.Group>
          <ILabel text={"Comments"} class={"ui header"} />
        </Form.Group>
        <Form.Group>
          <ITextArea name={"txtComment"} id={"txtLabel"} label={"Comments"} />
        </Form.Group>
        <Grid>
          <Grid.Row >
          <Grid.Column width={14}>
          </Grid.Column>
          <Grid.Column width={2}>
          <Form.Group >
        <IButton
          text="Check work order"
          id={"btnCheckWorkOrder"}
          align={"right"}
          name={"btnCheckWorkOrder"}         
        />
        </Form.Group>
        </Grid.Column>
          </Grid.Row>
          </Grid>

      </Form>
    );
  }
}

export default FrmNewWorkOrderTruck;
