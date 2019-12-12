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
          txtBillingtollFree:{
            value:''
          },
          txtBillingelephone2:{
            value:''
          },
          txtBillingtExtension:{
            value:''
          },
                                                                          //Additional Contact

          txtAdditionalName:{
            value:''
          },
          txtAdditionalEmail:{
            value:''
          },
          txtAdditionalTelephone1:{
            value:''
          },
          txtAadditionalFax:{
            value:''
          },
          txtAdditionalTollFree:{
            value:''
          },
          txtAdditionalTelephone2:{
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
    const {isSubmit,table,formData}=this.state
    let control;
    if (isSubmit) {
      control =
        <ControllerAddNewSupplier formData={formData}>
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
             name="txtSupplierZip"
             value={formData.txtSupplierZip.value}
             onChange={this.changeHandler}
            id={"txtSupplierZip"}
            label={"Zip/Postal"}
            width={2}
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
        </Form.Group>
        <Form.Group>
          <ILabel text={"Billing Company"} class={"ui header"} />
        </Form.Group>
        <Form.Group>
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
          <IInput
             name="txtBillingAddress"
             value={formData.txtBillingAddress.value}
             onChange={this.changeHandler}
            id={"txtBillingAddress"}
            label={"Address"}
            width={6}
          />
          <IInput
             name="txtBillingZip"
             value={formData.txtBillingZip.value}
             onChange={this.changeHandler}
            id={"txtBillingZip"}
            label={"Zip/Postal code"}
            width={2}
          />
          <IInput
             name="txtBillingCountry"
             value={formData.txtBillingCountry.value}
             onChange={this.changeHandler}
            id={"txtBillingCountry"}
            label={"Country"}
            width={2}
          />
        </Form.Group>
        <Form.Group>
          <IInput
             name="txtBillingEmail"
             value={formData.txtBillingEmail.value}
             onChange={this.changeHandler}
            id={"txtBillingEmail"}
            label={"Email"}
            width={4}
          />
          <IInput
             name="txtBillingTelephone1"
             value={formData.txtBillingTelephone1.value}
             onChange={this.changeHandler}
            id={"txtBillingTelephone1"}
            label={"Telephone"}
            width={4}
          />
          <IInput
             name="txtBillingFax"
             value={formData.txtBillingFax.value}
             onChange={this.changeHandler}
            id={"txtBillingFax"}
            label={"Fax"}
            width={4}
          />   
        </Form.Group>

        <Form.Group>
          <IInput
             name="txtBillingtollFree"
             value={formData.txtBillingtollFree.value}
             onChange={this.changeHandler}
            id={"txtBillingtollFree"}
            label={"Toll Free"}
            width={4}
          />
          <IInput
             name="txtBillingelephone2"
             value={formData.txtBillingelephone2.value}
             onChange={this.changeHandler}
            id={"txtBillingelephone2"}
            label={"Telephone"}
            width={4}
          />
          <IInput
             name="txtBillingtExtension"
             value={formData.txtBillingtExtension.value}
             onChange={this.changeHandler}
            id={"txtBillingtExtension"}
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
             value={formData.txtAdditionalName.value}
             onChange={this.changeHandler}
            id={"txtAdditionalName"}
            label={"Name"}
            width={4}
          />
        </Form.Group>
        <Form.Group>
          <IInput
             name="txtAdditionalEmail"
             value={formData.txtAdditionalEmail.value}
             onChange={this.changeHandler}
            id={"txtAdditionalEmail"}
            label={"Email"}
            width={4}
          />
          <IInput
             name="txtAdditionalTelephone1"
             value={formData.txtAdditionalTelephone1.value}
             onChange={this.changeHandler}
            id={"txtAdditionalTelephone1"}
            label={"Telephone"}
            width={4}
          />
          
          <IInput
             name="txtAadditionalFax"
             value={formData.txtAadditionalFax.value}
             onChange={this.changeHandler}
            id={"txtAadditionalFax"}
            label={"Fax"}
            width={4}
          />
        </Form.Group>
        <Form.Group>
          <IInput
             name="txtAdditionalTollFree"
             value={formData.txtAdditionalTollFree.value}
             onChange={this.changeHandler}
            id={"txtAdditionalTollFree"}
            label={"Toll Free"}
            width={4}
          />
          <IInput
             name="txtAdditionalTelephone2"
             value={formData.txtAdditionalTelephone2.value}
             onChange={this.changeHandler}
            id={"txtAdditionalTelephone2"}
            label={"Telephone"}
            width={4}
          />
          <IInput
             name="txtAdditionalExtension"
             value={formData.txtAdditionalExtension.value}
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
          data={table}
          name={"tblAddNewSupplier"}
          id={"tblAddNewSupplier"}
        />
        <Form.Group>
          <ILabel text={"Comments"} class={"ui header"} />
        </Form.Group>
        <Form.Group>
          <ITextArea name="txtComment"
             value={formData.txtComment.value}
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






















