import { Button } from "semantic-ui-react";

import React, { Component } from "react";

export class IButton extends Component {
  render() {
    return (
      
        <Button
          type='button'
          id={this.props.id}
          class={this.props.class}
          floated={this.props.align}
          name={this.props.name}
          value={this.props.value}
        >
          {this.props.text}
        </Button>
    );
  }
}

export default IButton;
