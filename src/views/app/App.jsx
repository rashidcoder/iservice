import React, { Component } from "react";
import "../../sass/App.css";
import ISidebar from "../navigation/isidebar";
//import DummyFileUpload from "../forms/dummyFileUpload";
class App extends Component {
  render() {
    return (
      <div className="App">
          <ISidebar />
          <h1>
            ISERVICES
          </h1>
       {/* <DummyFileUpload /> */}
      </div>
    );
  }
} export default App;

