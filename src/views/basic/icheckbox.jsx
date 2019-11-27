import { Checkbox } from 'semantic-ui-react'
import React, { Component } from "react";

export class ICheckBox extends Component {
  render() {
    return (
      <Checkbox
        label={this.props.label}
        class={this.props.class}
        name={this.props.name}
        value={this.props.value} 
        id={this.props.id}
        {...this.props}
      />
    );
  }
}

export default ICheckBox;




