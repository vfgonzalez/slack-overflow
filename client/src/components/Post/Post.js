import React from "react";
import { Button } from 'react-materialize'
import "./Post.css";
import NewPost from '../NewPost/NewPost'


const Post = props => (
  // <div className="col-lg-12">
  <div>
    {/* <Button floating large className='green' waves='light' icon='add' style={{ bottom: '45px', right: '24px' }} /> */}
    <Button floating  fab='vertical' faicon='fa fa-plus' className='red' large style={{ bottom: '45px', right: '24px' }}>
      {/* <Button floating icon='add' className='green' large> </Button> */}
      {/* <Button floating icon={<NewPost/>} className='transparent' large /> */}
      <NewPost/>
      <Button floating icon="arrow_drop_up" className='grey' large />
      
      
    </Button>
  </div>
);

export default Post;