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
          suppliername:{
            value:''
          },
          suppliercompany:{
            value:''
          },
          suppliercity:{
            value:''
          },
          supplierprovince:{
            value:''
          },
          supplieraddress:{
            value:''
          },
          supplierzip:{
            value:''
          },
          suppliercountry:{
            value:''
          },
          supplieremail:{
            value:''
          },
          suppliertelephone1:{
            value:''
          },
          supplierfax:{
            value:''
          },
          suppliertollfree:{
            value:''
          },
          suppliertelephone2:{
            value:''
          },
          supplierextension:{
            value:''
          },
                                                                //Billing Company 
          billingcity:{
            value:''
          },
          billingprovince:{
            value:''
          },
          billingaddress:{
            value:''
          },
          billingzip:{
            value:''
          },
          billingcountry:{
            value:''
          },
          billingemail:{
            value:''
          },
          billingtelephone1:{
            value:''
          },
          billingfax:{
            value:''
          },
          billingtollfree:{
            value:''
          },
          billingtelephone2:{
            value:''
          },
          billingtextension:{
            value:''
          },
                                                                          //Additional Contact

          additionalname:{
            value:''
          },
          additionalemail:{
            value:''
          },
          additionaltelephone1:{
            value:''
          },
          additionalfax:{
            value:''
          },
          additionaltollfree:{
            value:''
          },
          additionaltelephone2:{
            value:''
          }, 
          additionalextension:{
            value:''
          },
          comment:{
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
             name="suppliername"
             value={this.state.formData.suppliername.value}
             onChange={this.changeHandler}
            id={"suppliername"}
            label={"Name"}
            width={4}
          />
          <IInput
             name="suppliercompany"
             value={this.state.formData.suppliercompany.value}
             onChange={this.changeHandler}
            id={"suppliercompany"}
            label={"Company"}
            width={4}
          />
        </Form.Group>
        <Form.Group>
          <IInput
          
             name="suppliercity"
             value={this.state.formData.suppliercity.value}
             onChange={this.changeHandler}
            id={"suppliercity"}
            label={"City"}
            width={4}
          />
          <IInput
             name="supplierprovince"
             value={this.state.formData.supplierprovince.value}
             onChange={this.changeHandler}
            id={"supplierprovince"}
            label={"Prov/State"}
            width={2}
          />
          <IInput
             name="supplieraddress"
             value={this.state.formData.supplieraddress.value}
             onChange={this.changeHandler}
            id={"supplieraddress"}
            label={"Address"}
            width={6}
          />
          <IInput
             name="supplierzip"
             value={this.state.formData.supplierzip.value}
             onChange={this.changeHandler}
            id={"supplierzip"}
            label={"Zip/Postal"}
            width={2}
          />
          <IInput
             name="suppliercountry"
             value={this.state.formData.suppliercountry.value}
             onChange={this.changeHandler}
            id={"suppliercountry"}
            label={"Country"}
            width={2}
          />
        </Form.Group>
        <Form.Group>
          <IInput
             name="supplieremail"
             value={this.state.formData.supplieremail.value}
             onChange={this.changeHandler}
            id={"supplieremail"}
            label={"Email"}
            width={4}
          />
          
          <IInput
             name="suppliertelephone1"
             value={this.state.formData.suppliertelephone1.value}
             onChange={this.changeHandler}
            id={"suppliertelephone1"}
            label={"Telephone"}
            width={4}
          />
          <IInput
             name="supplierfax"
             value={this.state.formData.supplierfax.value}
             onChange={this.changeHandler}
            id={"supplierfax"}
            label={"Fax"}
            width={4}
          />
        </Form.Group>

        <Form.Group>
          <IInput
          
             name="suppliertollfree"
             value={this.state.formData.suppliertollfree.value}
             onChange={this.changeHandler}
            id={"suppliertollfree"}
            label={"Toll Free"}
            width={4}
          />
          <IInput
             name="suppliertelephone2"
            value={this.state.formData.suppliertelephone2.value}
             onChange={this.changeHandler}
            id={"suppliertelephone2"}
            label={"Telephone"}
            width={4}
          />
          <IInput
             name="supplierextension"
             value={this.state.formData.supplierextension.value}
             onChange={this.changeHandler}
            id={"supplierextension"}
            label={"Extension"}
            width={2}
          />
        </Form.Group>
        <Form.Group>
          <ILabel text={"Billing Company"} class={"ui header"} />
        </Form.Group>
        <Form.Group>
          <IInput
             name="billingcity"
             value={this.state.formData.billingcity.value}
             onChange={this.changeHandler}
            id={"billingcity"}
            label={"City"}
            width={4}
          />
          <IInput
             name="billingprovince"
             value={this.state.formData.billingprovince.value}
             onChange={this.changeHandler}
            id={"billingprovince"}
            label={"Prov/State"}
            width={2}
          />
          <IInput
             name="billingaddress"
             value={this.state.formData.billingaddress.value}
             onChange={this.changeHandler}
            id={"billingaddress"}
            label={"Address"}
            width={6}
          />
          <IInput
             name="billingzip"
             value={this.state.formData.billingzip.value}
             onChange={this.changeHandler}
            id={"billingzip"}
            label={"Zip/Postal code"}
            width={2}
          />
          <IInput
             name="billingcountry"
             value={this.state.formData.billingcountry.value}
             onChange={this.changeHandler}
            id={"billingcountry"}
            label={"Country"}
            width={2}
          />
        </Form.Group>
        <Form.Group>
          <IInput
             name="billingemail"
             value={this.state.formData.billingemail.value}
             onChange={this.changeHandler}
            id={"billingemail"}
            label={"Email"}
            width={4}
          />
          <IInput
             name="billingtelephone1"
             value={this.state.formData.billingtelephone1.value}
             onChange={this.changeHandler}
            id={"billingtelephone1"}
            label={"Telephone"}
            width={4}
          />
          <IInput
             name="billingfax"
             value={this.state.formData.billingfax.value}
             onChange={this.changeHandler}
            id={"billingfax"}
            label={"Fax"}
            width={4}
          />   
        </Form.Group>

        <Form.Group>
          <IInput
             name="billingtollfree"
             value={this.state.formData.billingtollfree.value}
             onChange={this.changeHandler}
            id={"billingtollfree"}
            label={"Toll Free"}
            width={4}
          />
          <IInput
             name="billingtelephone2"
             value={this.state.formData.billingtelephone2.value}
             onChange={this.changeHandler}
            id={"billingtelephone2"}
            label={"Telephone"}
            width={4}
          />
          <IInput
             name="billingtextension"
             value={this.state.formData.billingtextension.value}
             onChange={this.changeHandler}
            id={"billingtextension"}
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
             name="additionalname"
             value={this.state.formData.additionalname.value}
             onChange={this.changeHandler}
            id={"additionalname"}
            label={"Name"}
            width={4}
          />
        </Form.Group>
        <Form.Group>
          <IInput
             name="additionalemail"
             value={this.state.formData.additionalemail.value}
             onChange={this.changeHandler}
            id={"additionalemail"}
            label={"Email"}
            width={4}
          />
          <IInput
             name="additionaltelephone1"
             value={this.state.formData.additionaltelephone1.value}
             onChange={this.changeHandler}
            id={"additionaltelephone1"}
            label={"Telephone"}
            width={4}
          />
          
          <IInput
             name="additionalfax"
             value={this.state.formData.additionalfax.value}
             onChange={this.changeHandler}
            id={"additionalfax"}
            label={"Fax"}
            width={4}
          />
        </Form.Group>
        <Form.Group>
          <IInput
             name="additionaltollfree"
             value={this.state.formData.additionaltollfree.value}
             onChange={this.changeHandler}
            id={"additionaltollfree"}
            label={"Toll Free"}
            width={4}
          />
          <IInput
             name="additionaltelephone2"
             value={this.state.formData.additionaltelephone2.value}
             onChange={this.changeHandler}
            id={"additionaltelephone2"}
            label={"Telephone"}
            width={4}
          />
          <IInput
             name="additionalextension"
             value={this.state.formData.additionalextension.value}
             onChange={this.changeHandler}
            id={"additionalextension"}
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
          <ITextArea name="comment"
             value={this.state.formData.comment.value}
             onChange={this.changeHandler} id={"comment"} label={"Comments"} />
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






















