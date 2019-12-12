import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import ILabel from "../basic/ilabel";
import ITextArea from "../basic/itextarea";
import { Form } from "semantic-ui-react";
import IInput from "../basic/input";
import IAdd from "../basic/iadd";
import ISelect from "../basic/iselect";
import IButton from "../basic/ibutton";
import ControllerAddNewParts from "../../controllers/controllerAddNewParts";

class FrmAddnewPartLangoDlizainas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSubmit: false,
      formData: {
        txtBillingCity: {
          value: ''
        },
        txtBillingProvince: {
          value: ''
        },
        selectCategory: {
          value: '',
          options: [
            { key: "local", value: "1", text: "Local" },
            { key: "external", value: "2", text: "External" },
          ]
        },
        selectTypes: {
          value: '',
          options: [
            { key: "local", value: "1", text: "Local" },
            { key: "external", value: "2", text: "External" },
          ]
        },
        txtModel: {
          value: ''
        },
        txtMake: {
          value: ''
        },
        txtQuality: {
          value: ''
        },
        txtDescription: {
          value: ''
        },
        txtGarageLocation: {
          value: ''
        },
        txtTime
        : {
          value: ''
        },
        txtInterval: {
          value: ''
        },
        txtPartPrice: {
          value: ''
        },
        txtPrice: {
          value: ''
        },
        txtSupplierName: {
          value: ''
        },
        txtSupplierCompany: {
          value: ''
        },
        txtSupplierCity: {
          value: ''
        },
        txtSupplierProvince: {
          value: ''
        },
        txtSupplierAddress: {
          value: ''
        },
        txtSupplierCountry: {
          value: ''
        },
        txtSupplierEmail: {
          value: ''
        },
        txtSupplierTelephone1: {
          value: ''
        },
        txtSupplierFax: {
          value: ''
        },
        txtSupplierTollFree: {
          value: ''
        },
        txtSupplierTelephone2: {
          value: ''
        },
        txtSupplierExtension: {
          value: ''
        },

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
    let control;
    if (isSubmit) {
      control =
        <ControllerAddNewParts formData={formData}>
          { getdata =>
            <div>
              <p>returned value: {getdata.obj.msg}</p>
            </div>
          }
        </ControllerAddNewParts>
    } else {
      control = <div></div>
    }
    return (
      <div>

      {control}

      <Form onSubmit={this.handleSubmit}>
        <ILabel text={"Add New Parts"} class={"ui header"} />
        <Form.Group>
          <ILabel text={"Parts Information"} class={"ui header"} />
        </Form.Group>
        <Form.Group widths={4}>
          <IInput
            name="txtBillingCity"
            value={formData.txtBillingCity.value}
            onChange={this.changeHandler}
            id={"txtBillingCity"}
            label={"City"}
            width={4}
          />
          <IInput
            name="txtBillingProvince"
            value={formData.txtBillingProvince.value}
            onChange={this.changeHandler}
            id={"txtBillingProvince"}
            label={"Prov/State"}
            width={2}
          />
        </Form.Group>
        <Form.Group widths={4}>
          <ISelect
            name="selectCategory"
            value={formData.selectCategory.value}
            onChange={this.selectchangeHandler}
            options={formData.selectCategory.options}
            id={"selectCategory"}
            text={"Select Category"}
            placeholder={"Category"}
          />
          <ISelect
            name="selectTypes"
            value={formData.selectTypes.value}
            onChange={this.selectchangeHandler}
            options={formData.selectTypes.options}
            id={"selectTypes"}
            text={"Select Types"}
            placeholder={"Types"}
          />
        </Form.Group>
        <Form.Group>
          <IInput name="txtModel"
            value={formData.txtModel.value}
            onChange={this.changeHandler} id={"txtModel"} label={"Model"} width={4} />
          <IInput name="txtMake"
            value={formData.txtMake.value}
            onChange={this.changeHandler} id={"txtMake"} label={"Make"} width={4} />
          <IInput name={"txtStyle"} id={"txtStyle"} label={"Style"} width={4} />
          <IInput
            name="txtQuality"
            value={formData.txtQuality.value}
            onChange={this.changeHandler}
            id={"txtQuality"}
            label={"Quality"}
            width={2}
          />
        </Form.Group>
        <Form.Group>
          <ILabel text={"Description"} class={"ui header"} />
        </Form.Group>
        <Form.Group>
          <ITextArea
            rows={10}
            name="txtDescription" value={formData.txtDescription.value}
            onChange={this.changeHandler}
            id={"txtDescription"}
            label={"Description"}
          />
        </Form.Group>

        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Form.Group>
                <ILabel for={"uploadimage"} icon={"ui huge camera icon"} />
              </Form.Group>
              <Form.Group>
                <input
                  type={"file"}
                  name={"uploadimage"}
                  id={"uploadimage"}
                  class={"inputfile"}

                  width={4}
                />

              </Form.Group>
              <Form.Group width={2} >
                <ILabel for={"uploadimage"} icon={"ui  large camera icon"} />
                <ILabel for={"uploadimage"} icon={"ui large camera icon"} />
                <ILabel for={"uploadimage"} icon={"ui large camera icon"} />
              </Form.Group>

            </Grid.Column>
            <Grid.Column width={8}>
              <Form.Group>
                <ILabel for={"uploadinvoice"} icon={"ui huge file icon"} />
              </Form.Group>
              <Form.Group>
                <input
                  type={"file"}
                  name={"uploadinvoice"}
                  id={"uploadinvoice"}
                  class={"inputinvoice"}

                  width={4}
                />

              </Form.Group>
              <Form.Group width={2} >
                <ILabel for={"uploadinvoice"} icon={"ui  large file icon"} />
                <ILabel for={"uploadinvoice"} icon={"ui large file icon"} />
                <ILabel for={"uploadinvoice"} icon={"ui large file icon"} />
              </Form.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Form.Group width={4}>
          <IInput
            name="txtGarageLocation"
            value={formData.txtGarageLocation.value}
            onChange={this.changeHandler}
            id={"txtGarageLocation"}
            label={"Garage Location"}
            width={4}
          />
        </Form.Group>

        <Form.Group>
          <ILabel text={"Waranty"} class={"ui header"} />
        </Form.Group>
        <Form.Group width={4}>
          <IInput  name="txtTime"
            value={formData.txtTime.value}
            onChange={this.changeHandler} id={"txtTime"} label={"Time"} width={4} />
          <IInput
            name="txtInterval"
            value={formData.txtInterval.value}
            onChange={this.changeHandler}
            id={"txtInterval"}
            label={"Interval"}
            width={4}
          />
        </Form.Group>
        <Form.Group>
          <ILabel text={"Accounting"} class={"ui header"} />
        </Form.Group>
        <Form.Group width={4}>
          <IInput
            name="txtPartPrice"
            value={formData.txtPartPrice.value}
            onChange={this.changeHandler}
            id={"txtPartPrice"}
            label={"Part Price"}
            width={4}
          />
          <IAdd
            name={"btnAddmorePrice"}
            id={"btnAddmorePrice"}
            text={"Add more Price"}
          />
          <IInput
            name="txtPrice"
            value={formData.txtPrice.value}
            onChange={this.changeHandler}
            id={"txtPrice"}
            label={"Price"}
            width={4}
          />
        </Form.Group>
        {/* Supplier Info*/}
        <Form.Group>
          <ILabel text={"Supplier Information"} class={"ui header"} />
        </Form.Group>
        <Form.Group width={6}>
          <IInput
            name="txtSupplierName"
            value={formData.txtSupplierName.value}
            onChange={this.changeHandler}
            id={"txtSupplierName"}
            label={"Name"}
            width={4}
          />
          <IInput
            name="txtSupplierCompany"
            value={formData.txtSupplierCompany.value}
            onChange={this.changeHandler}
            id={"txtSupplierCompany"}
            label={"Company"}
            width={4}
          />
        </Form.Group>
        <Form.Group>
          <IInput
            name="txtSupplierCity"
            value={formData.txtSupplierCity.value}
            onChange={this.changeHandler}
            id={"txtSupplierCity"}
            label={"City"}
            width={4}
          />
          <IInput
            name="txtSupplierProvince"
            value={formData.txtSupplierProvince.value}
            onChange={this.changeHandler}
            id={"txtSupplierProvince"}
            label={"Prov/State"}
            width={2}
          />
          <IInput
            name="txtSupplierAddress"
            value={formData.txtSupplierAddress.value}
            onChange={this.changeHandler}
            id={"txtSupplierAddress"}
            label={"Address"}
            width={6}
          />
          <IInput
            name="txtSupplierCountry"
            value={formData.txtSupplierCountry.value}
            onChange={this.changeHandler}
            id={"txtSupplierCountry"}
            label={"Country"}
            width={2}
          />
        </Form.Group>
        <Form.Group>
          <IInput
            name="txtSupplierEmail"
            value={formData.txtSupplierEmail.value}
            onChange={this.changeHandler}
            id={"txtSupplierEmail"}
            label={"Email"}
            width={4}
          />
          <IInput
            name="txtSupplierTelephone1"
            value={formData.txtSupplierTelephone1.value}
            onChange={this.changeHandler}
            id={"txtSupplierTelephone1"}
            label={"Telephone"}
            width={4}
          />
          <IInput
            name="txtSupplierFax"
            value={formData.txtSupplierFax.value}
            onChange={this.changeHandler}
            id={"txtSupplierFax"}
            label={"Fax"}
            width={4}
          />
        </Form.Group>

        <Form.Group>
          <IInput
            name="txtSupplierTollFree"
            value={formData.txtSupplierTollFree.value}
            onChange={this.changeHandler}
            id={"txtSupplierTollFree"}
            label={"Toll Free"}
            width={4}
          />
          <IInput
            name="txtSupplierTelephone2"
            value={formData.txtSupplierTelephone2.value}
            onChange={this.changeHandler}
            id={"txtSupplierTelephone2"}
            label={"Telephone"}
            width={4}
          />
          <IInput
            name="txtSupplierExtension"
            value={formData.txtSupplierExtension.value}
            onChange={this.changeHandler}
            id={"txtSupplierExtension"}
            label={"Extension"}
            width={2}
          />
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
        </Form.Group>
      </Form>
      </div>
    );
  }
}
export default FrmAddnewPartLangoDlizainas;
























