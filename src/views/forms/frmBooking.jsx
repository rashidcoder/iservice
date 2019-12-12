import { Grid } from "semantic-ui-react";
import React, { Component } from "react";
import ILabel from "../basic/ilabel";
import ITextArea from "../basic/itextarea";
import { Form } from "semantic-ui-react";
import ISelect from "../basic/iselect";
import IInput from "../basic/input";
import IButton from "../basic/ibutton";
import ICheckBox from "../basic/icheckbox";
import ControllerfrmBooking from "../../controllers/controllerfrmBooking";
class FrmBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmit: false,
      formData: {
        selectTypes: {
          value: '',
          options: [
            { key: "local", value: "1", text: "Local" },
            { key: "external", value: "2", text: "External" },
          ]
        },
        selectPriority: {
          value: '',
          options: [
            { key: "local", value: "1", text: "Local" },
            { key: "external", value: "2", text: "External" },
          ]
        },
        selectTruckTypes: {
          value: '',
          options: [
            { key: "local", value: "1", text: "Local" },
            { key: "external", value: "2", text: "External" },
          ]
        },
        txtTruckBrand: {
          value: ''
        },
        txtmodel: {
          value: ''
        },
        txtUniteId: {
          value: ''
        },
        txtLicense: {
          value: ''
        },
        txtVIN: {
          value: ''
        },
        txtEngineNumber: {
          value: ''
        },
        txtManufactureYear: {
          value: ''
        },
        txtEngineCapacity: {
          value: ''
        },
        txtTruckColor: {
          value: ''
        },
        txtName: {
          value: ''
        },
        txtCompany: {
          value: ''
        },
        selectCustomerType: {
          value: '',
          options: [
            { key: "local", value: "1", text: "Local" },
            { key: "external", value: "2", text: "External" },
          ]
        },
        txtCity: {
          value: ''
        },
        txtProvince: {
          value: ''
        },
        txtAddress: {
          value: ''
        },
        txtZip: {
          value: ''
        },
        txtCountry: {
          value: ''
        },
        txtEmail: {
          value: ''
        },
        txtTelephone1: {
          value: ''
        },
        txtFax: {
          value: ''
        },
        txtTollFree: {
          value: ''
        },
        txtTelephone2: {
          value: ''
        },
        txtExtension: {
          value: ''
        },
        txtDate: {
          value: ''
        },
        txtTime: {
          value: ''
        },
        checkReminderforGacage: {
          value: false
        },
        checkSmsEmail: {
          value: false
        },
        checkSms: {
          value: false
        },
        checkEmail: {
          value: false
        },
        txtComment: {
          value: '',
        }
      }

    };
  }


  checkedhandleChange = event => {
    const name = event.target.name;
    const value = event.target.checked;
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
  selectchangeHandler = (e, { name, value }) => {
    const updatedControls = {
      ...this.state.formData
    };
    const updatedFormElement = {
      ...updatedControls[name]
    };
    updatedFormElement.value = value;
    updatedControls[name] = updatedFormElement;
    this.setState({
      formData: updatedControls,
    });

    console.log(' value of select ' + name + " is " + value)

    console.log(' value of object is  ' + JSON.stringify(this.state.formData))
  }


  handleSubmit = (e) => {
    this.setState({
      isSubmit: true,
    })
    console.log(JSON.stringify(this.state.formData))
  }


  

    render() {
      const {isSubmit,formData}=this.state
        
      let control
      if (isSubmit) {
        control =
          <ControllerfrmBooking formData={this.state.formData}>
            {getdata =>
              <div>
                <p>returned value: {getdata.obj.msg}</p>
              </div>
            }
          </ControllerfrmBooking>
      } else {
        control = <div></div>
      }
      return (
        <div>
          {control}

          <Form onSubmit={this.handleSubmit}>
            <ILabel text={"Booking"} class={"ui header"} />
            <Form.Group >
              <ISelect
                name="selectTypes"
                value={formData.selectTypes.value}
                onChange={this.selectchangeHandler}
                options={formData.selectTypes.options}
                id={"selectTypes"}
                text={"Select Type"}
                placeholder={"Truck"}
              />

              <ISelect
                name="selectPriority"
                value={formData.selectPriority.value}
                onChange={this.selectchangeHandler}
                options={formData.selectPriority.options}
                id={"selectPriority"}
                text={"Priority"}
                placeholder={"Priority"}
              />
            </Form.Group>
            <Form.Group>
              <ILabel text={"Truck Information"} class={"ui header"} />
            </Form.Group>
            <Form.Group>
              <ISelect
                name="selectTruckTypes"
                value={formData.selectTruckTypes.value}
                onChange={this.selectchangeHandler}
                options={formData.selectTruckTypes.options}
                id={"selectTruckTypes"}
                text={"Select Truck Types"}
                placeholder={"Truck Types"}
              />
            </Form.Group>
            <Form.Group widths={4}>
              <IInput
                name="txtTruckBrand"
                value={formData.txtTruckBrand.value}
                onChange={this.changeHandler}
                id={"txtTruckBrand"}
                label={"Truck Brand"}
              />
              <IInput name="txtmodel"
                value={formData.txtmodel.value}
                onChange={this.changeHandler} id={"txtmodel"} label={"Model"} />
              <IInput name="txtUniteId"
                value={formData.txtUniteId.value}
                onChange={this.changeHandler} id={"txtUniteId"} label={"Unite ID"} />
            </Form.Group>
            <Form.Group widths={4}>
              <IInput name="txtLicense"
                value={formData.txtLicense.value}
                onChange={this.changeHandler} id={"txtLicense"} label={"License"} />
              <IInput name="txtVIN"
                value={formData.txtVIN.value}
                onChange={this.changeHandler} id={"txtVIN"} label={"V.I.N"} />
              <IInput

                name="txtEngineNumber"
                value={formData.txtEngineNumber.value}
                onChange={this.changeHandler}
                id={"txtEngineNumber"}
                label={"Engine Number"}
              />
            </Form.Group>
            <Form.Group widths={4}>
              <IInput
                name="txtManufactureYear"
                value={formData.txtManufactureYear.value}
                onChange={this.changeHandler}
                id={"txtManufactureYear"}
                label={"Manufacture Year"}
              />

              <IInput
                name="txtEngineCapacity"
                value={formData.txtEngineCapacity.value}
                onChange={this.changeHandler}
                id={"txtEngineCapacity"}
                label={"Engine Capacity"}
              />
              <IInput
                name="txtTruckColor"
                value={formData.txtTruckColor.value}
                onChange={this.changeHandler}
                id={"txtTruckColor"}
                label={"Truck Color"}
              />
            </Form.Group>

            {/* Client Info */}

            <Form.Group>
              <ILabel text={"Client Information"} class={"ui header"} />
            </Form.Group>
            <Form.Group width={6}>
              <IInput name="txtName"
                value={formData.txtName.value}
                onChange={this.changeHandler} id={"txtName"} label={"Name"} width={4} />
              <IInput
                name="txtCompany"
                value={formData.txtCompany.value}
                onChange={this.changeHandler}
                id={"txtCompany"}
                label={"Company"}
                width={4}
              />
              <ISelect
                text={"Customer Type"}
                placeholder={"Customer Type"}
                width={4}
                name="selectCustomerType"
                value={formData.selectCustomerType.value}
                onChange={this.selectchangeHandler}
                options={formData.selectCustomerType.options}
                id={"selectCustomerType"}
              />
            </Form.Group>
            <Form.Group>
              <IInput name="txtCity"
                value={formData.txtCity.value}
                onChange={this.changeHandler} id={"txtCity"} label={"City"} width={4} />
              <IInput
                name="txtProvince"
                value={formData.txtProvince.value}
                onChange={this.changeHandler}
                id={"txtProvince"}
                label={"Prov/State"}
                width={2}
              />
              <IInput
                name="txtAddress"
                value={formData.txtAddress.value}
                onChange={this.changeHandler}
                id={"txtAddress"}
                label={"Address"}
                width={6}
              />

              <IInput
                name="txtZip"
                value={formData.txtZip.value}
                onChange={this.changeHandler}
                id={"txtZip"}
                label={"Zip/Postal code"}
                width={2}
              />
              <IInput
                name="txtCountry"
                value={formData.txtCountry.value}
                onChange={this.changeHandler}
                id={"txtCountry"}
                label={"Country"}
                width={2}
              />
            </Form.Group>
            <Form.Group>
              <IInput name="txtEmail"
                value={formData.txtEmail.value}
                onChange={this.changeHandler} id={"txtEmail"} label={"Email"} width={4} />
              <IInput
                name="txtTelephone1"
                value={formData.txtTelephone1.value}
                onChange={this.changeHandler}
                id={"txtTelephone1"}
                label={"Telephone"}
                width={4}
              />
              <IInput name="txtFax"
                value={formData.txtFax.value}
                onChange={this.changeHandler} id={"txtFax"} label={"Fax"} width={4} />
            </Form.Group>
            <Form.Group>
              <IInput
                name="txtTollFree"
                value={formData.txtTollFree.value}
                onChange={this.changeHandler}
                id={"txtTollFree"}
                label={"Toll Free"}
                width={4}
              />
              <IInput
                name="txtTelephone2"
                value={formData.txtTelephone2.value}
                onChange={this.changeHandler}
                id={"txtTelephone2"}
                label={"Telephone"}
                width={4}
              />
              <IInput
                name="txtExtension"
                value={formData.txtExtension.value}
                onChange={this.changeHandler}
                id={"txtExtension"}
                label={"Extension"}
                width={2}
              />
            </Form.Group>

            <Form.Group>
              <ILabel text={"Date And Time "} class={"ui header"} />
            </Form.Group>
            <Form.Group widths={3}>
              <IInput
                name={"txtDate"}
                type={"date"}
                value={formData.txtDate.value}
                onChange={this.changeHandler}
                id={"txtDate"}
                label={"Date"}
                width={4}
              />
              <IInput
                name={"txtTime"}
                type={"Time"}
                value={formData.txtTime.value}
                onChange={this.changeHandler}
                id={"txtTime"}
                label={"Time"}
                width={4}
              />
            </Form.Group>
            <Form.Group>
              <ICheckBox
                name="checkReminderforGacage"
                checked={formData.checkReminderforGacage.value}
                onChange={this.checkedhandleChange}
                id={"checkReminderforGacage"}
                label={"Reminder for Gacage"}
                class={"checkReminderforGacage"}
              />
            </Form.Group>
            <Form.Group>
              <ICheckBox
                name="checkSmsEmail"
                value={formData.checkSmsEmail.value}
                onChange={this.checkedhandleChange}
                id={"checkSmsEmail"}
                label={"Send Reminder SMS/Email to Customer"}
                class={"checkSmsEmail"}
              />

              <ICheckBox
                name="checkSms"
                value={formData.checkSms.value}
                onChange={this.checkedhandleChange}
                id={"checkSms"}
                class={"checkSms"}
                label={"SMS"}
              />

              <ICheckBox
                name="checkEmail"
                value={formData.checkEmail.value}
                onChange={this.checkedhandleChange}
                id={"checkEmail"}
                class={"checkEmail"}
                label={"Email"}
              />
            </Form.Group>

            <Form.Group>
              <ILabel text={"Comments"} class={"ui header"} />
            </Form.Group>
            <Form.Group>
              <ITextArea name="txtComment" value={formData.txtComment.value} onChange={this.changeHandler} id={"txtComment"} label={"Comments"} />
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
          {control}

          <Form onSubmit={this.handleSubmit}>
            <ILabel text={"Booking"} class={"ui header"} />
            <Form.Group >
              <ISelect
                name="selectTypes"
                value={this.state.formData.selectTypes.value}
                onChange={this.selectchangeHandler}
                options={this.state.formData.selectTypes.options}
                id={"selectTypes"}
                text={"Select Type"}
                placeholder={"Truck"}
              />

              <ISelect
                name="selectPriority"
                value={this.state.formData.selectPriority.value}
                onChange={this.selectchangeHandler}
                options={this.state.formData.selectPriority.options}
                id={"selectPriority"}
                text={"Priority"}
                placeholder={"Priority"}
              />
            </Form.Group>
            <Form.Group>
              <ILabel text={"Truck Information"} class={"ui header"} />
            </Form.Group>
            <Form.Group>
              <ISelect
                name="selectTruckTypes"
                value={this.state.formData.selectTruckTypes.value}
                onChange={this.selectchangeHandler}
                options={this.state.formData.selectTruckTypes.options}
                id={"selectTruckTypes"}
                text={"Select Truck Types"}
                placeholder={"Truck Types"}
              />
            </Form.Group>
            <Form.Group widths={4}>
              <IInput
                name="txtTruckBrand"
                value={this.state.formData.txtTruckBrand.value}
                onChange={this.changeHandler}
                id={"txtTruckBrand"}
                label={"Truck Brand"}
              />
              <IInput name="txtmodel"
                value={this.state.formData.txtmodel.value}
                onChange={this.changeHandler} id={"txtmodel"} label={"Model"} />
              <IInput name="txtUniteId"
                value={this.state.formData.txtUniteId.value}
                onChange={this.changeHandler} id={"txtUniteId"} label={"Unite ID"} />
            </Form.Group>
            <Form.Group widths={4}>
              <IInput name="txtLicense"
                value={this.state.formData.txtLicense.value}
                onChange={this.changeHandler} id={"txtLicense"} label={"License"} />
              <IInput name="txtVIN"
                value={this.state.formData.txtVIN.value}
                onChange={this.changeHandler} id={"txtVIN"} label={"V.I.N"} />
              <IInput

                name="txtEngineNumber"
                value={this.state.formData.txtEngineNumber.value}
                onChange={this.changeHandler}
                id={"txtEngineNumber"}
                label={"Engine Number"}
              />
            </Form.Group>
            <Form.Group widths={4}>
              <IInput
                name="txtManufactureYear"
                value={this.state.formData.txtManufactureYear.value}
                onChange={this.changeHandler}
                id={"txtManufactureYear"}
                label={"Manufacture Year"}
              />

              <IInput
                name="txtEngineCapacity"
                value={this.state.formData.txtEngineCapacity.value}
                onChange={this.changeHandler}
                id={"txtEngineCapacity"}
                label={"Engine Capacity"}
              />
              <IInput
                name="txtTruckColor"
                value={this.state.formData.txtTruckColor.value}
                onChange={this.changeHandler}
                id={"txtTruckColor"}
                label={"Truck Color"}
              />
            </Form.Group>

            {/* Client Info */}

            <Form.Group>
              <ILabel text={"Client Information"} class={"ui header"} />
            </Form.Group>
            <Form.Group width={6}>
              <IInput name="txtName"
                value={this.state.formData.txtName.value}
                onChange={this.changeHandler} id={"txtName"} label={"Name"} width={4} />
              <IInput
                name="txtCompany"
                value={this.state.formData.txtCompany.value}
                onChange={this.changeHandler}
                id={"txtCompany"}
                label={"Company"}
                width={4}
              />
              <ISelect
                text={"Customer Type"}
                placeholder={"Customer Type"}
                width={4}
                name="selectCustomerType"
                value={this.state.formData.selectCustomerType.value}
                onChange={this.selectchangeHandler}
                options={this.state.formData.selectCustomerType.options}
                id={"selectCustomerType"}
              />
            </Form.Group>
            <Form.Group>
              <IInput name="txtCity"
                value={this.state.formData.txtCity.value}
                onChange={this.changeHandler} id={"txtCity"} label={"City"} width={4} />
              <IInput
                name="txtProvince"
                value={this.state.formData.txtProvince.value}
                onChange={this.changeHandler}
                id={"txtProvince"}
                label={"Prov/State"}
                width={2}
              />
              <IInput
                name="txtAddress"
                value={this.state.formData.txtAddress.value}
                onChange={this.changeHandler}
                id={"txtAddress"}
                label={"Address"}
                width={6}
              />

              <IInput
                name="txtZip"
                value={this.state.formData.txtZip.value}
                onChange={this.changeHandler}
                id={"txtZip"}
                label={"Zip/Postal code"}
                width={2}
              />
              <IInput
                name="txtCountry"
                value={this.state.formData.txtCountry.value}
                onChange={this.changeHandler}
                id={"txtCountry"}
                label={"Country"}
                width={2}
              />
            </Form.Group>
            <Form.Group>
              <IInput name="txtEmail"
                value={this.state.formData.txtEmail.value}
                onChange={this.changeHandler} id={"txtEmail"} label={"Email"} width={4} />
              <IInput
                name="txtTelephone1"
                value={this.state.formData.txtTelephone1.value}
                onChange={this.changeHandler}
                id={"txtTelephone1"}
                label={"Telephone"}
                width={4}
              />
              <IInput name="txtFax"
                value={this.state.formData.txtFax.value}
                onChange={this.changeHandler} id={"txtFax"} label={"Fax"} width={4} />
            </Form.Group>
            <Form.Group>
              <IInput
                name="txtTollFree"
                value={this.state.formData.txtTollFree.value}
                onChange={this.changeHandler}
                id={"txtTollFree"}
                label={"Toll Free"}
                width={4}
              />
              <IInput
                name="txtTelephone2"
                value={this.state.formData.txtTelephone2.value}
                onChange={this.changeHandler}
                id={"txtTelephone2"}
                label={"Telephone"}
                width={4}
              />
              <IInput
                name="txtExtension"
                value={this.state.formData.txtExtension.value}
                onChange={this.changeHandler}
                id={"txtExtension"}
                label={"Extension"}
                width={2}
              />
            </Form.Group>

            <Form.Group>
              <ILabel text={"Date And Time "} class={"ui header"} />
            </Form.Group>
            <Form.Group widths={3}>
              <IInput
                name={"txtDate"}
                type={"date"}
                value={this.state.formData.txtDate.value}
                onChange={this.changeHandler}
                id={"txtDate"}
                label={"Date"}
                width={4}
              />
              <IInput
                name={"txtTime"}
                type={"Time"}
                value={this.state.formData.txtTime.value}
                onChange={this.changeHandler}
                id={"txtTime"}
                label={"Time"}
                width={4}
              />
            </Form.Group>
            <Form.Group>
              <ICheckBox
                name="checkReminderforGacage"
                checked={this.state.formData.checkReminderforGacage.value}
                onChange={this.checkedhandleChange}
                id={"checkReminderforGacage"}
                label={"Reminder for Gacage"}
                class={"checkReminderforGacage"}
              />
            </Form.Group>
            <Form.Group>
              <ICheckBox
                name="checkSmsEmail"
                value={this.state.formData.checkSmsEmail.value}
                onChange={this.checkedhandleChange}
                id={"checkSmsEmail"}
                label={"Send Reminder SMS/Email to Customer"}
                class={"checkSmsEmail"}
              />

              <ICheckBox
                name="checkSms"
                value={this.state.formData.checkSms.value}
                onChange={this.checkedhandleChange}
                id={"checkSms"}
                class={"checkSms"}
                label={"SMS"}
              />

              <ICheckBox
                name="checkEmail"
                value={this.state.formData.checkEmail.value}
                onChange={this.checkedhandleChange}
                id={"checkEmail"}
                class={"checkEmail"}
                label={"Email"}
              />
            </Form.Group>

            <Form.Group>
              <ILabel text={"Comments"} class={"ui header"} />
            </Form.Group>
            <Form.Group>
              <ITextArea name="txtComment" value={this.state.formData.txtComment.value} onChange={this.changeHandler} id={"txtComment"} label={"Comments"} />
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
        </div>
      );
    }
  }

export default FrmBooking;














