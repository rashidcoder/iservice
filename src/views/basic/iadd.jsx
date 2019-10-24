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
      border: "none",
      marginTop:"37px"
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
        {this.props.text}
      </span>
    );
  }
}

export default IAdd;
