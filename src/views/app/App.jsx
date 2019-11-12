import React, { Component } from "react";
import "../../sass/App.css";
import ISidebar from "../navigation/isidebar";

class App extends Component {
  render() {
    return (
      <div className="App">
       <ISidebar/>
      </div>
    );
  }
}

export default App;
