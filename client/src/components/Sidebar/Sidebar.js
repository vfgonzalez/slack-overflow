import React from 'react'
import { SideNav, SideNavItem, Button, Modal } from 'react-materialize'
import "./Sidebar.css";


const Sidebar = () =>
    <SideNav
        trigger={<Button className='brand z-depth-0 floating transparent '>Slack Overflow</Button>}
        options={{ closeOnClick: false }}
        left
        
    >       
        <SideNavItem icon='people'>
            <Modal
                className="sidebar-info"
                header=' Team of Developers'
                trigger={<Button className="transparent black-text z-depth-0 floating" target="_blank" rel="noopener noreferrer">Contributors</Button>}>
                <hr/>
                
                <ul className="center-align">
                <li><h5> Christian Lopes 
                    <br/>
                    <a href="https://github.com/CLopes1" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square"></i></a> | <a href="https://www.linkedin.com/in/christian-lopes/" rel="noopener noreferrer" target="_blank"><i class="fab fa-linkedin"></i></a>
                    </h5>
                </li>
                <li><h5>Gavin Quirk
                    <br/>
                    <a href="https://github.com/gavinquirk" rel="noopener noreferrer" target="_blank"><i class="fab fa-github-square"></i></a> | <a href="https://www.linkedin.com/in/gavin-quirk/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                    </h5> 
            
                    

                </li>
                <li><h5>Jeremy Knappe
                    <br/>
                    <a href="https://github.com/jdknappe" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square"></i></a> | <a href="https://www.linkedin.com/in/jeremy-knappe/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                    </h5>
                </li>
                <li><h5>Thomas Seaman
                    <br/>
                    <a href="https://github.com/ThomasSeaman" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square"></i></a> | <a href=" https://www.linkedin.com/in/thomasseaman/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                    </h5>
                </li>
                <li>
                    <h5>Vicente Gonzalez
                        <br/>
                        <img src="./images/profileimg/vicente.jpeg" alt="Vicente Gonzalez"/>
                        <br/>
                        <a href="\https://github.com/vfgonzalez" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square"></i></a> | <a href="https://www.linkedin.com/in/vfgonzalez/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                    </h5>
                
                </li>
                </ul>
                

            </Modal>

        </SideNavItem>
        <SideNavItem href='#' icon="lightbulb_outline">
        <Modal
                className="sidebar-info"
                header='Inspiration'
                trigger={<Button className="transparent black-text z-depth-0 floating">Inspiration</Button>}>
                <h5>
                One day we were sitting in class watching valuable links from our biggest resource, our fellow students, flood the Slack channel. Knowing that the channel had hit its limits we scrambled to save these links in any means possible. Some in our notes, others in our favorites and that is when it dawned on us and...... Slack Overflow was born.
                </h5>
            </Modal>
        </SideNavItem>
        <SideNavItem divider />
        <SideNavItem icon="phone">
            <Modal
                className="sidebar-info"
                header='Contact Us'
                trigger={<Button className="transparent black-text z-depth-0 floating">Contact Us</Button>}>
                <h5>Lorem ih4sum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </h5>
            </Modal>
        </SideNavItem>
        <SideNavItem waves onClick={() => window.open("https://github.com/vfgonzalez/slack-overflow", "_blank")} icon="device_hub" >Github Repository</SideNavItem>

    </SideNav >

export default Sidebar;