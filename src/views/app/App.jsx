import React, { Component, Fragment } from "react";
import "../../sass/App.css";
import ISidebar from "../navigation/isidebar";
<<<<<<< HEAD
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
=======
import Workshops from "../../controllers/Test"
import HomeController from "../../controllers/danishControler";
import IButton from "../basic/ibutton";
import RefsForm from "../forms/dummyform";
import DummyFileUpload from "../forms/dummyFileUpload";
import { conditionalExpression } from "@babel/types";
import IInput from "../basic/input";
import ISelect from "../basic/iselect";
import { number } from "prop-types";

//import * as Database from '../../data/dbsqlite'
class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      conditionalbit:true,
      data: 0,
      brand: 'br',
      color: 'red'
    }

    console.log(" 1 this is constructor")
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
  //   Database.sequelize()
  }
  componentDidMount(){
    console.log(" 3 this is componentDIdMount")
  }
  componentWillUnmount(){
    console.log("4 this is componentWillUnmont")
  }
  
  componentDidCatch(){
    console.log(" 5 this is componentDidCatch")
  }
  
  
render() {
 
    console.log("2 this is render")
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
        <Fragment>
          {this.state.conditionalbit?<ISelect name="ali"/>:<IInput name ="danish"/>}
        </Fragment>
              
>>>>>>> 6574429fcfc789ef90a454e2f92fa7133a123f77
      </div>
    );
  }
} export default App;

