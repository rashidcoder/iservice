import React, { Component } from "react"
import { Icon, Menu, Sidebar, Button, Tab, Grid } from "semantic-ui-react"
import { Accordion } from "semantic-ui-react"
import ITabs from "../tabs/itabs"
import FrmNewWorkOrderTruck from "../forms/frmNewWorkOrderTruck"
import FrmNewWorkOrderTrailer from "../forms/frmNewWorkOrderTrailer"
import FrmModifyWorkOrder from "../forms/frmModifyWorkOrder"
import FrmCustomerPagrinioLangoDizainas from "../forms/frmCustomerPagrinioLangoDizainas"
import FrmAddNewCustomer from "../forms/frmAddNewCustomer"
import FrmWorkOrdersManagment from "../forms/frmWorkOrdersManagment"
import FrmPreviewCustomer from "../forms/frmPreviewCustomer"
import FrmSupplierPargindinoLangoDizainas from "../forms/frmSupplierPargindinoLangoDizainas"
import FrmPreviewSuplier from "../forms/frmPreviewSuplier"
import FrmAddNewSupplier from "../forms/frmAddNewSupplier"
import FrmPartsPargrindinioLangoDizainas from "../forms/frmPartsPargrindinioLangoDizainas"
import ICalenderSchedular from "../calendar/ICalendarSchedular"
import FrmBooking from "../forms/frmBooking"
import FrmAddnewPartLangoDlizainas from "../forms/frmAddnewPartLangoDlizainas"
import FrmPreviewPartLangoDizainas from "../forms/frmPreviewPartLangoDizainas"
import FrmAddNewEquipments from "../forms/frmAddNewEquipments"
import FrmPreviewNewEquipments from "../forms/frmPreviewNewEquipments"
import FrmEquipmentPagrindinioLangoDizainas from "../forms/frmEquipmentPagrindinioLangoDizainas"
import FrmEquipmentinventorization from "../forms/frmEquipmentinventorization"
//import { BrowserRouter,Route } from 'react-router-dom'
var tabs = []
const tabPanes = []
export class ISidebar extends Component {
  constructor(props) {
    super(props)
    this.updateInfo = this.updateInfo.bind(this)
    this.state = {
      tab: "",
      tabActiveIndex: 0,
      sidebar: [
        {
          text: "New work",
          icon: "",
          activeIndex: 0,
          child: [
            {
              text: "New Work Order Truck",
              index: 1,
              tab: <FrmNewWorkOrderTruck />
            },
            {
              text: "New Work Order Trailer",
              index: 2,
              tab: <FrmNewWorkOrderTrailer/>
            },
            {
              text: "Work Order Mgts",
              index: 3,
              tab: <FrmWorkOrdersManagment />
            },
            {
              text: "Work Order Modify",
              index: 4,
              tab: <FrmModifyWorkOrder/>
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
              index: 5,
              tab: <FrmAddNewCustomer/>
            },
            {
              text: "Customers Parginio",
              tab: <FrmCustomerPagrinioLangoDizainas/>,
              index: 6
            },
            {
              text: "Preview Customers ",
              tab: <FrmPreviewCustomer/>,
              index: 7
            }
          ]
        },
        {
          text: "Calender",
          icon: "",
          activeIndex: 8,
          child: [
            {
              text: "Booking ",
              tab:<FrmBooking/>,
              index: 9
            },
            {
              text: "Employees",
              tab:<ICalenderSchedular/>,
              index: 10
            },
            {
              text: "Reminder",
              tab:<ICalenderSchedular/>,
              index: 11
            },
            {
              text: "Add New Event",
              tab:<ICalenderSchedular/>,
              index: 12
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
              index: 13
            },
            {
              text: "Supplier Pargindino",
              tab:<FrmSupplierPargindinoLangoDizainas/>,
              index: 14
            },
            {
              text: "Preview Suppliers",
              tab:<FrmPreviewSuplier/>,
              index: 15
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
              index: 16
            },
            {
              text: "Preview Parts",
              tab:<FrmPreviewPartLangoDizainas/>,
              index: 17
            },
            {
              text: "Parts pagrindinio",
              tab:<FrmPartsPargrindinioLangoDizainas/>,
              index: 18
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
              index: 19,
              tab: <FrmAddNewEquipments/>
            },
            {
              text: "Equipment pagrindinio",
              tab:<FrmEquipmentPagrindinioLangoDizainas/>,
              index: 20
            },
            {
              text: "Preview pagrindinio Inventorization",
              tab:<FrmEquipmentinventorization/>,
              index: 21
            },
            {
              text: "Preview Equipment",
              tab:<FrmPreviewNewEquipments/>,
              index: 22
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
              index: 23
            }
          ]
        }
      ]
    }
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  updateInfo = e => {
    console.log("hello world " + e)
  }

  render() {
    var styles = {
      width: "172px"
    }
    const { activeIndex } = this.state
  
    const parent = []
    this.state.sidebar.forEach(item => {
      const childItems = []
      item.child.forEach(item_ch => {
        childItems.push(
          <Button
            onClick={() => {
              this.setState({  
                tab: item_ch.tab,
                tabActiveIndex: item_ch.index
              }) 

             
                 tabs.push({tab:item_ch.tab,title:item_ch.text})
                 console.log(JSON.stringify(tabs)  + " value of the tabs")
          
             
              
              while(tabPanes.length) {
                tabPanes.pop()
              }
              for (let i = 0; i < tabs.length; i++) { 
                tabPanes.push({
                  menuItem: tabs[i].title,
                  render: () => <Tab.Pane className={"active"}>{tabs[i].tab}</Tab.Pane>
                })
              }
              console.log(JSON.stringify(tabPanes)  + " value of the tabspanes")
           
            }}
          >
            {item_ch.text}
          </Button>
        )
      })
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

              {childItems}
            </Accordion.Content>
          </Accordion>
          {/* {item.text} */}
          {/*  {childItems}*/}
        </Menu.Item>
      )
    })
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
          <ITabs tabPanes={tabPanes} activeIndex={tabPanes.length} />
        </Grid.Column>
      </Grid>
    )
  }
}
export default ISidebar
