import React, { Component } from "react";

export class ILabel extends Component {
  render() {
    return (
      <div>
        <label class={this.props.class} for={this.props.for}>
          {this.props.text}
        </label>
      </div>
    );
  }
}

export default ILabel;
