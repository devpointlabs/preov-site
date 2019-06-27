import React from 'react'
import axios from 'axios'
import { Form, } from 'semantic-ui-react'
import ImageUploader from 'react-images-upload'

class PostForm extends React.Component {
  state = { title: "", body: "", image: [], categories:[], post_categories: []  }

  constructor(props) {
    super(props);
     this.state = { title: "", body: "", image: "", categories:[]  };
     this.onDrop = this.onDrop.bind(this);
}

  componentDidMount(){
    debugger
    axios.get('/api/categories/path')
      .then( res => {
        this.setState({ categories: res.data, });
      })
      .catch( err => {
        console.log(err.response);
      })
  }

  categoryCheckboxes = () => {
    return this.state.categories.map( cat => (
      <Form.Checkbox
        key={cat.id} 
        id={cat.id}
        name={cat.label} 
        label={cat.label}
        // checked={} 
        // onChange={} 
      />
    ));
  };

  onDrop(image) {
    this.setState({
        image: image[0],
    });
  }

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
        <ImageUploader
          withIcon={true}
          buttonText='Choose image'
          onChange={this.onDrop}
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
          singleImage = {true}
        />
        <Form.Group inline>
        <label>Categories</label>
          <Form.Checkbox>
            { this.categoryCheckboxes() }
          </Form.Checkbox>
        </Form.Group>
        <Form.Button>Post</Form.Button>
      </Form>
    )
  }
}


export default PostForm