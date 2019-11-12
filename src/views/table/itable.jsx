import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import ICheckBox from "../basic/icheckbox";
export class ITable extends Component {
  render() {
    const head = [];
    const dataRow = [];
    const table = this.props.data;

    table.title.forEach(str => {
      head.push(<Table.HeaderCell>{str}</Table.HeaderCell>);
    });
    table.data.forEach(arr => {
      const data = [];
      arr.forEach(str => {
        data.push(<Table.Cell>{str}</Table.Cell>);
      });
      dataRow.push(<Table.Row> {data} </Table.Row>);
    });
    return (
      <Table celled inverted selectable>
        <Table.Header>
          <Table.Row>{head}</Table.Row>
        </Table.Header>
        <Table.Body>{dataRow}</Table.Body>
      </Table>
    );
  }
}

export default ITable;
