import { Checkbox } from 'semantic-ui-react'
import React, { Component } from "react";

export class ICheckBox extends Component {
  render() {
    return (
<Checkbox label={this.props.label} 
class={this.props.class}
name={this.props.name}
id={this.props.id}/>
    );
  }
}

export default ICheckBox;




