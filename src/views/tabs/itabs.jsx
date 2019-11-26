import React, { Component } from "react";
import { Tab } from "semantic-ui-react";


export class ITabs extends Component {

  handleTabChange = (e, {activeIndex}) =>  { 
     e.target.activeIndex = activeIndex
    this.setState({
      activeIndex: e.target.activeIndex
    })
    // (this.props.tabPanes.length -1 )
    console.log(' value of active index is ' + e.target.activeIndex)
    } 
  constructor(props) {
    super(props);

    this.state = {
      info: [],
      activeIndex: 1,
      tabs: [
        {
          title: this.props.title
        },
        {
          title: "Create New Work Order Trailer"
        },
        {
          title: "Work Order Managment"
        },
        {
          title: " Modify Work Order"
        },

        {
          title: "Customers Pagrindino lango diazainas"
        },
        {
          title: "Add New Customer"
        },
        {
          title: "Preview Customer"
        },
        {
          title: "Supplier Pargindino Lango Dizainas"
        },
        {
          title: "Supplier Preview"
        },
        {
          title: "Add New Supplier"
        },
        {
          title: "Parts Partgrindinio Lango Dizainas"
        },
        {
          title: "Calander"
        },
        {
          title: "Booking"
        },
        {
          title: "Add New Parts Lango Dizainas"
        },
        {
          title: "Preview Parts"
        },
        {
          title: "Add New Equipments"
        },
        {
          title: "Preview New Equipments"
        },
        {
          title: "Equipment Pagrindinio Lango Dizainas"
        },
        {
          title: "Equipment Inventorization"
        }
      ]
    }; //simple value
  }
  render() {
     
    return (
      <div>
        <Tab  panes={this.props.tabPanes} activeIndex={ this.state.activeIndex> -1  ? this.state.activeIndex : this.props.activeIndex} onTabChange={this.handleTabChange} />
      </div>
    );
  }
}
export default ITabs;
