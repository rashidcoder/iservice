

import React, { Component } from "react";
import ILabel from "../basic/ilabel";
import { Form } from "semantic-ui-react";
import IInput from "../basic/input";
import ITable from "../table/itable";
import IButton from "../basic/ibutton";
class FrmEquipmentPagrindinioLangoDizainas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      table: {
        title: ["Description", "Quantity", "Photo", "Waranty"],
        data: [
          ["Autofill", "1", "Photo", "11/12/2019"],
          ["", "", "", ""],
          ["", "", "", ""],
          ["", "", "", ""],
          ["", "", "", ""],
          ["", "", "", ""],

        ]
      }
    };
  }

  render() {
    return (
      <Form>
        <ILabel text={"Equipment Pagrindinio "} class={"ui header"} />
        <Form.Group widths={2}>
          <IInput
            name={"txtSearch"}
            id={"txtSearch"}
            label={"Search"}
            icon={"search"}
          />
        </Form.Group>
        
                <IButton
                  text="Inventorization"
                  id={"btnInventorization"}
                  align={"right"}
                  name={"btnInventorization"}
                />
              
        <ITable
          data={this.state.table}
          name={"tblEquipmentPagrindinioLango"}
          id={"tblEquipmentPagrindinioLango"}
        />
      </Form>
    );
  }
}

export default FrmEquipmentPagrindinioLangoDizainas;
