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
                <hr />

                <div className="center-align">
                    <div className="row">
                        <div className=" col s4 team-info">
                            <img className="profileimg" src="./images/profileimg/christian.jpg" alt="Christian Lopes" />
                            <br />
                        <h5> Christian Lopes
                    <br />
                            <a href="https://github.com/CLopes1" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github-square"></i>
                            </a> | <a href="https://www.linkedin.com/in/christian-lopes/" rel="noopener noreferrer" target="_blank">
                            <i class="fab fa-linkedin"></i>
                            </a>
                        </h5>
                        </div>
                        <div className=" col s4 team-info">
                            <img className="profileimg" src="./images/profileimg/gavin.jpg" alt="Gavin Quirk" />
                    <br />
                        <h5>Gavin Quirk
                            <br />
                            <a href="https://github.com/gavinquirk" rel="noopener noreferrer" target="_blank">
                                <i class="fab fa-github-square"></i>
                            </a> | <a href="https://www.linkedin.com/in/gavin-quirk/" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </h5>
                        </div>
                    
                        <div className=" col s4 team-info">
                            <img className="profileimg" src="./images/profileimg/#" alt="Jeremy Knappe" />
                    <br />
                        <h5>Jeremy Knappe
                            <br />
                            <a href="https://github.com/jdknappe" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-github-square"></i>
                            </a> | <a href="https://www.linkedin.com/in/jeremy-knappe/" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s6 team-info">
                            <img className="profileimg" src="./images/profileimg/thomas.jpeg" alt="Thomas Seaman" />
                            <br />
                        <h5>Thomas Seaman
                    <br />
                            <a href="https://github.com/ThomasSeaman" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-github-square"></i>
                            </a> | <a href=" https://www.linkedin.com/in/thomasseaman/" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </h5>
                        </div>
                    <div className="col s6 team-info">
                            <img className="profileimg" src="./images/profileimg/vicente.jpeg" alt="Vicente Gonzalez" />
                        <br />
                        <h5>Vicente Gonzalez
                            <br />
                            <a href="\https://github.com/vfgonzalez" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github-square"></i>
                            </a> | <a href="https://www.linkedin.com/in/vfgonzalez/" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-linkedin"></i>
                            </a>
                        </h5>

                    </div>

                    </div>
                </div>


            </Modal>

        </SideNavItem>
        <SideNavItem icon="lightbulb_outline">
            <Modal
                className="sidebar-info"
                header='Inspiration'
                trigger={<Button className="transparent black-text z-depth-0 floating">Inspiration</Button>}>
                <hr />
                <h5 className="center-align">
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
                <hr />
                <h5>Christian Lopes</h5> <h6>christian.alexander.lopes@gmail.com</h6>
                <h5>Gavin Quirk</h5>  <h6>gavinquirk.work@gmail.com</h6>
                <h5>Jeremy Knappe</h5>  <h6>email</h6>
                <h5>Thomas Seaman</h5>  <h6>thomasseaman27@gmail.com</h6>
                <h5>Vicente Gonzalez</h5>  <h6>vgonzalez28@gmail.com</h6>
            </Modal>
        </SideNavItem>
        <SideNavItem waves onClick={() => window.open("https://github.com/vfgonzalez/slack-overflow", "_blank")} icon="device_hub" >GITHUB REPOSITORY</SideNavItem>

    </SideNav >

export default Sidebar;