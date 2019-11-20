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
      Options: [
        { key: "truck", value: "1", text: "Truck" },
        { key: "trailer", value: "2", text: "Trailer" }
      ]
    };
  }
  render() {
    return (
      
      <Form.Field
        control={Select}
        options={this.props.options}
        value={this.props.value}
        onChange={this.props.onChange} 
        label={{
          children: this.props.text,
          htmlFor: "form-select-control-gender"
        }}
        placeholder='Select any Option'
        width={this.props.width}
        search
        searchInput={{ id: "form-select-control-gender" }}
        id={this.props.id}
        name={this.props.name}
        {...this.props}
      />
    );
  }
}
// name="selectCustomerType"
//               value={this.state.formControls.gender.value}
//               onChange={this.changeHandler}
//               options={this.state.formControls.gender.options}
//              


export default ISelect;

/*   <Select
        class={this.state.select.class}
        name={this.state.select.name}
        placeholder={this.state.select.placeholder}

        options={this.state.countryOptions}
  />
  */
