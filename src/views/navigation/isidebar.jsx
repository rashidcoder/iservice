import React, { Component } from "react";
import { Label, Button } from "semantic-ui-react";
import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";
import { workOrders } from "../../data/Schema";
export class ISidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebar: [
        {
          text: "New work",
          icon:'',
          child: [
            {
              text: "New Work Order",
              link: "www.google.com"
            },
            {
              text: "Work Order Managment",
              link: "#"
            }
          ]
        },
        {
          text: "Customer",
          icon:'',
          child: [
            {
              text: "New Customer",
              link: "#"
            },
            {
              text: "Customers",
              link: "#"
            }
          ]
        },
        {
          text: "Calender",
          icon:'',
          child: [
            {
              text: "Booking ",
              link: "#"
            },
            {
              text: "Employees",
              link: "#"
            },
            {
              text: "Reminder",
              link: "#"
            }
          ]
        },
        {
          text: "Supplier",
          icon:'',
          child: [
            {
              text: "New Supplier",
              link: "#"
            },
            {
              text: "Suppliers",
              link: "#"
            }
          ]
        },
        {
          text: "Parts",
          icon:'',
          child: [
            {
              text: "xyz",
              link: "#"
            }
          ]
        },
        {
          text: "Equiptments",
          icon:'',
          child: [
            {
              text: "xyz",
              link: "#"
            }
          ]
        },
        {
          text: "Settings",
          icon:'',
          child: [
            {
              text: "xyz",
              link: "#"
            }
          ]
        }
      ]
    };
  }

  render() {

    const parent = [];
    this.state.sidebar.forEach(item => {
      const childItems =[];

      item.child.forEach(item_ch => {

        childItems.push(
          <a href={item_ch.link}> {item_ch.text} </a> 
        );

      });
      
      parent.push(
        <Menu.Item as="a">
          <Icon name="home" />
          {item.text} 
          {childItems}
        </Menu.Item>
      );

    });
    return (
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        visible
        width="thin" >
       { parent }
      </Sidebar>
    );
  }
}
export default ISidebar;

/*

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" integrity="sha256-9mbkOfVho3ZPXfM7W8sV2SndrGDuh7wuyLjtsWeTI1Q=" crossorigin="anonymous" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js" integrity="sha256-t8GepnyPmw9t+foMh3mKNvcorqNHamSKtKRxxpUEgFI=" crossorigin="anonymous"></script>

*/
