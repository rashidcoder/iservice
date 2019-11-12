import { Grid } from "semantic-ui-react";
import React, { Component } from "react";
import ILabel from "../basic/ilabel";
import ITextArea from "../basic/itextarea";
import { Form } from "semantic-ui-react";
import ISelect from "../basic/iselect";
import IInput from "../basic/input";
import IButton from "../basic/ibutton";
import ICheckBox from "../basic/icheckbox";
class FrmBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
   render() {
    return (
      <Form>
        <ILabel text={"Booking"} class={"ui header"} />
        <Form.Group >
          <ISelect
            name={"selectTruckTypes"}
            id={"selectTruckTypes"}
            text={"Select Truck Types"}
            placeholder={"Truck"}
          />
          <ISelect
            name={"txtPriority"}
            id={"txtPriority"}
            text={"Priority"}
            placeholder={"Priority"}
          />
        </Form.Group>
        <Form.Group>
          <ILabel text={"Truck Information"} class={"ui header"} />
        </Form.Group>
        <Form.Group>
          <ISelect
            name={"selectTruckTypes"}
            id={"selectTruckTypes"}
            text={"Select Truck Types"}
            placeholder={"Truck Types"}
          />
        </Form.Group>
        <Form.Group widths={4}>
          <IInput
            name={"txtTruckBrand"}
            id={"txtTruckBrand"}
            label={"Truck Brand"}
          />
          <IInput name={"txtModel "} id={"txtmodel"} label={"Model"} />
          <IInput name={"txtUniteId "} id={"txtUniteId"} label={"Unite ID"} />
        </Form.Group>
        <Form.Group widths={4}>
          <IInput name={"txtLicense"} id={"txtLicense"} label={"License"} />
          <IInput name={"txtVIN"} id={"txtVIN"} label={"V.I.N"} />
          <IInput
            name={"txtEngineNumber"}
            id={"txtEngineNumber"}
            label={"Engine Number"}
          />
        </Form.Group>
        <Form.Group widths={4}>
          <IInput
            name={"txtManufactureYear"}
            id={"txtManufactureYear"}
            label={"Manufacture Year"}
          />
          <IInput
            name={"txtEngineCapacity"}
            id={"txtEngineCapacity"}
            label={"Engine Capacity"}
          />
          <IInput
            name={"txtTruckColor"}
            id={"txtTruckColor"}
            label={"Truck Color"}
          />
        </Form.Group>

        {/* Client Info */}

        <Form.Group>
          <ILabel text={"Client Information"} class={"ui header"} />
        </Form.Group>
        <Form.Group width={6}>
          <IInput name={"txtName"} id={"txtName"} label={"Name"} width={4} />
          <IInput
            name={"txtCompany"}
            id={"txtCompany"}
            label={"Company"}
            width={4}
          />
          <ISelect
            text={"Customer Type"}
            placeholder={"Customer Type"}
            width={4}
            name={"selectCustomerType"}
            id={"selectCustomerType"}
          />
        </Form.Group>
        <Form.Group>
          <IInput name={"txtCity"} id={"txtCity"} label={"City"} width={4} />
          <IInput
            name={"txtProvince"}
            id={"txtProvince"}
            label={"Prov/State"}
            width={2}
          />
          <IInput
            name={"txtAddress"}
            id={"txtAddress"}
            label={"Address"}
            width={6}
          />
          <IInput
            name={"txtZip"}
            id={"txtZip"}
            label={"Zip/Postal code"}
            width={2}
          />
          <IInput
            name={"txtCountry"}
            id={"txtCountry"}
            label={"Country"}
            width={2}
          />
        </Form.Group>
        <Form.Group>
          <IInput name={"txtEmail"} id={"txtEmail"} label={"Email"} width={4} />
          <IInput
            name={"txtTelephone1"}
            id={"txtTelephone2"}
            label={"Telephone"}
            width={4}
          />
          <IInput name={"txtFax"} id={"txtFax"} label={"Fax"} width={4} />
        </Form.Group>
        <Form.Group>
          <IInput
            name={"txtTollFree"}
            id={"txtTollFree"}
            label={"Toll Free"}
            width={4}
          />
          <IInput
            name={"txtTelephone2"}
            id={"TxtTelephone2"}
            label={"Telephone"}
            width={4}
          />
          <IInput
            name={"txtExtension"}
            id={"txtExtension"}
            label={"Extension"}
            width={2}
          />
        </Form.Group>

        <Form.Group>
          <ILabel text={"Date"} class={"ui header"} />
        </Form.Group>
        <Form.Group widths={3}>
          <IButton
            text={"Pick Date"}
            name={"btnPickDate"}
            id={"btnPickDate"}
            align={"left"}
          />
          <IButton
            text={"Pick Time"}
            name={"btnPickTime"}
            id={"btnPickTime"}
            align={"left"}
          />
        </Form.Group>
        <Form.Group>
          <ICheckBox
            name={"checkReminderforGacage"}
            id={"checkReminderforGacage"}
            label={"Reminder for Gacage"}
            class={"checkReminderforGacage"}
          />
        </Form.Group>
        <Form.Group>
          <ICheckBox
            name={"checkSmsEmail"}
            id={"checkReminderforGacage"}
            label={"Send Reminder SMS/Email to Customer"}
            class={"checkSmsEmail"}
          />
          <ICheckBox
            name={"checkSms"}
            id={"checkSms"}
            class={"checkSms"}
            label={"SMS"}
          />
          
          <ICheckBox
            name={"checkEmail"}
            id={"checkEmail"}
            class={"checkEmail"}
            label={"Email"}
          />
        </Form.Group>

        <Form.Group>
          <ILabel text={"Comments"} class={"ui header"} />
        </Form.Group>
        <Form.Group>
          <ITextArea name={"txtComment"} id={"txtLabel"} label={"Comments"} />
        </Form.Group>
        <Grid>
          <Grid.Row>
            <Grid.Column width={14}></Grid.Column>
            <Grid.Column width={2}>
              <Form.Group>
                <IButton
                  text="Save"
                  id={"btnSave"}
                  align={"right"}
                  name={"btnSave"}
                />
              </Form.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    );
  }
}

export default FrmBooking;
