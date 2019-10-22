import { Label } from "semantic-ui-react";

import React, { Component } from "react";

export class ILabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: {
        for: "",
        class: "iLabel",
        text: "Name"
      }
    };
  }

  render() {
    return (
      <div>
        <label
          class={this.state.label.class}
          for={this.state.label.for}
        >
          {this.state.label.text}
        </label>
      </div>
    );
  }
}

export default ILabel;
