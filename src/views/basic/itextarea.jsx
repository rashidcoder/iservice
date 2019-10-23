import React, { Component } from 'react'
import { TextArea } from "semantic-ui-react";
export class ITextArea extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         textarea :{
            name:'firstName',
            id:"firstName",
            cols:10,
            rows:5,
            class:'ITextArea',
            placeholder:'textarea'
        }
      }
    }
    
  render() {
    return (
        <TextArea        
         name={this.state.textarea.name} 
         id={this.state.textarea.id}
          cols={this.state.textarea.cols}
          rows={this.state.textarea.rows}
          class={this.state.textarea.class}
          placeholder={this.props.label}
          />
        
    )
  }
}

export default ITextArea

