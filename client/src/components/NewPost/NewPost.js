import React from 'react'
import {Modal, Button,Row,Input,Icon} from 'react-materialize'


const NewPost = () =>

<div>

<Modal
  header='Add your New Link Here'
  trigger={<Button className='grey darken-2'><Icon className='large'>add_box</Icon></Button>}>
  <Row>
<Input s={12} label="Link" validate><Icon>insert_link</Icon></Input>
<Input s={12} label="Title" validate><Icon>title</Icon></Input>
<Input s={12} label="Summary"   type="textarea"validate><Icon>info</Icon></Input>
</Row>
<Button className="red" >Cancel</Button>


<Button classname="green"> Submit</Button>
</Modal>
</div>;


export default NewPost;
