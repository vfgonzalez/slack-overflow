import React from "react";
import { Footer, Icon, Button, Tabs, Tab } from 'react-materialize'
import "./Footer.css";

const Foot = props => (
  <div>
    <Footer copyrights="2018 Copyright"
      moreLinks={
        <a className="grey-text text-lighten-4 right" href="https://github.com/vfgonzalez/slack-overflow">Github Open Source Repository</a>
      }
      links={
        <ul>
          {/* <li><a className="grey-text text-lighten-3">Github Contributors</a></li> */}
        </ul>
      }
      className='example'
    >
      <h5 className="white-text">Slack Overflow</h5>
      <Tabs className='tab-demo z-depth-1'>
        <Tab  title="Contributors">
          <li><Icon tiny>insert_chart</Icon>  <a className="grey-text text-lighten-3" href="https://github.com/vfgonzalez">vfgonzalez</a></li>
          <li><Icon tiny>insert_chart</Icon>  <a className="grey-text text-lighten-3" href="https://github.com/gavinquirk">gavinquirk</a></li>
          <li><Icon tiny>insert_chart</Icon>  <a className="grey-text text-lighten-3" href="https://github.com/CLopes1">clopes1</a></li>
          <li><Icon tiny>insert_chart</Icon>  <a className="grey-text text-lighten-3" href="https://github.com/ThomasSeaman">thomasseaman</a></li>
          <li><Icon tiny>insert_chart</Icon>  <a className="grey-text text-lighten-3" href="https://github.com/jdknappe">jdknappe</a></li>
        </Tab>
        <Tab title="Inspiration">One day we were sitting in class watching valuable links from our biggest resource, our fellow students, flood the Slack channel. Knowing that the channel had hit its limits we scrambled to save these links in any means possible. Some in our notes, others in our favorites and that is when it dawned on us and...... Slack Overflow was born.</Tab>
        <Tab title="Contact Us">949-867-5309</Tab>
      </Tabs>
    </Footer>
  </div>



);

export default Foot;