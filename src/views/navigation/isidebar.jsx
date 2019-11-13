import React, { Component } from "react";
import { Icon, Menu, Sidebar, Button, Tab, Grid } from "semantic-ui-react";
import { Accordion } from "semantic-ui-react";

import ITabs from "../tabs/itabs";
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
//import { BrowserRouter,Route } from 'react-router-dom';
export class ISidebar extends Component {
  constructor(props) {
    super(props);
    this.updateInfo = this.updateInfo.bind(this);
    this.state = {
      tab: "",
      sidebar: [
        {
          text: "New work",
          icon: "",
          activeIndex: 0,
          child: [
            {
              text: "New Work Order Truck",
              index: 0,
              tab: <FrmNewWorkOrderTruck />,
              link: "#"
            },
            {
              text: "New Work Order Trailer",
              index: 1,
              tab: <FrmNewWorkOrderTrailer/>,
              link: "#"
            },
            {
              text: "Work Order Mgts",
              index: 2,
              tab: <FrmWorkOrdersManagment />,
              link: "#"
            },
            {
              text: "Work Order Modify",
              index: 3,
              tab: <FrmModifyWorkOrder/>,
              link: "#"
            }
          ]
        },
        {
          text: "Customer",
          icon: "",
          activeIndex: 1,
          child: [
            {
              text: "New Customer",
              index: 4,
              tab: <FrmAddNewCustomer/>,
              link: "#"
            },
            {
              text: "Customers Parginio",
              tab: <FrmCustomerPagrinioLangoDizainas/>,
              index: 5,
              link: "#"
            },
            {
              text: "Preview Customers ",
              tab: <FrmPreviewCustomer/>,
              index: 6,
              link: "#"
            }
          ]
        },
        {
          text: "Calender",
          icon: "",
          activeIndex: 2,
          child: [
            {
              text: "Booking ",
              tab:<FrmBooking/>,
              index: 7,
              link: "#"
            },
            {
              text: "Employees",
              tab:<ICalenderSchedular/>,
              index: 8,
              link: "#"
            },
            {
              text: "Reminder",
              tab:<ICalenderSchedular/>,
              index: 9,
              link: "#"
            },
            {
              text: "Add New Event",
              tab:<ICalenderSchedular/>,
              index: 10,
              link: "#"
            }
          ]
        },
        {
          text: "Supplier",
          icon: "",
          activeIndex: 4,
          child: [
            {
              text: "New Supplier",
              tab:<FrmAddNewSupplier/>,
              index: 11,
              link: "#"
            },
            {
              text: "Supplier Pargindino",
              tab:<FrmSupplierPargindinoLangoDizainas/>,
              index: 12,
              link: "#"
            },
            {
              text: "Preview Suppliers",
              tab:<FrmPreviewSuplier/>,
              index: 13,
              link: "#"
            }
          ]
        },
        {
          text: "Parts",
          icon: "",
          activeIndex: 5,
          child: [
            {
              text: "Add New Parts",
              tab:<FrmAddnewPartLangoDlizainas/>,
              index: 14,
              link: "#"
            },
            {
              text: "Preview Parts",
              tab:<FrmAddnewPartLangoDlizainas/>,
              index: 15,
              link: "#"
            },
            {
              text: "Parts pagrindinio",
              tab:<FrmPartsPargrindinioLangoDizainas/>,
              index: 16,
              link: "#"
            },
          ]
        },
        {
          text: "Equipment",
          icon: "",
          activeIndex: 6,
          child: [
            {
              text: "Add New Equipments",
              index: 17,
              tab: <FrmAddNewEquipments/>,
              link: "#"
            },
            {
              text: "Equipment pagrindinio",
              tab:<FrmEquipmentPagrindinioLangoDizainas/>,
              index: 18,
              link: "#"
            },
            {
              text: "Preview pagrindinio Inventorization",
              tab:<FrmEquipmentinventorization/>,
              index: 19,
              link: "#"
            },
            {
              text: "Preview Equipment",
              tab:<FrmPreviewNewEquipments/>,
              index: 20,
              link: "#"
            }
          ]
        },
        {
          text: "Settings",
          icon: "",
          activeIndex: 7,
          child: [
            {
              text: "xyz",
              index: 21,
              link: "#"
            }
          ]
        }
      ]
    };
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  updateInfo = e => {
    console.log("hello world " + e);
  };

  render() {
    var styles = {
      width: "172px"
    };
    const { activeIndex } = this.state;

    const parent = [];
    this.state.sidebar.forEach(item => {
      const childItems = [];
      item.child.forEach(item_ch => {
        childItems.push(
          <Button
            onClick={() => {
              this.setState({ tab: item_ch.tab });
             
            }}
          >
            {item_ch.text}
          </Button>
        );
      });
      parent.push(
        <Menu.Item as="a" key={item.activeIndex}>
          {/*<Icon name="truck icon" />*/}

          <Accordion inverted>
            <Accordion.Title
              active={activeIndex === item.activeIndex}
              index={item.activeIndex}
              onClick={this.handleClick.bind()}
            >
              <Icon name="dropdown" />
              {item.text}
            </Accordion.Title>
            <Accordion.Content active={activeIndex === item.activeIndex}>
              {/*<Route exactpath="/" component={(props)=><ITabs {...props} title ={item_ch.text[props.match]}/>} />*/}
              {childItems}
            </Accordion.Content>
          </Accordion>
          {/* {item.text} */}
          {/*  {childItems}*/}
        </Menu.Item>
      );
    });
    return (
      <Grid>
        <Grid.Column width={2}>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            direction=""
            inverted
            vertical
            visible
            style={styles}
          >
            {parent}
          </Sidebar>
        </Grid.Column>
        <Grid.Column width={14}>
          <ITabs tab={this.state.tab} />
        </Grid.Column>
      </Grid>
    );
  }
}
export default ISidebar;
