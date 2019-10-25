import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import IInput from "../basic/input";
import ITable from "../table/itable";
import ISelect from "../basic/iselect";
import ILabel from "../basic/ilabel";
import IButton from "../basic/ibutton";
class FrmPartsPargrindinioLangoDizainas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      table: {
        title: ["", "", "", "", " ", " ", " "],
        data: [
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
          text={"Parts Pargrindinio Lango Dizainas"}
          class={"ui header"}
        />
        <Form.Group widths={2}>
          <IInput label={"Enter key word for search"} icon={'search'} />
        </Form.Group>
        <Form.Group>
          <ISelect placeholder={"Category"} width={4} />
          <ISelect placeholder={"Types"} width={4} />
        </Form.Group>
        <IButton text="Add New Parts" id={"btnAddNewParts"} align={"right"} />
        <ITable data={this.state.table} />
      </Form>
    );
  }
}

export default FrmPartsPargrindinioLangoDizainas;
