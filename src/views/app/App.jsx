import React, { Component } from "react";
import "../../sass/App.css";
import ISidebar from "../navigation/isidebar";
import Workshops from "../../controllers/Test"
import HomeController from "../../controllers/danishControler";
import IButton from "../basic/ibutton";


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data: 0
    }
  }
  
  render() {
    console.log("the set value is "+this.state.data)
    return (
      <div className="App">
       <ISidebar/>
       <Workshops data={"test data"}>
       { orderSnapshot =>  
        <div> 
        <p>{orderSnapshot.state.ascending}</p> 
        <p>{orderSnapshot.state.order}</p>  
         </div>
       }                        
       </Workshops>  
       <IButton
       onClick={()=>{
        this.setState({
          data:1
        })
       }}
       text={"Danish Data"}
       />
       <IButton
       onClick={()=>{
        this.setState({
          data: 2
        })
       }}
       text={"Rashid Data"}
       />
       <HomeController data={this.state.data}>
         { getdata=>
         <div>
            <p>{getdata.obj.Name}</p>
            <p>{getdata.obj.FatherName}</p>
            <p>{getdata.obj.msg}</p>
            </div>
        }
       </HomeController>
      </div>
    );
  }
}

export default App;
