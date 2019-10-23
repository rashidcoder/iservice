import React, { Component } from "react";
import { Icon, Label } from "semantic-ui-react";
export class IAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      iadd: {
        text: "Add extra info",
        id: 1,
        name: "toAddmoreContact",
        value: "",

      }
    };
  }
  
  render() {
    const styles = {
      backgroundColor: "transparent",
      border: "none"
    };
    return (
      <span>
        <button style={styles}
         id={this.state.iadd.id}
         name={this.state.iadd.name}
         value={this.state.iadd.value}
        >
          <Icon name="plus" />
        </button>
        {this.state.iadd.text}
      </span>
    );
  }
}

export default IAdd;
