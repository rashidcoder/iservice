import { Button } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";
import React, { Component } from "react";

export class IButton extends Component {
  render() {
    return (
      
        <Button
          type='submit'
          id={this.props.id}
          class={this.props.class}
          floated={this.props.align}
          name={this.props.name}
          value={this.props.value}
          width={this.props.width}
          
        >
<i class={this.props.icon}></i>
          {this.props.text}
          
        </Button>
        
    );
  }
}

export default IButton;
