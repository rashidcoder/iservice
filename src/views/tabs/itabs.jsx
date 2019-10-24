import React, { Component } from "react";
import { Tab, Button } from "semantic-ui-react";
import FrmNewWorkOrderTruck from "../forms/frmNewWorkOrderTruck";
import FrmNewWorkOrderTrailer from "../forms/frmNewWorkOrderTrailer";
import FrmModifyWorkOrder from "../forms/frmModifyWorkOrder";
import FrmCustomerPagrinioLangoDizainas from "../forms/frmCustomerPagrinioLangoDizainas";
import FrmAddNewCustomer from "../forms/frmAddNewCustomer";
import FrmWorkOrdersManagment from "../forms/frmWorkOrdersManagment";

export class ITabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {
          title: "New Work Order",
          No: 1
        },
        {
          title: "Work Order Managment",
          No: 2
        },
        {
          title: "New Customer",
          No: 3
        },
        {
          title: "Customers",
          No: 4
        },

        {
          title: "Booking ",
          No: 5
        },
        {
          title: "Employees",
          No: 6
        },
        {
          title: "Reminder",
          No: 7
        },

        {
          title: "New Supplier",
          No: 8
        },
        {
          title: "Suppliers",
          No: 9
        },
        {
          title: "Settings",
          No: 10
        }
      ]
    };
  }
  render() {
    const tabPanes = [];
    for (let i = 0; i < this.state.tabs.length; i++) {
      const title = this.state.tabs[i].title;
      tabPanes.push({
        menuItem: title,
        render: () => <Tab.Pane>{


          this.dumyTabPane()} 


          </Tab.Pane>
      });
    }
    // this.state.tabs.forEach(tab=> {
    // })
    //
    return <Tab panes={tabPanes} />;
  }
  dumyTabPane() {
    //return <FrmNewWorkOrderTruck/>
    //return <FrmNewWorkOrderTrailer/>
    //return <FrmWorkOrdersManagment/>
    //return <FrmModifyWorkOrder/>
    //return <FrmCustomerPagrinioLangoDizainas/>
    return <FrmAddNewCustomer />;
  }
}
export default ITabs;
