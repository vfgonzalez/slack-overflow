import React from 'react'
import {Modal, Button,Row,Input,Icon} from 'react-materialize'



const Login = () =>

<div>

<Modal
  header='Welcome Admin, Please login'
  trigger={<Button className="transparent"><Icon floating large>settings</Icon></Button>}>
  
  <Row>
<Input s={12} label="Email" validate><Icon>account_circle</Icon></Input>
<Input s={12} label="Password" type='password' validate><Icon>lock</Icon></Input>
</Row>
<Button right>Login</Button>
</Modal>
</div>;


export default Login;
