import React, { Component } from "react";
import ILabel from "../basic/ilabel";
import { Form } from "semantic-ui-react";
import IInput from "../basic/input";
import ITable from "../table/itable";
class FrmCustomerPagrinioLangoDizainas extends Component {
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
        <ILabel text={"Customer Pagrinio Lango Dizainas"} class={"ui header"} />
        <Form.Group widths={2}>
          <IInput name={"txtSearch"} id={"txtSearch"} label={"Search"} icon={"search"} />
        </Form.Group>
        <ITable data={this.state.table} name={"tblCustomerParrindinioLangoZizainas"} id={"tblCustomerParrindinioLangoZizainas"} />
      </Form>
    );
  }
}

export default FrmCustomerPagrinioLangoDizainas;
