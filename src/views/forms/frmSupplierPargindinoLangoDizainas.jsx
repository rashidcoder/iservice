import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import IInput from "../basic/input";
import ITable from "../table/itable";
import ILabel from "../basic/ilabel";
class FrmSupplierPargindinoLangoDizainas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      table: {
        title: [
          "Company",
          "Telephone",
          "City",
          "Prov/State",
          "Name",
          "Address",
          "Priority"
        ],
        data: [
          [
            "Grain Translanta",
            "267-257-5445",
            "lemont",
            "IL",
            "Volodia",
            " Baisogaios 21",
            "Heigh"
          ],
          [
            "Grain Translanta",
            "267-257-5445",
            "lemont",
            "IL",
            "Volodia",
            " Baisogaios 21",
            "Heigh"
          ],
          ["", "", "", "", " ", " ", " "],
          ["", "", "", "", " ", " ", " "],
          ["", "", "", "", " ", " ", " "],
          ["", "", "", "", " ", " ", " "],
          ["", "", "", "", " ", " ", " "],
          ["", "", "", "", " ", " ", " "]
        ]
      }
    };
  }

  render() {
    return (
      <Form>
        <ILabel
          text={"Supplier Pargindino Lango Dizainas"}
          class={"ui header"}
        />
        <Form.Group widths={2}>
          <IInput name={"txtSearch"} id={"txtSearch"} label={"Search"} icon={"search"} />
        </Form.Group>
        <ITable name={"tblSupplierPagrindinioLangoDizaines"} id={"tblSupplierPagrindinioLangoDizaines"} data={this.state.table} />
      </Form>
    );
  }
}

export default FrmSupplierPargindinoLangoDizainas;
