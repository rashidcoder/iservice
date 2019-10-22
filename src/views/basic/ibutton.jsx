import { Button } from "semantic-ui-react";

import React, { Component } from "react";

export class IButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      button: {
        type: "button",
        id: 1,
        name: "firstName",
        class: "iButton",
        value: "",
        text: "click Here"
      }
    };
  }
  render() {
    return (
      
        <Button
          type={this.state.button.type}
          id={this.state.button.id}
          class={this.state.button.ibutton}
          name={this.state.button.name}
          value={this.state.button.value}
        >
          {this.state.button.text}
        </Button>
      
    );
  }
}

export default IButton;
