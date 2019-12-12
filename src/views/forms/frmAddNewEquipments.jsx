import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import ILabel from "../basic/ilabel";
import ITextArea from "../basic/itextarea";
import { Form } from "semantic-ui-react";
import IInput from "../basic/input";
import IButton from "../basic/ibutton";
import ControllerAddNewEqipments from "../../controllers/controllerAddNewEquipments";

class FrmAddNewEquipments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSubmit: false,
      formData: {
        txtUnit: {
          value: '',
        },
        txtQuantity: {
          value: '',
        },
        txtPrice: {
          value: '',
        },
        txtWarranty:{
          value:'',
        },
        txtTechnicalInspection: {
          value: '',
        },
        txtModel: {
          value: '',
        },
        txtMake: {
          value: '',
        },
        txtStyle: {
          value: '',
        },
        txtQuality: {
          value: '',
        },
        txtDescription:{
          value:''
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
        txtSupplierTelephone: {
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
    console.log(JSON.stringify( "UI Data"+this.state.formData))
  }

  render() {
    const { isSubmit, formData} = this.state
    let control;
    if (isSubmit) {
      control =
        <ControllerAddNewEqipments formData={formData}>
          { getdata =>
            <div>
              <p>returned value: {getdata.obj.msg}</p>
            </div>
          }
        </ControllerAddNewEqipments>
    } else {
      control = <div></div>
    }
    return (
      <div>

        {control}

      <Form onSubmit={this.handleSubmit}>
        <ILabel text={"Add New Equipments"} class={"ui header"} />
        <Form.Group>
          <ILabel text={"Equipment Information"} class={"ui header"} />
        </Form.Group>
        <Form.Group widths={4}>
          <IInput
            name="txtUnit"
            value={formData.txtUnit.value}
            onChange={this.changeHandler}
            id={"txtUnit"}
            label={"Unit"}
            width={6}
          />
          <IInput
            name="txtQuantity"
            value={formData.txtQuantity.value}
            onChange={this.changeHandler}
            id={"txtQuantity"}
            label={"Quantity"}
            width={3}
          />
          <IInput
            name="txtPrice"
            value={formData.txtPrice.value}
            onChange={this.changeHandler}
            id={"txtPrice"}
            label={"Price"}
            width={3}
          />
        </Form.Group>
        <Form.Group widths={4}>
          <IInput
            name="txtWarranty"
            value={formData.txtWarranty.value}
            onChange={this.changeHandler}
            id={"txtWarranty"}
            label={"Warranty"}
            width={4}
          />
          <IButton
            text="Add Reminder"
            id={"btnAddReminder"}
            name={"btnAddReminder"}
            width={4}
          />
          <IInput
            name="txtTechnicalInspection"
            value={formData.txtTechnicalInspection.value}
            onChange={this.changeHandler}
            id={"txtTechnicalInspection"}
            label={"Technical Inspection"}
            width={4}
          />
          <IButton
            text="Add Reminder"
            id={"btnAddReminder"}
            name={"btnAddReminder"}
            width={4}
          />
        </Form.Group>

        <Form.Group>
          <IInput name="txtModel"
            value={formData.txtModel.value}
            onChange={this.changeHandler} id={"txtModel"} label={"Model"} width={4} />
          <IInput name="txtMake"
            value={formData.txtMake.value}
            onChange={this.changeHandler} id={"txtMake"} label={"Make"} width={4} />
          <IInput name="txtStyle"
            value={formData.txtStyle.value}
            onChange={this.changeHandler} id={"txtStyle"} label={"Style"} width={4} />
          <IInput
            name="txtQuality"
            value={formData.txtQuality.value}
            onChange={this.changeHandler}
            id={"txtQuality"}
            label={"Quality"}
            width={2}
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


        <Form.Group>
          <ILabel text={"Description"} class={"ui header"} />
        </Form.Group>
        <Form.Group>
          <ITextArea
            rows={5}
            cols={3}
            name="txtDescription" value={formData.txtDescription.value}
            onChange={this.changeHandler}
            id={"txtDescription"}
            label={"Description"}
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
            name="txtSupplierTelephone"
            value={formData.txtSupplierTelephone.value}
            onChange={this.changeHandler}
            id={"txtSupplierTelephone"}
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
          <Form.Group>

          </Form.Group>

        </Form.Group>
        <IButton
          text="Save"
          id={"btnSave"}
          name={"btnSave"}
          align={"right"}
          width={4}
        />
      
      </Form>
         </div>
         );
        }
      }
      export default FrmAddNewEquipments;