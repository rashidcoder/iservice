   
  import React,{Component} from 'react'
class CustomInput extends Component{
  constructor(props){
	super(props); 
  }
  render(){
    return(
      <div>
          <input type="text" {...this.props} />
      </div>
    )
  }
}
export default CustomInput;

{/*

    <input type="text" ref={this.props.name} {...this.props} />
*/}