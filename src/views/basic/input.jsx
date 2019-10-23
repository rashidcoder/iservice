import { Form } from "semantic-ui-react";

import React, { Component } from "react";

export class IInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: {
        type: "text",
        id: "firstName",
        placeholder: "name",
        name: "firstName",
        class: "iInput"
      }
    };
  }

  render() {
    return (
      <Form.Input
        class={this.state.input.iInput}
        name={this.state.input.name}
        type={this.state.input.type}
        id={this.state.input.id}
        label={this.props.label}
        placeholder={this.props.label}
        width={this.props.width}
      />
    );
  }
}

export default IInput;
