import React, { Component } from "react";
import { Tab } from "semantic-ui-react";
import FrmNewWorkOrderTruck from "../forms/frmNewWorkOrderTruck";
import FrmNewWorkOrderTrailer from "../forms/frmNewWorkOrderTrailer";
import FrmModifyWorkOrder from "../forms/frmModifyWorkOrder";
import FrmCustomerPagrinioLangoDizainas from "../forms/frmCustomerPagrinioLangoDizainas";
import FrmAddNewCustomer from "../forms/frmAddNewCustomer";
import FrmWorkOrdersManagment from "../forms/frmWorkOrdersManagment";
import FrmPreviewCustomer from "../forms/frmPreviewCustomer";
import FrmSupplierPargindinoLangoDizainas from "../forms/frmSupplierPargindinoLangoDizainas";
import FrmPreviewSuplier from "../forms/frmPreviewSuplier";
import FrmAddNewSupplier from "../forms/frmAddNewSupplier";
import FrmPartsPargrindinioLangoDizainas from "../forms/frmPartsPargrindinioLangoDizainas";

import ICalenderSchedular from "../calendar/ICalendarSchedular";
//import { calender } from "../../data/Schema";
export class ITabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {
          title: " Create New Work Order Truck"
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
        render: () => <Tab.Pane>{this.dumyTabPane({ i })}</Tab.Pane>
      });
    }
    return (
      <div>
        <Tab panes={tabPanes} />
      </div>
    );
  }
  dumyTabPane({ i }) {
    switch (i) {
      case 0:
        
      return <FrmNewWorkOrderTruck />;
      case 1:
           return <FrmNewWorkOrderTrailer />;
        
      case 2:
        return <FrmWorkOrdersManagment />;
      case 3:
        return <FrmModifyWorkOrder />;
      case 4:
        return <FrmCustomerPagrinioLangoDizainas />;
      case 5:
        return <FrmAddNewCustomer />;
      case 6:
        return <FrmPreviewCustomer />;
      case 7:
        return <FrmSupplierPargindinoLangoDizainas />;
      case 8:
        return <FrmPreviewSuplier />;
      case 9:
        return <FrmAddNewSupplier />;
      case 10:
        return <FrmPartsPargrindinioLangoDizainas />;
      case 11:
        return <ICalenderSchedular />;

      default:
    }
  }
}
export default ITabs;
