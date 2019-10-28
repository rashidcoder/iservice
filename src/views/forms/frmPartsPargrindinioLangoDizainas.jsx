import React, { Component } from "react";import { Grid } from "semantic-ui-react";
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
          <IInput name={"txtSearch"} id={"txtSearch"} label={"Enter key word for search"} icon={'search'} />
        </Form.Group>
        <Form.Group>
          <ISelect name={"selectCategory"} id={"selectCategory"} placeholder={"Category"} width={4} />
          <ISelect  name={"selectType"} id={"selectType"} placeholder={"Types"} width={4} />
      
        </Form.Group>
        <Grid>
          <Grid.Row >
          <Grid.Column width={14}>
          </Grid.Column>
          <Grid.Column width={2}>
          <Form.Group >
          <IButton name={"btnAddParts"} text="Add New Parts" id={"btnAddParts"} align={"right"} />  
        </Form.Group>
        </Grid.Column>
          </Grid.Row>
          </Grid>
        
        <ITable data={this.state.table} name={"tblPartsPagrindinioLangoDizainas"} id={"tblPartsPagrindinioLangoDizainas"} />
      </Form>
    );
  }
}

export default FrmPartsPargrindinioLangoDizainas;
