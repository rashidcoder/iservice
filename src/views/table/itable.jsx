import React, { Component } from "react";
import { Table } from "semantic-ui-react";
export class ITable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ar:props.ar,
      table: {
        title: ["Task", "Employee", "Category", "Part", "Part Price"],

        data: [
          ["Electricity", "Valdas", "General", "Rear Right", "Rear left"],
          ["Suspension", "Valdas", "Resturation", "Tree", "Rear Right"],
          ["Suspension", "Valdas", "Resturation", "Tree", "Rear Right"]
        ]
      }
    };
  }

  render() {


    const head = [];
    const dataRow = [];
    this.state.table.title.forEach(str => {
      head.push(<Table.HeaderCell>{str}</Table.HeaderCell>);
    });

    this.state.table.data.forEach(arr => {
      const data = [];
      arr.forEach(str => {
        data.push(<Table.Cell>{str}</Table.Cell>);
      });
      dataRow.push(<Table.Row> {data} </Table.Row>);
    });

    return (
      <Table singleLine>
      <Table.Header>
        <Table.Row>
        <Table.HeaderCell>{this.props.header1}</Table.HeaderCell>
          <Table.HeaderCell>{this.props.header2}</Table.HeaderCell>
          <Table.HeaderCell>{this.props.header3}</Table.HeaderCell>
          <Table.HeaderCell>{this.props.header4}</Table.HeaderCell>
          <Table.HeaderCell>{this.props.header5}</Table.HeaderCell>

        </Table.Row>
      </Table.Header>
  
      <Table.Body>
        <Table.Row>
          <Table.Cell>John Lilki</Table.Cell>
          <Table.Cell>September 14, 2013</Table.Cell>
          <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
          <Table.Cell>No</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jamie Harington</Table.Cell>
          <Table.Cell>January 11, 2014</Table.Cell>
          <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
          <Table.Cell>Yes</Table.Cell>
          <Table.Cell>No</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jill Lewis</Table.Cell>
          <Table.Cell>May 11, 2014</Table.Cell>
          <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
          <Table.Cell>Yes</Table.Cell>
          <Table.Cell>No</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    );
  }
}

export default ITable;

/*
                                                        Dont Delete this 
          <Table singleLine>
        <Table.Header>
          <Table.Row>{head}</Table.Row>
        </Table.Header>
        <Table.Body>{dataRow}</Table.Body>
      </Table>

*/