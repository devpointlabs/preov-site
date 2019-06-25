import React from 'react'
import axios from 'axios'
import { Form, } from 'semantic-ui-react'

class PostForm extends React.Component {
  state = { title: "", body: ""}

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
        label="Title"
        placeholder="Title"
        name="title"
        value={this.state.title}
        onChange={this.handleChange}
        required
        />
        <Form.Input 
        label="Body"
        placeholder="Body"
        name="body"
        value={this.state.body}
        onChange={this.handleChange}
        required
        />
        <Form.Button>Post</Form.Button>
      </Form>
    )
  }
}


export default PostForm