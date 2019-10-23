import React, { Component } from "react";
import { Select } from "semantic-ui-react";
import { Form } from "semantic-ui-react";
export class ISelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: {
        name: "dropdown",
        id: "ddl",
        class: "iSelect",
        placeholder: "Select any option"
      },
      countryOptions: [
        { key: "af", value: "af", text: "Afghanistan" },
        { key: "ax", value: "ax", text: "Aland Islands" },
        { key: "al", value: "al", text: "Albania" },
        { key: "dz", value: "dz", text: "Algeria" },
        { key: "as", value: "as", text: "American Samoa" },
        { key: "ad", value: "ad", text: "Andorra" },
        { key: "ao", value: "ao", text: "Angola" }
      ]
    };
  }
  render() {
    return (
      <Form.Field
control={Select}
options={this.state.countryOptions}
label={{ children: 'Select Truck Type', htmlFor: 'form-select-control-gender' }}
placeholder={this.props.placeholder}
search
searchInput={{ id: 'form-select-control-gender' }}
/>
  
    );
  }
}

export default ISelect;

/*   <Select
        class={this.state.select.class}
        name={this.state.select.name}
        placeholder={this.state.select.placeholder}

        options={this.state.countryOptions}
  />
  */