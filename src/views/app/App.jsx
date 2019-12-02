import React, { Component } from "react";
import "../../sass/App.css";
import ISidebar from "../navigation/isidebar";
import Workshops from "../../controllers/Test"
import HomeController from "../../controllers/danishControler";
import IButton from "../basic/ibutton";
import RefsForm from "../forms/dummyform";
import DummyFileUpload from "../forms/dummyFileUpload";

import * as Database from '../../data/dbsqlite'
class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: 0,
      brand: 'br',
      color: 'red'
    }

  }

  addHero = async () => {

    // const { brand, color } = this.state;
    // const db = await Database.get();
    // Database.createCollections(db)
    // const collections = await Database.getCollections(db)

    // console.log(collections)
    // console.log(collections.vehicles)
    // window['collections'] = collections
 
  }
  async componentDidMount() {
    // runChainExample()
    Database.start()
  }
  render() {
    console.log("the set value is " + this.state.data)
    // this.addHero()
    return (
      <div className="App">

        {/* <h3> {db.createDatabase()} </h3>     */}
        <ISidebar />
        <Workshops data={"test data"}>
          {orderSnapshot =>
            <div>
              <p>{orderSnapshot.state.ascending}</p>
              <p>{orderSnapshot.state.order}</p>
            </div>
          }
        </Workshops>
        <IButton
          onClick={() => {
            this.setState({
              data: 1
            })
          }}
          text={"Danish Data"}
        />
        <IButton
          onClick={() => {
            this.setState({
              data: 2
            })
          }}
          text={"Rashid Data"}
        />


        <HomeController data={this.state.data}>
          {getdata =>
            <div>
              <p>{getdata.obj.Name}</p>
              <p>{getdata.obj.FatherName}</p>
              <p>{getdata.obj.msg}</p>
            </div>
          }
        </HomeController>
        */}
       <RefsForm />
        danish ali khan
       <DummyFileUpload />
      </div>
    );
  }
} export default App;
