
import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import ILabel from "../basic/ilabel";
import ITextArea from "../basic/itextarea";
import { Form } from "semantic-ui-react";
import ISelect from "../basic/iselect";
import IInput from "../basic/input";
import ITable from "../table/itable";
import IAdd from "../basic/iadd";
import IButton from "../basic/ibutton";
import HomeController from "../../controllers/danishControler";
let globalConsole = ''
class FrmAddNewCustomer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      table: {
        title: ["Name", "Telephone", "Email", "Fax", "Telephone(alt)"],
        data: [
          ["", "", "", "", " "],
          ["", "", "", "", " "],
          ["", "", "", "", " "],
          ["", "", "", "", " "],
          ["", "", "", "", " "]
        ]
      },
      formData: {
        check: 0,
                              // Customer Data
        txtCustomerName: {
          value: ''
        },
        txtCustomerCompany: {
          value: ''
        },
        selectCustomerType: {
          value: '',
          options: [
            // { value: 'extnernal', displayValue: 'extnernal'},
            // { value: 'local', displayValue: 'local' },
            // { value: 'extnernal', displayValue: 'extnernal'}
            { key: "local", value: "1", text: "Local" },
            { key: "external", value: "2", text: "External" }, 
          ]
        },
        txtCustomerCity: {
          value: ''
        },
        txtCustomerProvince: {
          value: ''
        },
        txtCustomerAddress: {
          value: ''
        },
        txtCustomerZip: {
          value: ''
        },
        txtCustomerCountry: {
          value: ''
        },
        txtCustomerEmail:{
          value: ''
        },
        txtCustomerTelephone1: {
          value: ''
        },
        txtFax: {
          value: ''
        },
        txtCustomerTollFree: {
          value: ''
        },
        txtCustomerTelephone2: {
          value: ''
        },
        txtCustomerExtension: {
          value: ''
        },

                                                //Billing

        txtCreditLimit: {
          value: ''
        },
        txtLaborPrice: {
          value: ''
        },
        txtPartsDiscount: {
          value: ''
        },
        btnLaborDiscount: {
          value: ''
        },
                                              //Add More Contact
        txtAdditionalName: {
          value: ''
        },
        txtAdditionalEmail: {
          value: ''
        },
        txtAdditionalTelephone1: {
          value: ''
        },
        txtAdditionalFax: {
          value: ''
        },
        txtAdditionalTollFree: {
          value: ''
        },
        TxtAdditionalTelephone2: {
          value: ''
        },
        txtAdditionalExtension: {
          value: ''
        },
                                                //comments
        txtComments: {
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
    
}



selectchangeHandler = (event,data) => {
    
  const name = event.target.name;
  const value = data.text;
  globalConsole = event.target
  console.log("stringfied value of the selected option is ::"+ event.target.name+ " ::: " + data.text);
  
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

}


  handleSubmit = (e) => {

    console.log(JSON.stringify(this.state.formData)) 
  }
  render() {
    return (
      <div>
        <HomeController  formData={this.state.formData}>    
        {getdata =>
          <div>
            <p>returned value: {getdata.obj.customerName}</p>
          </div>
        }
      </HomeController> 
      
      <h1>{this.state.check}</h1>
      
        <Form onSubmit={this.handleSubmit}>

                                                                        {/*  Customer Information */}

          <ILabel text={"Add New Customer"} class={"ui header"} />
          <Form.Group>
            <ILabel text={"Customer Information"} class={"ui header"} />
          </Form.Group>
          <Form.Group width={6}>
            <IInput
              id={"txtCustomerName"}
              label={"Name"}
              width={4}
              name="txtCustomerName"
              value={this.state.formData.txtCustomerName.value}
              onChange={this.changeHandler}

            />
            <IInput
              name="txtCustomerCompany"
              value={this.state.formData.txtCustomerCompany.value}
              onChange={this.changeHandler}
              id={"txtCustomerCompany"}
              label={"Company"}
              width={4}
            />
            <ISelect
              name="selectCustomerType"
              value={this.state.formData.selectCustomerType.value}
              onChange={this.selectchangeHandler}
              options={this.state.formData.selectCustomerType.options}
              text={"Customer Type"}
              placeholder={"Customer Type"}
              width={4}
              id={"selectCustomerType"}
            />
          </Form.Group>
          <Form.Group>
            <IInput name="txtCustomerCity"
              value={this.state.formData.txtCustomerCity.value}
              onChange={this.changeHandler} id={"txtCustomerCity"} label={"City"} width={4} />
            <IInput
              name="txtCustomerProvince"
              value={this.state.formData.txtCustomerProvince.value}
              onChange={this.changeHandler}
              id={"txtCustomerProvince"}
              label={"Prov/State"}
              width={2}
            />
            <IInput
              name="txtCustomerAddress"
              value={this.state.formData.txtCustomerAddress.value}
              onChange={this.changeHandler}
              id={"txtCustomerAddress"}
              label={"Address"}
              width={6}
            />
            <IInput
              name="txtCustomerZip"
              value={this.state.formData.txtCustomerZip.value}
              onChange={this.changeHandler}
              id={"txtCustomerZip"}
              label={"Zip/Postal code"}
              width={2}
            />
            <IInput
              name="txtCustomerCountry"
              value={this.state.formData.txtCustomerCountry.value}
              onChange={this.changeHandler}
              id={"txtCustomerCountry"}
              label={"Country"}
              width={2}
            />
          </Form.Group>
          <Form.Group>
             <IInput name="txtCustomerEmail"
              value={this.state.formData.txtCustomerEmail.value}
              onChange={this.changeHandler} id={"txtCustomerEmail"} label={"Email"} width={4} /> 
            <IInput
              name="txtCustomerTelephone1"
              value={this.state.formData.txtCustomerTelephone1.value}
              onChange={this.changeHandler}
              id={"txtCustomerTelephone1"}
              label={"Telephone"}
              width={4}
            />
            <IInput name="txtFax"
              value={this.state.formData.txtFax.value}
              onChange={this.changeHandler} id={"txtFax"} label={"Fax"} width={4} />
          </Form.Group>

          <Form.Group>
            <IInput
              name="txtCustomerTollFree"
              value={this.state.formData.txtCustomerTollFree.value}
              onChange={this.changeHandler}
              id={"txtCustomerTollFree"}
              label={"Toll Free"}
              width={4}
            />
            <IInput
              name="txtCustomerTelephone2"
              value={this.state.formData.txtCustomerTelephone2.value}
              onChange={this.changeHandler}
              id={"txtCustomerTelephone2"}
              label={"Telephone"}
              width={4}
            />
            <IInput
              name="txtCustomerExtension"
              value={this.state.formData.txtCustomerExtension.value}
              onChange={this.changeHandler}
              id={"txtCustomerExtension"}
              label={"Extension"}
              width={2}
            />
          </Form.Group>
                                                                              {/*  Billing */}
          <Form.Group>
            <ILabel text={"Billing"} class={"ui header"} />
          </Form.Group>
          <Form.Group>

            <IInput
              name="txtCreditLimit"
              value={this.state.formData.txtCreditLimit.value}
              onChange={this.changeHandler}
              id={"txtCreditLimit"}
              label={"Credit Limit"}
              width={4}
            />
          </Form.Group>
          <Form.Group>
            <IInput
              name="txtLaborPrice"
              value={this.state.formData.txtLaborPrice.value}
              onChange={this.changeHandler}
              id={"txtLaborPrice"}
              label={"Labor Price"}
            />
            <IAdd
              name={"btnAddmorePrices"}
              id={"btnAddmorePrices"}
              text={"Add more prices"}
              icon={"plus"}
            />

            <IInput
              name="txtPartsDiscount"
              value={this.state.formData.txtPartsDiscount.value}
              onChange={this.changeHandler}
              id={"txtPartsDiscount"}
              label={"Parts Discount"}
            />
            <IAdd
              name={"btnAddmoreDiscount"}
              id={"btnAddmoreDiscount"}
              text={"Add more discount"}
              icon={"plus"}
            />

            <IInput
              name="btnLaborDiscount"
              value={this.state.formData.btnLaborDiscount.value}
              onChange={this.changeHandler}
              id={"btnLaborDiscount"}
              label={"Labor Discount"}
            />
            <IAdd
              name={"btnAddmoreDiscount"}
              id={"btnAddmoreDiscount"}
              text={"Add more discount"}
              icon={"plus"}
            />
          </Form.Group>
                                                                                  {/*  Add more Contacts */}
          <Form.Group>
            <ILabel text={"Add more contacts"} class={"ui header"} />
          </Form.Group>
          <Form.Group>

            <IInput name="txtAdditionalName"
              value={this.state.formData.txtAdditionalName.value}
              onChange={this.changeHandler} id={"txtAdditionalName"} label={"Name"} width={4} />
          </Form.Group>
          <Form.Group>
            <IInput name="txtAdditionalEmail"
              value={this.state.formData.txtAdditionalEmail.value}
              onChange={this.changeHandler} id={"txtAdditionalEmail"} label={"Email"} width={4} />
            <IInput
              name="txtAdditionalTelephone1"
              value={this.state.formData.txtAdditionalTelephone1.value}
              onChange={this.changeHandler}
              id={"txtAdditionalTelephone1"}
              label={"Telephone"}
              width={4}
            />
            <IInput name="txtAdditionalFax"
              value={this.state.formData.txtAdditionalFax.value}
              onChange={this.changeHandler} id={"txtAdditionalFax"} label={"Fax"} width={4} />
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
              name="TxtAdditionalTelephone2"
              value={this.state.formData.TxtAdditionalTelephone2.value}
              onChange={this.changeHandler}
              id={"TxtAdditionalTelephone2"}
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
              name={"btnAddmoreContacts"}
              id={"btnAddmoreContacts"}
              text={"Add more Contacts"}
              icon={"plus"}
            />
          </Form.Group>
          <ITable
            data={this.state.table}
            name={"tblAddNewCustomer"}
            id={"tblAddNewCustomer"}
          />
          <Form.Group>
                                                                                     {/*  Contacts */}

            <ILabel text={"Comments"} class={"ui header"} />
          </Form.Group>
          <Form.Group>
            <ITextArea
              name="txtComments"
              value={this.state.formData.txtComments.value}
              onChange={this.changeHandler}
              id={"txtComments"}
              label={"Comments"}
            />
          </Form.Group>

          <Grid>
            <Grid.Row>
              <Grid.Column width={14}></Grid.Column>
              <Grid.Column width={2}>
                <Form.Group>
                <h1>{this.state.formData.txtCustomerName.value}</h1>
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

export default FrmAddNewCustomer;

