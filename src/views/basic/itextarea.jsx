import React, { Component } from "react";
import { TextArea } from "semantic-ui-react";
export class ITextArea extends Component {
  render() {
    return (
      <TextArea
        id={this.props.id}
        cols={this.props.cols}
        rows={this.props.rows}
        class={this.props.class}
        placeholder={this.props.label}
        //value={this.props.value}
        name={this.props.name}
        {...this.props}
      />
    );
  }
}

export default ITextArea;
