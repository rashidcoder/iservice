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
          title: " Create New Work Order Truck",
        },
        {
          title: "Create New Work Order Trailer",
          
        },
        {
          title: "Work Order Managment",
          
        },
        {
          title: " Modify Work Order",
          
        },

        {
          title: "Customers Pagrindino lango diazainas",
          
        },
        {
          title: "Add New Customer",
          
        },
      ]
    };
  }
  render() {
    const tabPanes = [];
    for (let i = 0; i < this.state.tabs.length; i++) {
      const title = this.state.tabs[i].title;
      tabPanes.push({
        menuItem: title,
        render: () => <Tab.Pane>{this.dumyTabPane({i})}</Tab.Pane>
      });
    }
    // this.state.tabs.forEach(tab=> {
    // })
    //
    return <Tab panes={tabPanes} />;
  }
  dumyTabPane({i}) {
    switch (i) {
      case 0:
        return <FrmNewWorkOrderTruck/>;
        break;
        case 1:
           return <FrmNewWorkOrderTrailer/>;
          break;
    
          case 2:
            return <FrmWorkOrdersManagment/>;
            break;
            case 3:
            return <FrmModifyWorkOrder/>;
            break;
            case 4:
            return <FrmCustomerPagrinioLangoDizainas/>;
            break;
            case 5:
            return <FrmAddNewCustomer />;
            break;
      
      default:
        break;
    }
    //return <FrmNewWorkOrderTruck/>
    //return <FrmNewWorkOrderTrailer/>
    //return <FrmWorkOrdersManagment/>
    //return <FrmModifyWorkOrder/>
    //return <FrmCustomerPagrinioLangoDizainas/>
    //return <FrmAddNewCustomer />;
  }
}
export default ITabs;
