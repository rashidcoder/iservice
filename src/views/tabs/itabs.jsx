import React, { Component } from "react"
import { Tab, Button } from "semantic-ui-react" 
import FrmNewWorkOrder from "../forms/frmNewWorkOrder"

export class ITabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs: [
        {
          title: "New Work Order"
        },
        {
          title: "Work Order Managment"
        },
        {
          title: "New Customer"
        },
        {
          title: "Customers"
        },

        {
          title: "Booking "
        },
        {
          title: "Employees"
        },
        {
          title: "Reminder"
        },

        {
          title: "New Supplier"
        },
        {
          title: "Suppliers"
        },
        {
          title: "Settings"
        }
      ],
      
    }
  }
  render() { 
    const tabPanes = [] 
    for (let i = 0; i < this.state.tabs.length;i++) {
      const title = this.state.tabs[i].title 
      tabPanes.push({ menuItem:  title, render: () => <Tab.Pane>  {this.dumyTabPane()}  </Tab.Pane>})
    }
    // this.state.tabs.forEach(tab=> {
     

    // })
      // 
    
    return <Tab panes={tabPanes} />
  }

  dumyTabPane() {
    return <FrmNewWorkOrder/>
    
  }
}
export default ITabs
