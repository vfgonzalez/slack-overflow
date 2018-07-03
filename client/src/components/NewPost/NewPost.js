import React, { Component } from 'react'
import { Modal, Button, Row, Input, Icon, Toast, Dropdown, NavItem } from 'react-materialize'
import API from '../../utils/API'
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
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

  // Send new post to database
  handleFormSubmit = event => {
    event.preventDefault();
    API.saveResource(
      {
        link: this.state.link,
        title: this.state.title,
        description: this.state.description,
        category: 'General Tools'
      }
    )
      // .then(res => this.clearResources)
      .then(res => console.log(res.data))

      // .then(res => console.log(instance.close()))
      .catch(err => console.log(err))
  };

  clearResources = () => {
    this.setState({ link: '' })
    this.setState({ title: '' })
    this.setState({ description: '' })
  }

  // Allows inputs to be manipulated while typing
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


              <Select
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
              </Select>
              {/* <select name="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select> */}
            </form>

            {/* <Toast toast='"here you go!" + this.state.link' onClick={this.handleFormSubmit} className="green modal-close">Submit</Toast> */}
            <Toast toast={"Thanks For Submitting " + this.state.link + "!"} onClick={this.handleFormSubmit} className="green modal-close">Submit</Toast>

          </Row>
          {/* <Button className="red modal-close" >Cancel</Button> */}
          {/* <Button onClick={this.handleFormSubmit} className="green modal-close"> Submit</Button> */}
        </Modal>
      </div>
    )
  }
}

// NewPost.propTypes = {
//   hideModal: PropTypes.func
// }

export default NewPost;
