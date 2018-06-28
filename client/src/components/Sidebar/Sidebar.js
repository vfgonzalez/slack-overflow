import React from 'react'
import { SideNav, SideNavItem, Button, Modal } from 'react-materialize'


const Sidebar = () =>
    <SideNav
        trigger={<Button className='left transparent '>Slack Overflow</Button>}
        options={{ closeOnClick: false }}
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
        <SideNavItem href='#' icon='people'>
            <Modal
                className="center-align"
                header='Developers'
                trigger={<Button className="transparent black-text">Contributors</Button>}>
                <h4>

                <ul>
                    <li>Christian Lopes</li>
                    <li>Gavin Quirk</li>
                    <li>Jeremy Knappe</li>
                    <li>Thomas Seaman</li>
                    <li>Vicente Gonzalez</li>
                </ul>
                </h4>
            </Modal>

        </SideNavItem>
        <SideNavItem href='#' icon="lightbulb_outline">
        <Modal
                header='Inspiration'
                trigger={<Button className="transparent black-text">Inspiration</Button>}>
                <p>
                One day we were sitting in class watching valuable links from our biggest resource, our fellow students, flood the Slack channel. Knowing that the channel had hit its limits we scrambled to save these links in any means possible. Some in our notes, others in our favorites and that is when it dawned on us and...... Slack Overflow was born.
                </p>
            </Modal>
        </SideNavItem>
        <SideNavItem divider />
        <SideNavItem icon="phone">
            <Modal
                header='Contact Us'
                trigger={<Button className="transparent black-text">Contact Us</Button>}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </Modal>
        </SideNavItem>
        <SideNavItem waves onClick={() => window.open("https://github.com/vfgonzalez/slack-overflow", "_blank")} icon="device_hub" >Github Repository</SideNavItem>

    </SideNav >

export default Sidebar;