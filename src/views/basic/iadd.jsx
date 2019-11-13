import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
export class IAdd extends Component {
  

  render() {
    
    const styles = {
      backgroundColor: "transparent",
      border: "none",
      marginTop:"37px"
    };
    return (
      <span>
        <button style={styles}
         id={this.props.id}
         name={this.props.name}
         value={this.props.value}>
           
          <Icon name={this.props.icon} />
        </button>
        {this.props.text}
      </span>
    );
  }
}

export default IAdd;