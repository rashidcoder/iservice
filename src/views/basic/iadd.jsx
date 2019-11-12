import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
export class IAdd extends Component {
  

  render() {
    
    var icon = "plus"
    if(this.props.icon==="") { 
    
    }
      else {
        icon = "icon"
      }
   
   
      
    
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
           
          <Icon name={Icon} />
        </button>
        {this.props.text}
      </span>
    );
  }
}

export default IAdd;