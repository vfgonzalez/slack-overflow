import React from 'react'
import {SideNav, SideNavItem, Button} from 'react-materialize'


 const Sidebar =()=>
<SideNav
  trigger={<Button className='left grey darken-2'>Slack Overflow</Button>}
  options={{ closeOnClick: true }}
  left
  >
  <SideNavItem userView
    user={{
      background: 'img/office.jpg',
      image: 'img/yuna.jpg',
      name: 'John Doe',
      email: 'jdandturk@gmail.com'
    }}
  />
  <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
  <SideNavItem href='#!second'>Second Link</SideNavItem>
  <SideNavItem divider />
  <SideNavItem subheader>Subheader</SideNavItem>
  <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
</SideNav>

export default Sidebar;