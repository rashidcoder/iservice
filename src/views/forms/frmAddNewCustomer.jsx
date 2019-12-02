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
import ControllerAddNewCustomer from "../../controllers/controllerAddNewCustomer";
class FrmAddNewCustomer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSubmit: false,
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
        customername: {
          value: ''
        },
        customercompany: {
          value: ''
        },
        customertype: {
          value: '',
          options: [
           
            { key: "local", value: "1", text: "Local" },
            { key: "external", value: "2", text: "External" },
          ]
        },
        customercity: {
          value: ''
        },
        customerprovince: {
          value: ''
        },
        customeraddress: {
          value: ''
        },
        customerzip: {
          value: ''
        },
        customercountry: {
          value: ''
        },
        customeremail: {
          value: ''
        },
        customertelephone1: {
          value: ''
        },
        txtfax: {
          value: ''
        },
        customertollfree: {
          value: ''
        },
        customertelephone2: {
          value: ''
        },
        customerextension: {
          value: ''
        },

        //Billing

        creditlimit: {
          value: ''
        },
        laborprice: {
          value: ''
        },
        partsdiscount: {
          value: ''
        },
        labordiscount: {
          value: ''
        },
        //Add More Contact
        additionalname: {
          value: ''
        },
        additionalemail: {
          value: ''
        },
        additionaltelephone1: {
          value: ''
        },
        additionalfax: {
          value: ''
        },
        additionaltollfree: {
          value: ''
        },
        additionaltelephone2: {
          value: ''
        },
        additionalextension: {
          value: ''
        },
        //comments
        txtcomments: {
          value: ''

        },
      }
    };
  }
  changeHandler = event => {

    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      isSubmit: false,
      formData: {
        ...this.state.formData,
        [name]: {
          ...this.state.formData[name],
          value
        }
      }
    });
    console.log(' value of object is  ' + JSON.stringify(this.state.formData))
  }
  selectchangeHandler = (e, { name, value }) => {
    this.setState({
      isSubmit: false,
    })
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
    let control;
    if (this.state.isSubmit) {
      control =
        <ControllerAddNewCustomer formData={this.state.formData}>
          { getdata =>
            <div>
              <p>returned value: {getdata.obj.msg}</p>
            </div>
          }
        </ControllerAddNewCustomer>
    } else {
      control = <div></div>
    }
    return (
      <div>

        {control}

        <Form onSubmit={this.handleSubmit}>

          {/*  Customer Information */}

          <ILabel text={"Add New Customer"} class={"ui header"} />
          <Form.Group>
            <ILabel text={"Customer Information"} class={"ui header"} />
          </Form.Group>
          <Form.Group width={6}>
            <IInput
              id={"customername"}
              label={"Name"}
              width={4}
              name="customername"
              value={this.state.formData.customername.value}
              onChange={this.changeHandler}

            />
            <IInput
              name="customercompany"
              value={this.state.formData.customercompany.value}
              onChange={this.changeHandler}
              id={"customercompany"}
              label={"Company"}
              width={4}
            />
            <ISelect
              name="customertype"
              value={this.state.formData.customertype.value}
              onChange={this.selectchangeHandler}
              options={this.state.formData.customertype.options}
              text={"Customer Type"}
              placeholder={"Customer Type"}
              width={4}
              id={"customertype"}
            />
          </Form.Group>
          <Form.Group>
            <IInput name="customercity"
              value={this.state.formData.customercity.value}
              onChange={this.changeHandler} id={"customercity"} label={"City"} width={4} />
            <IInput
              name="customerprovince"
              value={this.state.formData.customerprovince.value}
              onChange={this.changeHandler}
              id={"customerprovince"}
              label={"Prov/State"}
              width={2}
            />
            <IInput
              name="customeraddress"
              value={this.state.formData.customeraddress.value}
              onChange={this.changeHandler}
              id={"customeraddress"}
              label={"Address"}
              width={6}
            />
            <IInput
              name="customerzip"
              value={this.state.formData.customerzip.value}
              onChange={this.changeHandler}
              id={"customerzip"}
              label={"Zip/Postal code"}
              width={2}
            />
            <IInput
              name="customercountry"
              value={this.state.formData.customercountry.value}
              onChange={this.changeHandler}
              id={"customercountry"}
              label={"Country"}
              width={2}
            />
          </Form.Group>
          <Form.Group>
            <IInput name="customeremail"
              value={this.state.formData.customeremail.value}
              onChange={this.changeHandler} id={"customeremail"} label={"Email"} width={4} />
            <IInput
              name="customertelephone1"
              value={this.state.formData.customertelephone1.value}
              onChange={this.changeHandler}
              id={"customertelephone1"}
              label={"Telephone"}
              width={4}
            />
            <IInput name="txtfax"
              value={this.state.formData.txtfax.value}
              onChange={this.changeHandler} id={"txtfax"} label={"Fax"} width={4} />
          </Form.Group>

          <Form.Group>
            <IInput
              name="customertollfree"
              value={this.state.formData.customertollfree.value}
              onChange={this.changeHandler}
              id={"customertollfree"}
              label={"Toll Free"}
              width={4}
            />
            <IInput
              name="customertelephone2"
              value={this.state.formData.customertelephone2.value}
              onChange={this.changeHandler}
              id={"customertelephone2"}
              label={"Telephone"}
              width={4}
            />
            <IInput
              name="customerextension"
              value={this.state.formData.customerextension.value}
              onChange={this.changeHandler}
              id={"customerextension"}
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
              name="creditlimit"
              value={this.state.formData.creditlimit.value}
              onChange={this.changeHandler}
              id={"creditlimit"}
              label={"Credit Limit"}
              width={4}
            />
          </Form.Group>
          <Form.Group>
            <IInput
              name="laborprice"
              value={this.state.formData.laborprice.value}
              onChange={this.changeHandler}
              id={"laborprice"}
              label={"Labor Price"}
            />
            <IAdd
              name={"btnAddmorePrices"}
              id={"btnAddmorePrices"}
              text={"Add more prices"}
              icon={"plus"}
            />

            <IInput
              name="partsdiscount"
              value={this.state.formData.partsdiscount.value}
              onChange={this.changeHandler}
              id={"partsdiscount"}
              label={"Parts Discount"}
            />
            <IAdd
              name={"btnAddmoreDiscount"}
              id={"btnAddmoreDiscount"}
              text={"Add more discount"}
              icon={"plus"}
            />

            <IInput
              name="labordiscount"
              value={this.state.formData.labordiscount.value}
              onChange={this.changeHandler}
              id={"labordiscount"}
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

            <IInput name="additionalname"
              value={this.state.formData.additionalname.value}
              onChange={this.changeHandler} id={"additionalname"} label={"Name"} width={4} />
          </Form.Group>
          <Form.Group>
            <IInput name="additionalemail"
              value={this.state.formData.additionalemail.value}
              onChange={this.changeHandler} id={"additionalemail"} label={"Email"} width={4} />
            <IInput
              name="additionaltelephone1"
              value={this.state.formData.additionaltelephone1.value}
              onChange={this.changeHandler}
              id={"additionaltelephone1"}
              label={"Telephone"}
              width={4}
            />
            <IInput name="additionalfax"
              value={this.state.formData.additionalfax.value}
              onChange={this.changeHandler} id={"additionalfax"} label={"Fax"} width={4} />
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
              name="txtcomments"
              value={this.state.formData.txtcomments.value}
              onChange={this.changeHandler}
              id={"txtcomments"}
              label={"Comments"}
            />
          </Form.Group>

          <Grid>
            <Grid.Row>
              <Grid.Column width={14}></Grid.Column>
              <Grid.Column width={2}>
                <Form.Group>
                  <h1>{this.state.formData.customername.value}</h1>
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






