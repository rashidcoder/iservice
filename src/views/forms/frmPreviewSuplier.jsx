import React, { Component } from "react";
import ILabel from "../basic/ilabel";
import ITextArea from "../basic/itextarea";
import { Form } from "semantic-ui-react";
import IInput from "../basic/input";
import ITable from "../table/itable";
class FrmPreviewSuplier extends Component {
  constructor(props) {
    super(props);

    this.state = {
      table: {
        title: ["Name", "Telephone", "Email", "Fax", "Telephone(alt)"],
        data: [
          ["Pranas", "828-558-55689", "pranas@email.com", "", " "],
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
          <ILabel text={"Supplier Information"} class={"ui header"} />
        </Form.Group>
        <Form.Group width={6}>
          <IInput name={"txtName"} id={"txtName"} label={"Name"} width={4} />
          <IInput name={"txtCompany"} id={"txtCompany"} label={"Company"} width={4} />
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
          <IInput name={"txtTelephone"} id={"txtTelephone"} label={"Telephone"} width={4} />
          <IInput name={"txtFax"} id={"txtFax"} label={"Fax"} width={4} />
        </Form.Group>

        <Form.Group>
          <IInput name={"txtTollFree"} id={"txtTollFree"} label={"Toll Free"} width={4} />
          <IInput name={"txtTelephone"} id={"TxtTelephone"} label={"Telephone"} width={4} />
          <IInput name={"txtExtension"} id={"txtExtension"} label={"Extension"} width={2} />
        </Form.Group>
        <Form.Group>
          <ILabel text={"Billing Company"} class={"ui header"} />
        </Form.Group>
        <Form.Group>
          <IInput name={"txtBillingCity"} id={"txtBillingCity"} label={"City"} width={4} />
          <IInput name={"txtBillingProvine"} id={"txtBillingProvince"} label={"Prov/State"} width={2} />
          <IInput name={"txtBillingAddress"} id={"txtBillingAddress"} label={"Address"} width={6} />
          <IInput name={"txtBillingZip"} id={"txtBillingZip"} label={"Zip/Postal code"} width={2} />
          <IInput name={"txtBillingCountry"} id={"txtBillingCountry"} label={"Country"} width={2} />
        </Form.Group>
        <Form.Group>
          <IInput name={"txtBillingEmail"} id={"txtBillingEmail"} label={"Email"} width={4} />
          <IInput name={"txtBillingTelephone"} id={"txtBillingTelephone"} label={"Telephone"} width={4} />
          <IInput name={"txtBillingFax"} id={"txtBillingFax"} label={"Fax"} width={4} />
        </Form.Group>

        <Form.Group>
          <IInput name={"txtBillingTollFree"} id={"txtBillingTollFree"}  label={"Toll Free"} width={4} />
          <IInput name={"txtBillingTelephone"} id={"txtBillingTelephone"} label={"Telephone"} width={4} />
          <IInput name={"txtBillingExtension"} id={"txtBillingExtension"} label={"Extension"} width={2} />
        </Form.Group>
        <Form.Group>
          <ILabel text={"Additional Contacts"} class={"ui header"} />
        </Form.Group>
        <ITable name={"tblPreviewSupplier"} id={"tblPreviewSupplier"} data={this.state.table} />
        <Form.Group>
          <ILabel  text={"Comments"} class={"ui header"} />
        </Form.Group>
        <ITextArea name={"txtComment"} id={"txtComment"} label={"Comments"} />
      </Form>
    );
  }
}

export default FrmPreviewSuplier;
