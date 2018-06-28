import React from "react";
import { Button } from 'react-materialize'
import "./Post.css";
import NewPost from '../NewPost/NewPost'


const Post = props => (
  
  <div>
    <Button floating  fab='vertical' faicon='fa fa-plus' className='red' large style={{ bottom: '45px', right: '24px' }}>
      
      <NewPost/>
      <Button floating icon="arrow_drop_up" className='grey' large />
      
      
    </Button>
  </div>
);

export default Post;