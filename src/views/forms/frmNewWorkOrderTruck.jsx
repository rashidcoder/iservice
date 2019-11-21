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
      formData: {                                                                                     //Truck Information
        txtTruckBrand:{
          value:''
        },
        txtmodel: {
          value:''
      },
      txtUniteId: {
        value:''
    },
      txtLicense: {
        value:''
    },
      txtVIN: {
        value:''
    },
      txtEngineNumber: {
        value:''
    },
      txtManufactureYear: {
        value:''
    },
      txtEngineCapacity: {
        value:''
    },
      txtTruckColor: {
        value:''
    },
      txtCurrentOrdmeter: {
        value:''
    },
      txtCurrentHours: {
        value:''
    },
      txtLastOdometer: {
        value:''
    },
      txtLastHours: {
        value:''
    },
      txtPlaneServiceData: {
        value:''
    },
      txtBudget: {
        value:''
    },
                                                                                              //Client Information
          txtName: {
            value:''
        },
          txtCompany: {
            value:''
        },
          txtCity: {
            value:''
        },
          txtProvince: {
            value:''
        },
          txtAddress: {
            value:''
        },
          txtZip: {
            value:''
        },
          txtCountry: {
            value:''
        },
          txtEmail: {
            value:''
        },
          txtTelephone1: {
            value:''
        },
          txtFax: {
            value:''
        },
          txtTollFree: {
            value:''
        },
          TxtTelephone2: {
            value:''
        },
          txtExtension: {
            value:''
        },
          txtComment: {
            value:''
        },
      },

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

  changeHandler = event => {

    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      formData: {
        ...this.state.formData,
        [name]: {
          ...this.state.formData[name],
          value
        }
      }
    });
    console.log(JSON.stringify(this.state.formData))
  }
  handleSubmit = (e) => {

    console.log(JSON.stringify(this.state.formData))
  }
  render() {

    return (
      <Form onSubmit={this.handleSubmit}>
        <ILabel text={"Create New Work Order"} class={"ui header"} />
        <Form.Group widths={2}>
          <ISelect name={"selectTruckTypes"} id={"selectTruckTypes"} text={"Select Truck Types"} placeholder={"Truck"} />
        </Form.Group>
        <Form.Group>
          <ILabel text={"Truck Information"} class={"ui header"} />
        </Form.Group>
        <Form.Group>
          <ISelect name={"selectTruckTypes"} id={"selectTruckTypes"} text={"Select Truck Types"} placeholder={"Truck Types"} />
        </Form.Group>

        <Form.Group widths={4}>
          <IInput name="txtTruckBrand" value={this.state.formData.txtTruckBrand.value} onChange={this.changeHandler} id={"txtTruckBrand"} label={"Truck Brand"} />
          <IInput name="txtmodel" value={this.state.formData.txtmodel.value} onChange={this.changeHandler} id={"txtmodel"} label={"Model"} />
          <IInput name="txtUniteId" value={this.state.formData.txtUniteId.value} onChange={this.changeHandler} id={"txtUniteId"} label={"Unite ID"} />
        </Form.Group>
        <Form.Group widths={4}>
          <IInput name="txtLicense" value={this.state.formData.txtLicense.value} onChange={this.changeHandler} id={"txtLicense"} label={"License"} />
          <IInput name="txtVIN" value={this.state.formData.txtVIN.value} onChange={this.changeHandler} id={"txtVIN"} label={"V.I.N"} />
          <IInput name="txtEngineNumber" value={this.state.formData.txtEngineNumber.value} onChange={this.changeHandler} id={"txtEngineNumber"} label={"Engine Number"} />
        </Form.Group>
        <Form.Group widths={4}>
          <IInput name="txtManufactureYear" value={this.state.formData.txtManufactureYear.value} onChange={this.changeHandler} id={"txtManufactureYear"} label={"Manufacture Year"} />
          <IInput name="txtEngineCapacity" value={this.state.formData.txtEngineCapacity.value} onChange={this.changeHandler} id={"txtEngineCapacity"} label={"Engine Capacity"} />
          <IInput name="txtTruckColor" value={this.state.formData.txtTruckColor.value} onChange={this.changeHandler} id={"txtTruckColor"} label={"Truck Color"} />
        </Form.Group>
        <Grid>
          <Grid.Row>
            <Grid.Column width={6}>
              <ILabel text={"Current"} class={"ui header"} />
              <Form.Group inline>

                <IInput name="txtCurrentOrdmeter" value={this.state.formData.txtCurrentOrdmeter.value} onChange={this.changeHandler} id={"txtCurrentOrdmeter"} label={"Odometer"} />
              </Form.Group>
              <Form.Group inline>
                <IInput name="txtCurrentHours" value={this.state.formData.txtCurrentHours.value} onChange={this.changeHandler} id={"txtCurrentHours"} label={"Hours"} />
              </Form.Group>
            </Grid.Column>
            <Grid.Column width={6}>
              <ILabel text={"Last Read"} class={"ui header"} />
              <Form.Group inline>
                <IInput name="txtLastOdometer" value={this.state.formData.txtLastOdometer.value} onChange={this.changeHandler} id={"txtLastOdometer"} label={"Odometer"} />
              </Form.Group>
              <Form.Group inline>
                <IInput name="txtLastHours" value={this.state.formData.txtLastHours.value} onChange={this.changeHandler} id={"txtLastHours"} label={"Hours"} />
              </Form.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Form.Group>
          <ILabel text={"Work Information"} class={"ui header"} />
        </Form.Group>
        <Form.Group widths={4}>
          <ISelect name={"selectPriority"} id={"selectPriority"} text={"Priority"} placeholder={"Priority"} />
          <IInput name="txtPlaneServiceData" value={this.state.formData.txtPlaneServiceData.value} onChange={this.changeHandler} id={"txtPlaneServiceData"} label={"Plan service Data"} />
          <IInput name="txtBudget" value={this.state.formData.txtBudget.value} onChange={this.changeHandler} id={"txtBudget"} label={"Budget"} />
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
     
          <IInput name="txtName" value={this.state.formData.txtName.value} onChange={this.changeHandler} id={"txtName"} label={"Name"} width={4} />
          <IInput name="txtCompany" value={this.state.formData.txtCompany.value} onChange={this.changeHandler} id={"txtCompany"} label={"Company"} width={4} />
          <ISelect
            text={"Customer Type"}
            placeholder={"Customer Type"}
            width={4}
            name={"selectCustomerType"} id={"selectCustomerType"}
          />

        </Form.Group>
        <Form.Group>
          <IInput name="txtCity" value={this.state.formData.txtCity.value} onChange={this.changeHandler} id={"txtCity"} label={"City"} width={4} />
          <IInput name="txtProvince" value={this.state.formData.txtProvince.value} onChange={this.changeHandler} id={"txtProvince"} label={"Prov/State"} width={2} />
          <IInput name="txtAddress" value={this.state.formData.txtAddress.value} onChange={this.changeHandler} id={"txtAddress"} label={"Address"} width={6} />
          <IInput name="txtZip" value={this.state.formData.txtZip.value} onChange={this.changeHandler} id={"txtZip"} label={"Zip/Postal code"} width={2} />
          <IInput name="txtCountry" value={this.state.formData.txtCountry.value} onChange={this.changeHandler} id={"txtCountry"} label={"Country"} width={2} />
        </Form.Group>
        <Form.Group>
          <IInput
            name="txtEmail" value={this.state.formData.txtEmail.value} onChange={this.changeHandler} id={"txtEmail"} label={"Email"} width={4} />
          <IInput name="txtTelephone1" value={this.state.formData.txtTelephone1.value} onChange={this.changeHandler} id={"txtTelephone1"} label={"Telephone"} width={4} />
          <IInput name="txtFax" value={this.state.formData.txtFax.value} onChange={this.changeHandler} id={"txtFax"} label={"Fax"} width={4} />
        </Form.Group>
        <Form.Group>
          <IInput name="txtTollFree" value={this.state.formData.txtTollFree.value} onChange={this.changeHandler} id={"txtTollFree"} label={"Toll Free"} width={4} />
          <IInput name="TxtTelephone2" value={this.state.formData.TxtTelephone2.value} onChange={this.changeHandler} id={"TxtTelephone2"} label={"Telephone"} width={4} />
          <IInput name="txtExtension" value={this.state.formData.txtExtension.value} onChange={this.changeHandler} id={"txtExtension"} label={"Extension"} width={2} />
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
          <ITextArea name="txtComment" value={this.state.formData.txtComment.value} onChange={this.changeHandler} id={"txtComment"} label={"Comments"} />
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
