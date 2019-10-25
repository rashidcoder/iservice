import React, { Component } from "react";
import { Icon, Menu, Sidebar } from "semantic-ui-react";
import { Accordion } from "semantic-ui-react";
export class ISidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebar: [
        {
          text: "New work",
          icon: "",
          activeIndex: 0,
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
          icon: "",
          activeIndex: 1,
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
          icon: "",
          activeIndex: 2,
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
          icon: "",
          activeIndex: 4,
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
          icon: "",
          activeIndex: 5,
          child: [
            {
              text: "xyz",
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

  render() {
    const { activeIndex } = this.state;

    const parent = [];
    this.state.sidebar.forEach(item => {
      const childItems = [];
      item.child.forEach(item_ch => {
        childItems.push(
          <Accordion.Content active={activeIndex === item.activeIndex}>
            <a href={item_ch.link}> {item_ch.text} </a>
          </Accordion.Content>
        );
      });
      parent.push(
        <Menu.Item as="a" key={item.activeIndex}>
          {/*<Icon name="truck icon" />*/}

          <Accordion inverted>
            <Accordion.Title
              active={activeIndex === item.activeIndex}
              index={item.activeIndex}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              {item.text}
            </Accordion.Title>
            {childItems}
          </Accordion>
          {/* {item.text} */}
          {/*  {childItems}*/}
        </Menu.Item>
      );
    });
    return (
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        direction=""
        inverted
        vertical
        visible
      >
        {parent}
      </Sidebar>
    );
  }
}
export default ISidebar;
