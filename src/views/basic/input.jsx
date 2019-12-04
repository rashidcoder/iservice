import { Form } from "semantic-ui-react";
import React, { Component } from "react";
export class IInput extends Component {
  
  defaultProps = {
    type:"text"
};
  
  render() {
    return (
      <Form.Input
      //  class={this.props.class}
        //value={this.props.value}
        //name={this.props.name}
        type={this.props.type}
       // id={this.props.id}
        //label={this.props.label}
        //placeholder={this.props.label}
       //width={this.props.width}
        //icon={{ name: this.props.icon }}
        {...this.props}
      />
    );
  }
}

export default IInput;
