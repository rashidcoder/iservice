import { Grid } from "semantic-ui-react";
import React, { Component } from "react";
import ILabel from "../basic/ilabel";
import { Form } from "semantic-ui-react";
import IInput from "../basic/input";
import ITable from "../table/itable";
import IButton from "../basic/ibutton";
import { Table } from "semantic-ui-react";
import ICheckBox from "../basic/icheckbox";
class FrmEquipmentinventorization extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      table: {
        title: ["Description", "Quantity", "Photo", "Waranty", "Locaiton"],
        data: [
          [
            "Autofill",
            "1",
            "Photo",
            "11/12/2019",
            "basti maloook zilaa tonsa sahreef"
          ],
          ["", "", "", ""],
          ["", "", "", ""],
          ["", "", "", ""],
          ["", "", "", ""],
          ["", "", "", ""]
        ]
      }
    };
  }
 
  render() {
    const   styles = {
        backgroundColor: "#333",
        border: "none",
        marginTop:"37px"
      };
         
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
<div style={styles}>
<IButton
            id={"btnClose"}
            align={"right"}
            name={"btnClose"}
            icon={"close icon"}
          />
<Grid>
  <Grid.Row>
    <Grid.Column width={14}>
    
      
          <Table celled inverted selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell></Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
                <Table.HeaderCell>Quantity</Table.HeaderCell>
                <Table.HeaderCell>Photo</Table.HeaderCell>
                <Table.HeaderCell>Waranty</Table.HeaderCell>
                <Table.HeaderCell>Locaiton</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <ICheckBox />
                </Table.Cell>
                <Table.Cell>Autofill</Table.Cell>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>photo</Table.Cell>
                <Table.Cell>Grage 1 </Table.Cell>
                <Table.Cell>address specfied </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <ICheckBox />
                </Table.Cell>
                <Table.Cell>Autofill</Table.Cell>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>photo</Table.Cell>
                <Table.Cell>Grage 1 </Table.Cell>
                <Table.Cell>address specfied </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        
    </Grid.Column>
    <Grid.Column width={2}>
        <Form.Group>
    <IButton
          text="Print"
          id={"btnInventorization"}
          align={"right"}
          name={"btnInventorization"}
        />
        </Form.Group>
        <Form.Group>
        <IButton
          text="Print selected"
          id={"btnInventorization"}
          align={"right"}
          name={"btnInventorization"}
        />
        </Form.Group>

    </Grid.Column>
  </Grid.Row>
</Grid>;
</div>
        
      </Form>
    );
  }
}

export default FrmEquipmentinventorization;


