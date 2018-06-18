import React from 'react'
import {Modal, Button,Row,Input,Icon} from 'react-materialize'


const Login = () =>

<div>
{/* <Button onClick={() => {
  $('#foo').modal('open')
}}><Icon>settings</Icon></Button>
<Modal
  id='foo'
  header='Admin Login'>
  Welcome! Please login


</Modal> */}

<Modal
  header='Welcome Admin, Please login'
  trigger={<Button className='grey darken-2'><Icon className='large'>settings</Icon></Button>}>
  <Row>
<Input s={12} label="Email" validate><Icon>account_circle</Icon></Input>
<Input s={12} label="Password" validate><Icon>lock</Icon></Input>
</Row>
<Button right>Login</Button>
</Modal>
</div>;


export default Login;
