import { Form } from "semantic-ui-react";

import React, { Component } from "react";

export class IInput extends Component {
  render() {
    return (
      <Form.Input
        class={this.props.class}
        name={this.props.name}
        type="text"
        id={this.props.id}
        label={this.props.label}
        placeholder={this.props.label}
        width={this.props.width}
        icon={{ name: this.props.icon }}
      />
    );
  }
}

export default IInput;
