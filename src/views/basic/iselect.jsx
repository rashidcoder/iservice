import React, { Component } from "react";
import { Select } from "semantic-ui-react";
import { Form } from "semantic-ui-react";
export class ISelect extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
       
      <Form.Field
        control={Select}
        options={this.props.options}
        value={this.props.value} 
        label={{
          children: this.props.text,
          htmlFor: "form-select-control-gender"
        }}
        placeholder='Select any Option'
        width={this.props.width}
        search
        searchInput={{ id: "form-select-control-"+this.props.name }}
        id={this.props.id}
        name={this.props.name}
        {...this.props}
      />
 
    );
  }
}
          


export default ISelect;
 