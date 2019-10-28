import React, { Component } from "react";
import "../../sass/App.css";
import ISidebar from "../navigation/isidebar";
import ITabs from "../tabs/itabs";
import { Grid } from "semantic-ui-react";   



class App extends Component {
  render() { 
    return (
      
      <div className="App">
        <Grid>
          <Grid.Column width={2}>
            <ISidebar />
          </Grid.Column>
          <Grid.Column width={14}>
            <ITabs />                      
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
