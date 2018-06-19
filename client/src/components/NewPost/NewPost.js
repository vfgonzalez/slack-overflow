import React from 'react'
import {Modal, Button,Row,Input,Icon} from 'react-materialize'


const NewPost = () =>

<div>

<Modal
  header='Add your New Link Here'
  trigger={<Button 
    className='green'
    icon="add"
    floating
    large
  >
  </Button>}>
  <Row>
<Input s={12} label="Link" validate><Icon large>insert_link</Icon></Input>
<Input s={12} label="Title" validate><Icon large>title</Icon></Input>
<Input s={12} label="Summary"   type="textarea"validate><Icon large>info</Icon></Input>
</Row>
{/* <Button className="red" >Cancel</Button> */}


<Button classname="green"> Submit</Button>
</Modal>
</div>;


export default NewPost;
