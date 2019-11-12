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
              text: "New Work Order",
              index: 0,
              tab: <FrmNewWorkOrderTruck />,
              link: "#"
            },
            {
              text: "Work Order Mgts",
              index: 1,
              tab: <FrmWorkOrdersManagment />,
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
              index: 2,
              link: "#"
            },
            {
              text: "Customers",
              index: 3,
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
              index: 4,
              link: "#"
            },
            {
              text: "Employees",
              index: 5,
              link: "#"
            },
            {
              text: "Reminder",
              index: 6,
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
              index: 7,
              link: "#"
            },
            {
              text: "Suppliers",
              index: 8,
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
              text: "xyz",
              index: 9,
              link: "#"
            }
          ]
        },
        {
          text: "Equipment",
          icon: "",
          activeIndex: 6,
          child: [
            {
              text: "xyz",
              index: 10,
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
              index: 11,
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
            {" "}
            {item_ch.text}{" "}
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
