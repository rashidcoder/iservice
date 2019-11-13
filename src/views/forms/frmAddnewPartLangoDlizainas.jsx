import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import ILabel from "../basic/ilabel";
import ITextArea from "../basic/itextarea";
import { Form } from "semantic-ui-react";
import IInput from "../basic/input";
import IAdd from "../basic/iadd";
import ISelect from "../basic/iselect";

class FrmAddnewPartLangoDlizainas extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Form>
        <ILabel text={"Add New Parts"} class={"ui header"} />
        <Form.Group>
          <ILabel text={"Parts Information"} class={"ui header"} />
        </Form.Group>
        <Form.Group widths={4}>
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
        </Form.Group>
        <Form.Group widths={4}>
          <ISelect
            name={"selectCategory"}
            id={"selectCategory"}
            text={"Select Category"}
            placeholder={"Category"}
          />
          <ISelect
            name={"selectTypes"}
            id={"selectTypes"}
            text={"Select Types"}
            placeholder={"Types"}
          />
        </Form.Group>
        <Form.Group>
          <IInput name={"txtModel"} id={"txtModel"} label={"Model"} width={4} />
          <IInput name={"txtMake"} id={"txtMake"} label={"Make"} width={4} />
          <IInput name={"txtStyle"} id={"txtStyle"} label={"Style"} width={4} />
          <IInput
            name={"txtQuality"}
            id={"txtQuality"}
            label={"Quality"}
            width={2}
          />
        </Form.Group>
        <Form.Group>
          <ILabel text={"Description"} class={"ui header"} />
        </Form.Group>
        <Form.Group>
          <ITextArea
            rows={10}
            name={"txtDescription"}
            id={"txtDescription"}
            label={"Description"}
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
                <ILabel for={"uploadimage"} icon={"ui  large camera icon"}  />
                <ILabel for={"uploadimage"} icon={"ui large camera icon"}  />
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
                <ILabel for={"uploadinvoice"} icon={"ui  large file icon"}  />
                <ILabel for={"uploadinvoice"} icon={"ui large file icon"}  />
                <ILabel for={"uploadinvoice"} icon={"ui large file icon"} />
              </Form.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Form.Group width={4}>
          <IInput
            name={"txtGarageLocation"}
            id={"txtGarageLocation"}
            label={"Garage Location"}
            width={4}
          />
        </Form.Group>

        <Form.Group>
          <ILabel text={"Waranty"} class={"ui header"} />
        </Form.Group>
        <Form.Group width={4}>
          <IInput name={"txtTime"} id={"txtTime"} label={"Time"} width={4} />
          <IInput
            name={"txtInterval"}
            id={"txtInterval"}
            label={"Interval"}
            width={4}
          />
        </Form.Group>
        <Form.Group>
          <ILabel text={"Accounting"} class={"ui header"} />
        </Form.Group>
        <Form.Group width={4}>
          <IInput
            name={"txtPartPrice"}
            id={"txtPartPrice"}
            label={"Part Price"}
            width={4}
          />
         <IAdd
            name={"btnAddmorePrice"}
            id={"btnAddmorePrice"}
            text={"Add more Price"}
          />
          <IInput
            name={"txtPrice"}
            id={"txtPrice"}
            label={"Price"}
            width={4}
          />
        </Form.Group>
        {/* Supplier Info*/}
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
      </Form>
    );
  }
}
export default FrmAddnewPartLangoDlizainas;
