import React from 'react'
import axios from 'axios'
import { Form, } from 'semantic-ui-react'
import ImageUploader from 'react-images-upload'
import { Link } from "react-router-dom";


class PostForm extends React.Component {
  defaultValues = { title: "", body: "", image: "", categories:[], post_categories: []  }
  state = {...this.defaultValues}
  constructor(props) {
    super(props);
     this.onDrop = this.onDrop.bind(this);
}

  // componentDidMount(){
  //   debugger
  //   if(this.props.match.params.id){
  //     axios.get(`/api/posts/${this.props.match.params.id}`)
  //     .then(res => {
  //       const { title, body, image, categories } = res.data
  //       this.setState({title, body, image, categories})
  //     })
  //   }
  // }
  
  componentDidMount(){
    axios.get('/api/categories')
    .then( res => {
      this.setState({ categories: res.data, });
      })
      .catch( err => {
        console.log(err.response);
      })
    }

    handleChecked = (e, props) => {
      const {post_categories} = this.state
      //if props.checked is true
      if (props.checked){
          //take what post_categories already is and add this category id
          this.setState({ post_categories: [...post_categories, props.id]})
        //if props.checked is false (for unchecking a box)
      }else{
        //map through post_categories and return all where the id doesn't match the unchecked category id
        let unchecked = post_categories.filter(cat => cat !== props.id)
        // setState to not include props.id (remove it if it's there)
        this.setState({ post_categories: unchecked })
      }
    }

  categoryCheckboxes = () => {
    const { categories, post_categories } = this.state
    return categories.map( cat => (
      <Form.Checkbox
        key={cat.id} 
        id={cat.id}
        name={cat.label} 
        label={cat.label}
        checked={post_categories.includes(cat.id)} 
        //if post_categories includes category id, it will render a checked box
        onChange={(e, props) => this.handleChecked(e, props)} 
        /*when the checkbox is checked or unchecked (event/e), 
        it will pass the checkbox's props to handleChecked (we will use id and checked)*/
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
    let data = new FormData
    data.append('file', this.state.image)
    data.append('categories', JSON.stringify(this.state.post_categories))
    //TODO need to include post_categories in axios post:
    //? data.append('post_categories', this.state.post_categories)
    //? we get the category id stored in the post's state, but how do we get the post ID stored and sent to model?
    //! database path doesn't have post_categories to append..how to get these stored IDs to different model (post_category)
    axios.post(`/api/posts?title=${this.state.title}&body=${this.state.body}`, data)
    .then(res => {
      const {history } = this.props
      history.push("/blog")
      })
      .catch(err => {
        console.log(err.response)
      })
      this.setState({ ...this.defaultValues, })
  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
      <ImageUploader
        withIcon={true}
        buttonText='Choose image'
        onChange={this.onDrop}
        imgExtension={['.jpg', '.gif', '.png', '.gif']}
        maxFileSize={5242880}
        singleImage = {true}
      />
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
          style={{ minHeight: 200 }} 
          required
        />
        <Form.Group inline>
        <label>Categories</label>
            { this.categoryCheckboxes() }
        </Form.Group>
        <Form.Button primary>Post</Form.Button>
        <Link to={{pathname: '/blog'}}>
          <Form.Button standard>Cancel</Form.Button>
        </Link>
      </Form>
    )
  }
}


export default PostForm