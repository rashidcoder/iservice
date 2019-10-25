import React, { Component } from "react";
import ILabel from "../basic/ilabel";
import { Form } from "semantic-ui-react";
import IInput from "../basic/input";
import ITable from "../table/itable";
class FrmWorkOrdersManagment extends Component {
  constructor(props) {
    
    super(props);

    this.state = {
      table: {
        title: [
          "Data",
          "Status",
          "Customer",
          "Required Truck or Trailer",
          "Parts",
          "Labor",
          "Total"
        ],
        data: [
          [
            "04/03/1997",
            "wating",
            "Trango",
            "Kenworth T-60",
            "225$",
            "14$",
            "392$"
          ],
          [
            "04/03/1997",
            "wating",
            "Trango",
            "Kenworth T-60",
            "225$",
            "14$",
            "392$"
          ]
        ]
      }
    };
  }

  render() {
    return (
      <Form>
        <ILabel text={"Create New Work Order"} class={"ui header"} />
        <Form.Group widths={2}>
          <IInput label={"Search"} icon={"search"} />
        </Form.Group>
        <ITable data={this.state.table} />
      </Form>
    );
  }
}
export default FrmWorkOrdersManagment;
