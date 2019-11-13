import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import ILabel from "../basic/ilabel";
import ITextArea from "../basic/itextarea";
import { Form } from "semantic-ui-react";
import IInput from "../basic/input";
import ITable from "../table/itable";
import IAdd from "../basic/iadd";
import IButton from "../basic/ibutton";
class FrmAddNewSupplier extends Component {
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
        <ILabel text={"Add New Supplier"} class={"ui header"} />
        <Form.Group>
          <ILabel text={"Supplier Information"} class={"ui header"} />
        </Form.Group>
        <Form.Group width={6}>
          <IInput
            name={"txtSupplierName"}
            id={"txtSupplierName"}
            label={"Name"}
            width={4}
          />
          <IInput
            name={"txtSupplierCompany"}
            id={"txtSupplierCompany"}
            label={"Company"}
            width={4}
          />
        </Form.Group>
        <Form.Group>
          <IInput
            name={"txtSupplierCity"}
            id={"txtSupplierCity"}
            label={"City"}
            width={4}
          />
          <IInput
            name={"txtSupplierProvince"}
            id={"txtSupplierProvince"}
            label={"Prov/State"}
            width={2}
          />
          <IInput
            name={"txtSupplierAddress"}
            id={"txtSupplierAddress"}
            label={"Address"}
            width={6}
          />
          <IInput
            name={"txtSupplierCountry"}
            id={"txtSupplierCountry"}
            label={"Country"}
            width={2}
          />
        </Form.Group>
        <Form.Group>
          <IInput
            name={"txtSupplierEmail"}
            id={"txtSupplierEmail"}
            label={"Email"}
            width={4}
          />
          <IInput
            name={"txtSupplierTelephone1"}
            id={"txtSupplierTelephone1"}
            label={"Telephone"}
            width={4}
          />
          <IInput
            name={"txtSupplierFax"}
            id={"txtSupplierFax"}
            label={"Fax"}
            width={4}
          />
        </Form.Group>

        <Form.Group>
          <IInput
            name={"txtSupplierTollFree"}
            id={"txtSupplierTollFree"}
            label={"Toll Free"}
            width={4}
          />
          <IInput
            name={"txtSupplierTelephone"}
            id={"txtSupplierTelephone"}
            label={"Telephone"}
            width={4}
          />
          <IInput
            name={"txtSupplierExtension"}
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
            name={"txtBillingCity"}
            id={"txtBillingCity"}
            label={"City"}
            width={4}
          />
          <IInput
            name={"txtBillingProvine"}
            id={"txtBillingProvince"}
            label={"Prov/State"}
            width={2}
          />
          <IInput
            name={"txtBillingAddress"}
            id={"txtBillingAddress"}
            label={"Address"}
            width={6}
          />
          <IInput
            name={"txtBillingZip"}
            id={"txtBillingZip"}
            label={"Zip/Postal code"}
            width={2}
          />
          <IInput
            name={"txtBillingCountry"}
            id={"txtBillingCountry"}
            label={"Country"}
            width={2}
          />
        </Form.Group>
        <Form.Group>
          <IInput
            name={"txtBillingEmail"}
            id={"txtBillingEmail"}
            label={"Email"}
            width={4}
          />
          <IInput
            name={"txtBillingTelephone1"}
            id={"txtBillingTelephone1"}
            label={"Telephone"}
            width={4}
          />
          <IInput
            name={"txtBillingFax"}
            id={"txtBillingFax"}
            label={"Fax"}
            width={4}
          />
        </Form.Group>

        <Form.Group>
          <IInput
            name={"txtBillingTollFree"}
            id={"txtBillingTollFree"}
            label={"Toll Free"}
            width={4}
          />
          <IInput
            name={"txtBillingTelephone2"}
            id={"txtBillingTelephone2"}
            label={"Telephone"}
            width={4}
          />
          <IInput
            name={"txtBillingExtension"}
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
            name={"txtAdditionalName"}
            id={"txtAdditionalName"}
            label={"Name"}
            width={4}
          />
        </Form.Group>
        <Form.Group>
          <IInput
            name={"txtAdditionalEmail"}
            id={"txtAdditionalEmail"}
            label={"Email"}
            width={4}
          />
          <IInput
            name={"txtAdditionalTelephone1"}
            id={"txtAAdditionalTelephone1"}
            label={"Telephone"}
            width={4}
          />
          <IInput
            name={"txtAdditionalFax"}
            id={"txtAdditionalFax"}
            label={"Fax"}
            width={4}
          />
        </Form.Group>
        <Form.Group>
          <IInput
            name={"txtAdditionalFree"}
            id={"txtAdditionalFree"}
            label={"Toll Free"}
            width={4}
          />
          <IInput
            name={"txtAdditionalTelephone2"}
            id={"txtAdditionalTelephone2"}
            label={"Telephone"}
            width={4}
          />
          <IInput
            name={"txtAdditionalExtension"}
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
          <ITextArea name={"txtComment"} label={"Comments"} />
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

export default FrmAddNewSupplier;
