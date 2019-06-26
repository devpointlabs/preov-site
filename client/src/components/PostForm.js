import React from 'react'
import axios from 'axios'
import { Form, } from 'semantic-ui-react'

class PostForm extends React.Component {
  state = { title: "", body: ""}

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  render(){
    const { value } = this.state
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
        <Form.TextArea 
        label="Body"
        placeholder="Body"
        name="body"
        value={this.state.body}
        onChange={this.handleChange}
        required
        />
        <Form.Group inline>
          <label>Category (select all that apply):</label>
          <Form.Radio
          label="Family"
          value='family'
          checked={value === 'family'}
          onChange={this.handleChange} />
          <Form.Radio
          label="Relationships"
          value='relationships'
          checked={value === 'relationships'}
          onChange={this.handleChange} />
          <Form.Radio
          label="Health"
          value='health'
          checked={value === 'health'}
          onChange={this.handleChange} />
        </Form.Group>
        <Form.Button>Post</Form.Button>
      </Form>
    )
  }
}


export default PostForm