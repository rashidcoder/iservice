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
import FrmBooking from "../forms/frmBooking";
import FrmAddnewPartLangoDlizainas from "../forms/frmAddnewPartLangoDlizainas";
import FrmPreviewPartLangoDizainas from "../forms/frmPreviewPartLangoDizainas";
import FrmAddNewEquipments from "../forms/frmAddNewEquipments";
import FrmPreviewNewEquipments from "../forms/frmPreviewNewEquipments";
import FrmEquipmentPagrindinioLangoDizainas from "../forms/frmEquipmentPagrindinioLangoDizainas";
import FrmEquipmentinventorization from "../forms/frmEquipmentinventorization";
//import { calender } from "../../data/Schema";

var tabs = [];

export class ITabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: [],
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
    if (tabs.includes(this.props.info)) {
    } else {
      tabs = [...tabs,  [this.props.tab]];
    }

    // const tabPanes = [];
    // for (let i = 0; i < this.state.tabs.length; i++) {
    //   const title = this.state.tabs[i].title;
    //   tabPanes.push({
    //     menuItem: "title",
    //     render: () => <Tab.Pane>{this.dumyTabPane({ i })}</Tab.Pane>
    //   });
    // }
    const tabPanes = [];
    for (let i = 0; i <  tabs.length; i++) {
      // const title = this.state.tabs[i].title;
      // document.querySelector('.ui.attached.tabular.menu a.item').classList.remove('actove')
     
     
      tabPanes.push({
        menuItem: "title " + i,
        render: () => <Tab.Pane className={"active"}>{ tabs[i] }</Tab.Pane>
      });


     
  
    }

    return (
      <div>  
        <Tab panes={tabPanes} />
      </div>
    );
  }
} export default ITabs;