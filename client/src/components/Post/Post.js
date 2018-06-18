import React from "react";
import { Button } from 'react-materialize'
import "./Post.css";

const Post = props => (
  <div className="col-lg-12">
    {/* <Button floating large className='green' waves='light' icon='add' style={{ bottom: '45px', right: '24px' }} /> */}
    <Button floating fab='vertical' faicon='fa fa-plus' className='red' large style={{ bottom: '45px', right: '24px' }}>
      <Button floating icon='add' className='green' large />
      <Button floating icon="arrow_drop_up" className='grey' large />
      
    </Button>
  </div>
);

export default Post;