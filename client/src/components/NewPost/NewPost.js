import React, { Component } from 'react'
import { Modal, Button, Row, Input, Icon } from 'react-materialize'
import API from '../../utils/API'
// import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class NewPost extends Component {

  state = {
    username: "",
    password: "",
    redirect: false,
    link: '',
    title: '',
    description: ''
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.setState({ link: this.state.link })
  //   this.setState({ title: this.state.title })
  //   this.setState({ description: this.state.description })
  //   // this.getUser(this.state.username)
  //   console.log(this.state.link)
  //   console.log(this.state.title)
  //   console.log(this.state.description)
  // };


  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.username)
    API.saveResource(
      {
        link: this.state.link,
        title: this.state.title,
        description: this.state.description,
        category: 'General Tools'
      }
    )
      .then(res => console.log(res))
      .catch(err => console.log(err));

  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {



    return (

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
            <form>
              {/* <Input
              s={12}
              label="Link"
              name="link"
              value={this.state.link}
            >
              <Icon large>insert_link</Icon>
            </Input>

            <Input
              s={12}
              label="Title"
              name="title"
              value={this.state.title}
            >
              <Icon large>title</Icon>
            </Input>

            <Input
              s={12}
              label="Summary"
              name='description'
              value={this.state.description}
              type="textarea"
            >
              <Icon large>info</Icon>
            </Input> */}


              <Input
                s={12}
                value={this.state.link}
                onChange={this.handleInputChange}
                name="link"
                type="text"
                label="Link"
              // placeholder="Username (required)"
              >
                <Icon large>insert_link</Icon>
              </Input>
              <Input
                s={12}
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                type="text"
                label="Title"
              // placeholder="Password (required)"
              >
                <Icon large>title</Icon>
              </Input>
              <Input
                s={12}
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                type="textarea"
                label="Description"
              // placeholder="Password (required)"
              >
                <Icon large>info</Icon>
              </Input>

              {/* <Select
                value={this.state.category}
                onChange={this.handleInputChange}
                name="category"
                displayEmpty
                // className={classes.selectEmpty}
              >
                <MenuItem value="" disabled>
                  Placeholder
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select> */}








            </form>
          </Row>
          {/* <Button className="red" >Cancel</Button> */}


          <Button onClick={this.handleFormSubmit} className="green"> Submit</Button>
        </Modal>
      </div>
    )
  }
}

export default NewPost;
