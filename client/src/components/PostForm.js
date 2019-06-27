import React from 'react'
import axios from 'axios'
import { Form, } from 'semantic-ui-react'
import ImageUploader from 'react-images-upload'

class PostForm extends React.Component {
  defaultValues = { title: "", body: "", image: "", categories:[], post_categories: []  }
  state = {...this.defaultValues}
  constructor(props) {
    super(props);
     this.onDrop = this.onDrop.bind(this);
}

  componentDidMount(){
    axios.get('/api/categories')
    .then( res => {
      this.setState({ categories: res.data, });
      })
      .catch( err => {
        console.log(err.response);
      })
    }

  categoryCheckboxes = () => {
    // debugger
    return this.state.categories.map( cat => (
      <Form.Checkbox
        key={cat.id} 
        id={cat.id}
        name={cat.label} 
        label={cat.label}
        // todo checked={} 
        // todo onChange={} 
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

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/posts',{...this.state})
      .then(res => {
        const {history } = this.props
        history.push("/posts")
      })
      .catch(err => {
        console.log(err.response)
      })
      this.setState({ ...this.defaultValues, })
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
        <Form.TextArea 
          label="Body"
          placeholder="Body"
          name="body"
          value={this.state.body}
          onChange={this.handleChange}
          style={{ minHeight: 300 }} 
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
            { this.categoryCheckboxes() }
        </Form.Group>
        <Form.Button>Post</Form.Button>
      </Form>
    )
  }
}


export default PostForm