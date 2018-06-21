import React from 'react'
import { SideNav, SideNavItem, Button, Icon, Collapsible, CollapsibleItem } from 'react-materialize'


const Sidebar = () =>
    <SideNav
        trigger={<Button className='left transparent '>Slack Overflow</Button>}
        options={{ closeOnClick: true }}
        left
    >
        {/* <SideNavItem header="Contributors" > */}
        <SideNavItem className="black-text">
       

        </SideNavItem >
  
    <SideNavItem header="Slack Overflow"
    // userView
    // user={{
    //   background: 'img/office.jpg',
    //   image: 'img/yuna.jpg',
    //   name: 'John Doe',
    //   email: 'jdandturk@gmail.com'
    // }}
  />
  <SideNavItem href='#' icon='people'>Contributors</SideNavItem>
  <SideNavItem href='#' icon="lightbulb_outline">Inspiration</SideNavItem>
  <SideNavItem divider />
  <SideNavItem icon="phone" >Contact</SideNavItem>
  <SideNavItem waves onClick={()=> window.open("https://github.com/vfgonzalez/slack-overflow", "_blank")}  icon="device_hub" >Github Repository</SideNavItem>

    </SideNav >

export default Sidebar;