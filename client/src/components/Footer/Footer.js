import React from "react";
import { Footer } from 'react-materialize'
import "./Footer.css";



const Foot = props => (
  <div >
    <Footer copyrights="2018 Copyright"
      // className="black lighten-2"
      id="footer-style"
      moreLinks={
        <a className="grey-text text-lighten-4 right" href="https://github.com/vfgonzalez/slack-overflow">Github Open Source Repository</a>
      }
    >
      
    </Footer>
  </div>



);

export default Foot;