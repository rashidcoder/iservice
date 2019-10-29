import React, { Component } from "react";
import ILabel from "../basic/ilabel";
import ITextArea from "../basic/itextarea";
import { Form } from "semantic-ui-react";
import IInput from "../basic/input";
import ITable from "../table/itable";

class FrmPreviewCustomer extends Component {
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
        <ILabel text={"Company Name"} class={"ui header"} />
        <Form.Group>
          <ILabel text={"Customer Information"} class={"ui header"} />
        </Form.Group>
        <Form.Group width={6}>
          <IInput name={"txtName"} id={"txtName"} label={"Name"} width={4} />
          <IInput name={"txtCompany"} id={"txtCompany"} label={"Company"} width={4} />
          <IInput   text={"Customer Type"}
            placeholder={"Customer Type"}
            width={4}
            name={"txtCustomerType"} id={"txtCustomerType"}/>
        </Form.Group>
        <Form.Group>
          <IInput name={"txtCity"} id={"txtCity"} label={"City"} width={4} />
          <IInput name={"txtProvince"} id={"txtProvince"} label={"Prov/State"} width={2} />
          <IInput name={"txtAddress"} id={"txtAddress"} label={"Address"} width={6} />
          <IInput name={"txtZip"} id={"txtZip"} label={"Zip/Postal code"} width={2} />
          <IInput name={"txtCountry"} id={"txtCountry"} label={"Country"} width={2} />
        </Form.Group>
        <Form.Group>
          <IInput name={"txtEmail"} id={"txtEmail"} label={"Email"} width={4} />
          <IInput name={"txtTelephone1"} id={"txtTelephone1"} label={"Telephone"} width={4} />
          <IInput name={"txtFax"} id={"txtFax"} label={"Fax"} width={4} />
        </Form.Group>

        <Form.Group>
          <IInput name={"txtTollFree"} id={"txtTollFree"} label={"Toll Free"} width={4} />
          <IInput name={"txtTelephone2"} id={"TxtTelephone2"} label={"Telephone"} width={4} />
          <IInput name={"txtExtension"} id={"txtExtension"} label={"Extension"} width={2} />
        </Form.Group>
        <Form.Group>
          <ILabel text={"Billing"} class={"ui header"} />
        </Form.Group>
        <Form.Group>
          <IInput name={"txtCreditLimit"} id={"txtCreditLimit"} label={"Credit Limit"} width={4} />
        </Form.Group>
        <Form.Group>
          <IInput name={"txtLaborPrice"} id={"txtLaborPrice"} label={"Labor Price"} />

          <IInput name={"txtPartsDiscount"} id={"PartsDiscount"} label={"Parts Discount"} />

          <IInput name={"txtLaborDiscount"} id={"txtLaborDiscount"} label={"Labor Discount"} />
        </Form.Group>
        <Form.Group>
          <ILabel text={"Additional Contacts"} class={"ui header"} />
        </Form.Group>
        <ITable data={this.state.table}  name={"tblPreviewCustomer"} id={"tblPreviewCustomer"}/>
        <Form.Group>
          <ILabel text={"Comments"} class={"ui header"} />
        </Form.Group>
        <ITextArea name={"txtComment"} id={"txtComment"} label={"Comments"} />
      </Form>
    );
  }
}

export default FrmPreviewCustomer;
