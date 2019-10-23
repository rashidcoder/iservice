import React, { Component } from "react";
import { Table } from "semantic-ui-react";
export class ITable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      table: [
        {
          header: [
            {
              text: "Task"
            },
            {
              text: "Employee"
            },
            {
              text: "Category"
            },
            {
              text: "Part"
            }
          ],

          body: {
            row: [
              {
                text: "Electricity"
              },
              {
                text: "Valdas"
              },
              {
                text: "General"
              },
              {
                text: "Rear Right"
              },
            ],
            row: [
                {
                  text: "Suspension"
                },
                {
                  text: "Valdas"
                },
                {
                  text: "Resturation"
                },
                {
                  text: "Tree"
                },
              ],
          }
        }
      ]
    };
  }

  render() {
    const head = [];
    this.state.table.forEach(item => {
        head.push(
          <Table.HeaderCell>{item.header.text}</Table.HeaderCell>
        );
  
      });


    return (
      <Table singleLine>
        <Table.Header>
          <Table.Row>
          <Table.HeaderCell> a </Table.HeaderCell>
          <Table.HeaderCell> b </Table.HeaderCell>
          <Table.HeaderCell> b </Table.HeaderCell>
          <Table.HeaderCell> action ( button ) [ edit ,update, delete] </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell></Table.Cell>
            <Table.Cell>September 14, 2013</Table.Cell>
            <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
            <Table.Cell>No</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Jamie Harington</Table.Cell>
            <Table.Cell>January 11, 2014</Table.Cell>
            <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Jill Lewis</Table.Cell>
            <Table.Cell>May 11, 2014</Table.Cell>
            <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
}

export default ITable;

/*

table: [
        {
          header: {
            text: "Task"
          },
          body: {
            child: [
                
              {
                text: "Electricity"
              },
              {
                text: "Suspension"
              }
            ]
          }
        },
        {
          header: {
            text: "Employees"
          },
          body: {
            child: [
              {
                text: "Valdas"
              },
              {
                text: "Valdas"
              }
            ]
          }
        },
        {
          header: {
            text: "Category"
          },
          body: {
            child: [
              {
                text: "Genral"
              },
              {
                text: "Restauration"
              }
            ]
          }
        },
        {
          header: {
            text: "Part"
          },
          body: {
            child: [
              {
                text: "Rear right reverse lamp"
              },
              {
                text: "Tire"
              }
            ]
          }
        },
        {
          header: {
            text: "Part Price"
          },
          body: {
            child: [
              {
                text: "10$"
              },
              {
                text: "500$"
              }
            ]
          }
        },
        {
          header: {
            text: "Cost/Hours"
          },
          body: {
            child: [
              {
                text: "70$"
              },
              {
                text: "70$"
              }
            ]
          }
        }
      ]


*/
