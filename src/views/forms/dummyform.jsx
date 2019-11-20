import React, { Component } from 'react';
import HomeController from '../../controllers/danishControler';
import CustomInput from './dummyinput';
class RefsForm extends Component {
  constructor(props){
    super(props); 
    this.state = {
      customerName:"",
      name:'',
      formControls:{
      email:'',
      phone:''
      }
    }
    }
    changeHandler = event => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
          formControls: {
            [name]: value
          }
      });
      console.log("the updated value is "+this.state.formControls.email);
      console.log("the updated value is "+this.state.formControls.phone);
  }


    
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('first name:', this.name.value);
    this.setState({
      customerName:this.name.value
    })
    this.name.value = 'value has been inserted successfully!';
  }
  render() {
    return (
      <div>
        <p>{this.state.customerName}</p>
        <HomeController customerName={this.state.customerName}   data={this.state.formControls}>
        { getdata=>
         <div>
            <p>returned value: {getdata.obj.customerName}</p>
           
            </div>
        }
        </HomeController>
        <form onSubmit={this.handleSubmit}>
          <CustomInput
            label={'Name'}
            name={input => this.name = input} />
             
          {/*   mychangehandler funtion usage    */}

             <CustomInput
            label={'Name'}
            name="email"
            value={this.state.formControls.email}
            onChange={this.changeHandler}
            />
            <CustomInput
            label={'Name'}
           phone={input => this.phone = input} 
            name="phone"
            value={this.state.formControls.phone}
            onChange={this.changeHandler}
            />
          <input type="submit" value="Submit" />

        </form>
      </div>
    );
  }
} 
export default RefsForm;