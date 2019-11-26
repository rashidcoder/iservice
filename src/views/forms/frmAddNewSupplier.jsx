import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import ILabel from "../basic/ilabel";
import ITextArea from "../basic/itextarea";
import { Form } from "semantic-ui-react";
import IInput from "../basic/input";
import ITable from "../table/itable";
import IAdd from "../basic/iadd";
import IButton from "../basic/ibutton";
import ControllerAddNewSupplier from "../../controllers/controllerAddNewSupplier";
class FrmAddNewSupplier extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSubmit: false,
      table: {
        title: ["Name", "Telephone", "Email", "Fax", "Telephone(alt)"],
        data: [
          ["Pranas", "828-558-55689", "pranas@email.com", "", " "],
          ["", "", "", "", " "],
          ["", "", "", "", " "],
          ["", "", "", "", " "],
          ["", "", "", "", " "]
        ]
      },
      formData:{
                                                                // New Supplier
          txtSupplierName:{
            value:''
          },
          txtSupplierCompany:{
            value:''
          },
          txtSupplierCity:{
            value:''
          },
          txtSupplierProvince:{
            value:''
          },
          txtSupplierAddress:{
            value:''
          },
          txtSupplierZip:{
            value:''
          },
          txtSupplierCountry:{
            value:''
          },
          txtSupplierEmail:{
            value:''
          },
          txtSupplierTelephone1:{
            value:''
          },
          txtSupplierFax:{
            value:''
          },
          txtSupplierTollFree:{
            value:''
          },
          txtSupplierTelephone2:{
            value:''
          },
          txtSupplierExtension:{
            value:''
          },
                                                                //Billing Company 
          txtBillingCity:{
            value:''
          },
          txtBillingProvince:{
            value:''
          },
          txtBillingAddress:{
            value:''
          },
          txtBillingZip:{
            value:''
          },
          txtBillingCountry:{
            value:''
          },
          txtBillingEmail:{
            value:''
          },
          txtBillingTelephone1:{
            value:''
          },
          txtBillingFax:{
            value:''
          },
          txtBillingTollFree:{
            value:''
          },
          txtBillingTelephone2:{
            value:''
          },
          txtBillingExtension:{
            value:''
          },
                                                                          //Additional Contact

          txtAdditionalName:{
            value:''
          },
          txtAdditionalEmail:{
            value:''
          },
          txtAAdditionalTelephone1:{
            value:''
          },
          txtAdditionalFax:{
            value:''
          },
          txtAdditionalTollFree:{
            value:''
          },
          txtSupplierName:{
            value:''
          },
          txtAdditionalExtension:{
            value:''
          },
          txtComment:{
            value:''
          }
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
  this.setState({
    isSubmit: true,
  })
  console.log(JSON.stringify(this.state.formData)) 
}

  render() {
    let control;
    if (this.state.isSubmit) {
      control =
        <ControllerAddNewSupplier formData={this.state.formData}>
          { getdata =>
            <div>
              <p>returned value: {getdata.obj.msg}</p>
            </div>
          }
        </ControllerAddNewSupplier>
    } else {
      control = <div></div>
    }
    return (
      <div>
      {control}

      <Form onSubmit={this.handleSubmit}>
        <ILabel text={"Add New Supplier"} class={"ui header"} />
        <Form.Group>
          <ILabel text={"Supplier Information"} class={"ui header"} />
        </Form.Group>
        <Form.Group width={6}>
        
          <IInput
             name="txtSupplierName"
             value={this.state.formData.txtSupplierName.value}
             onChange={this.changeHandler}
            id={"txtSupplierName"}
            label={"Name"}
            width={4}
          />
          <IInput
             name="txtSupplierCompany"
             value={this.state.formData.txtSupplierCompany.value}
             onChange={this.changeHandler}
            id={"txtSupplierCompany"}
            label={"Company"}
            width={4}
          />
        </Form.Group>
        <Form.Group>
          <IInput
          
             name="txtSupplierCity"
             value={this.state.formData.txtSupplierCity.value}
             onChange={this.changeHandler}
            id={"txtSupplierCity"}
            label={"City"}
            width={4}
          />
          <IInput
             name="txtSupplierProvince"
             value={this.state.formData.txtSupplierProvince.value}
             onChange={this.changeHandler}
            id={"txtSupplierProvince"}
            label={"Prov/State"}
            width={2}
          />
          <IInput
             name="txtSupplierAddress"
             value={this.state.formData.txtSupplierAddress.value}
             onChange={this.changeHandler}
            id={"txtSupplierAddress"}
            label={"Address"}
            width={6}
          />
          <IInput
             name="txtSupplierZip"
             value={this.state.formData.txtSupplierZip.value}
             onChange={this.changeHandler}
            id={"txtSupplierZip"}
            label={"Zip/Postal"}
            width={2}
          />
          <IInput
             name="txtSupplierCountry"
             value={this.state.formData.txtSupplierCountry.value}
             onChange={this.changeHandler}
            id={"txtSupplierCountry"}
            label={"Country"}
            width={2}
          />
        </Form.Group>
        <Form.Group>
          <IInput
             name="txtSupplierEmail"
             value={this.state.formData.txtSupplierEmail.value}
             onChange={this.changeHandler}
            id={"txtSupplierEmail"}
            label={"Email"}
            width={4}
          />
          
          <IInput
             name="txtSupplierTelephone1"
             value={this.state.formData.txtSupplierTelephone1.value}
             onChange={this.changeHandler}
            id={"txtSupplierTelephone1"}
            label={"Telephone"}
            width={4}
          />
          <IInput
             name="txtSupplierFax"
             value={this.state.formData.txtSupplierFax.value}
             onChange={this.changeHandler}
            id={"txtSupplierFax"}
            label={"Fax"}
            width={4}
          />
        </Form.Group>

        <Form.Group>
          <IInput
          
             name="txtSupplierTollFree"
             value={this.state.formData.txtSupplierTollFree.value}
             onChange={this.changeHandler}
            id={"txtSupplierTollFree"}
            label={"Toll Free"}
            width={4}
          />
          <IInput
             name="txtSupplierTelephone2"
            value={this.state.formData.txtSupplierTelephone2.value}
             onChange={this.changeHandler}
            id={"txtSupplierTelephone2"}
            label={"Telephone"}
            width={4}
          />
          <IInput
             name="txtSupplierExtension"
             value={this.state.formData.txtSupplierExtension.value}
             onChange={this.changeHandler}
            id={"txtSupplierExtension"}
            label={"Extension"}
            width={2}
          />
        </Form.Group>
        <Form.Group>
          <ILabel text={"Billing Company"} class={"ui header"} />
        </Form.Group>
        <Form.Group>
          <IInput
             name="txtBillingCity"
             value={this.state.formData.txtBillingCity.value}
             onChange={this.changeHandler}
            id={"txtBillingCity"}
            label={"City"}
            width={4}
          />
          <IInput
             name="txtBillingProvince"
             value={this.state.formData.txtBillingProvince.value}
             onChange={this.changeHandler}
            id={"txtBillingProvince"}
            label={"Prov/State"}
            width={2}
          />
          <IInput
             name="txtBillingAddress"
             value={this.state.formData.txtBillingAddress.value}
             onChange={this.changeHandler}
            id={"txtBillingAddress"}
            label={"Address"}
            width={6}
          />
          <IInput
             name="txtBillingZip"
             value={this.state.formData.txtBillingZip.value}
             onChange={this.changeHandler}
            id={"txtBillingZip"}
            label={"Zip/Postal code"}
            width={2}
          />
          <IInput
             name="txtBillingCountry"
             value={this.state.formData.txtBillingCountry.value}
             onChange={this.changeHandler}
            id={"txtBillingCountry"}
            label={"Country"}
            width={2}
          />
        </Form.Group>
        <Form.Group>
          <IInput
             name="txtBillingEmail"
             value={this.state.formData.txtBillingEmail.value}
             onChange={this.changeHandler}
            id={"txtBillingEmail"}
            label={"Email"}
            width={4}
          />
          <IInput
             name="txtBillingTelephone1"
             value={this.state.formData.txtBillingTelephone1.value}
             onChange={this.changeHandler}
            id={"txtBillingTelephone1"}
            label={"Telephone"}
            width={4}
          />
          <IInput
             name="txtBillingFax"
             value={this.state.formData.txtBillingFax.value}
             onChange={this.changeHandler}
            id={"txtBillingFax"}
            label={"Fax"}
            width={4}
          />   
        </Form.Group>

        <Form.Group>
          <IInput
             name="txtBillingTollFree"
             value={this.state.formData.txtBillingTollFree.value}
             onChange={this.changeHandler}
            id={"txtBillingTollFree"}
            label={"Toll Free"}
            width={4}
          />
          <IInput
             name="txtBillingTelephone2"
             value={this.state.formData.txtBillingTelephone2.value}
             onChange={this.changeHandler}
            id={"txtBillingTelephone2"}
            label={"Telephone"}
            width={4}
          />
          <IInput
             name="txtBillingExtension"
             value={this.state.formData.txtBillingExtension.value}
             onChange={this.changeHandler}
            id={"txtBillingExtension"}
            label={"Extension"}
            width={2}
          />
        </Form.Group>
        <Form.Group></Form.Group>
        <Form.Group>
          <ILabel text={"Add more contacts"} class={"ui header"} />
        </Form.Group>
        <Form.Group>
          <IInput
             name="txtAdditionalName"
             value={this.state.formData.txtAdditionalName.value}
             onChange={this.changeHandler}
            id={"txtAdditionalName"}
            label={"Name"}
            width={4}
          />
        </Form.Group>
        <Form.Group>
          <IInput
             name="txtAdditionalEmail"
             value={this.state.formData.txtAdditionalEmail.value}
             onChange={this.changeHandler}
            id={"txtAdditionalEmail"}
            label={"Email"}
            width={4}
          />
          <IInput
             name="txtAAdditionalTelephone1"
             value={this.state.formData.txtAAdditionalTelephone1.value}
             onChange={this.changeHandler}
            id={"txtAAdditionalTelephone1"}
            label={"Telephone"}
            width={4}
          />
          
          <IInput
             name="txtAdditionalFax"
             value={this.state.formData.txtAdditionalFax.value}
             onChange={this.changeHandler}
            id={"txtAdditionalFax"}
            label={"Fax"}
            width={4}
          />
        </Form.Group>
        <Form.Group>
          <IInput
             name="txtAdditionalTollFree"
             value={this.state.formData.txtAdditionalTollFree.value}
             onChange={this.changeHandler}
            id={"txtAdditionalTollFree"}
            label={"Toll Free"}
            width={4}
          />
          <IInput
             name="txtAdditionalTelephone2"
             value={this.state.formData.txtSupplierName.value}
             onChange={this.changeHandler}
            id={"txtAdditionalTelephone2"}
            label={"Telephone"}
            width={4}
          />
          <IInput
             name="txtAdditionalExtension"
             value={this.state.formData.txtAdditionalExtension.value}
             onChange={this.changeHandler}
            id={"txtAdditionalExtension"}
            label={"Extension"}
            width={2}
          />
          <IAdd
            name={"btnAdditionalContact"}
            id={"btnAdditionalContact"}
            text={"Add more Contacts"}
            icon={"plus"}
          />
        </Form.Group>
        <ITable
          data={this.state.table}
          name={"tblAddNewSupplier"}
          id={"tblAddNewSupplier"}
        />
        <Form.Group>
          <ILabel text={"Comments"} class={"ui header"} />
        </Form.Group>
        <Form.Group>
          <ITextArea name="txtComment"
             value={this.state.formData.txtComment.value}
             onChange={this.changeHandler} id={"txtComment"} label={"Comments"} />
        </Form.Group>
        <Grid>
          <Grid.Row>
            <Grid.Column width={14}></Grid.Column>
            <Grid.Column width={2}>
              <Form.Group>
                <IButton
                  text="Save"
                  id={"btnSave"}
                  name={"btnSave"}
                  align={"right"}
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

export default FrmAddNewSupplier;
