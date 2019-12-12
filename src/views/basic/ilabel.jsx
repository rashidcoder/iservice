import React, { Component } from "react";

export class ILabel extends Component {
  render() {
    return (
      <div>
        <label 
        {...this.props}
        >
        <i className={this.props.icon}></i> 
          {this.props.text}
        </label>
      </div>
    );
  }
}

export default ILabel;

// class={this.props.class} 
// for={this.props.for}