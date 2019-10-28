
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
      }
    };
  }
  render() {
    return (
      <Form>
        <ILabel text={"Add New Customer"} class={"ui header"} />
        <Form.Group>
          <ILabel text={"Customer Information"} class={"ui header"} />
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
            name={"txtTelephone"}
            id={"txtTelephone"}
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
            name={"txtTelephone"}
            id={"TxtTelephone"}
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
          <ILabel text={"Billing"} class={"ui header"} />
        </Form.Group>
        <Form.Group>
          <IInput
            name={"txtCreditLimit"}
            id={"txtCreditLimit"}
            label={"Credit Limit"}
            width={4}
          />
        </Form.Group>
        <Form.Group>
          <IInput
            name={"txtLaborPrice"}
            id={"txtLaborPrice"}
            label={"Labor Price"}
          />
          <IAdd
            name={"btnAddmorePrices"}
            id={"btnAddmorePrices"}
            text={"Add more prices"}
          />
          <IInput
            name={"txtPartsDiscount"}
            id={"txtPartsDiscount"}
            label={"Parts Discount"}
          />
          <IAdd
            name={"btnAddmoreDiscount"}
            id={"btnAddmoreDiscount"}
            text={"Add more discount"}
          />
          <IInput
            name={"btnLaborDiscount"}
            id={"btnLaborDiscount"}
            label={"Labor Discount"}
          />
          <IAdd
            name={"btnAddmoreDiscount"}
            id={"btnAddmoreDiscount"}
            text={"Add more discount"}
          />
        </Form.Group>
        <Form.Group>
          <ILabel text={"Add more contacts"} class={"ui header"} />
        </Form.Group>
        <Form.Group>
          <IInput label={"Name"} width={4} />
        </Form.Group>
        <Form.Group>
          <IInput name={"txtEmail"} id={"txtEmail"} label={"Email"} width={4} />
          <IInput
            name={"txtTelephone"}
            id={"txtTelephone"}
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
            name={"txtTelephone"}
            id={"TxtTelephone"}
            label={"Telephone"}
            width={4}
          />
          <IInput
            name={"txtExtension"}
            id={"txtExtension"}
            label={"Extension"}
            width={2}
          />
          <IAdd
            name={"btnAddmoreContacts"}
            id={"btnAddmoreContacts"}
            text={"Add more Contacts"}
          />
        </Form.Group>
        <ITable
          data={this.state.table}
          name={"tblAddNewCustomer"}
          id={"tblAddNewCustomer"}
        />
        <Form.Group>
          <ILabel text={"Comments"} class={"ui header"} />
        </Form.Group>
        <Form.Group>
          <ITextArea
            name={"txtComments"}
            id={"txtComments"}
            label={"Comments"}
          />
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
    );
  }
}

export default FrmAddNewCustomer;
