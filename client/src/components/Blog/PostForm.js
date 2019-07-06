import React from "react";
import axios from "axios";
import { Form, Header, } from "semantic-ui-react";
import ImageUploader from "react-images-upload";
import { Link } from "react-router-dom";

class PostForm extends React.Component {
  state = { post: {
    title: "",
    body: "",
    image: "",
    categories: [],
    post_categories: []}
  };
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
  }

  // TODO check if editing
  componentDidMount() {
    const post_id = this.props.match.params.id;
    if (post_id) {
      axios.get(`/api/posts/${post_id}`)
      .then(res => {
        this.setState({ ...res.data });
      });
    } 
    axios.get("/api/categories")
    .then(res => {
      this.setState({ post: { ...this.state.post, categories: res.data, } });
    })
    .catch(err => {
      console.log("error in componentDidMount");
    });
  }
  
  handleChecked = (e, props) => {
    const { post_categories } = this.state.post;
    //if props.checked is true
    if (props.checked) {
      debugger
      //take what post_categories already is and add this category id
      this.setState({ post: {...this.state.post, post_categories: [...post_categories, props.id]} });
      //if props.checked is false (for unchecking a box)
    } else {
      //map through post_categories and return all where the id doesn't match the unchecked category id
      let unchecked = post_categories.filter(cat => cat !== props.id);
      // setState to not include props.id (remove it if it's there)
      this.setState({ post: {...this.state.post, post_categories: unchecked} });
    }
  };
  
  categoryCheckboxes = () => {
    const { categories, post_categories } = this.state.post;
    return categories.map(cat => (
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
        image: image[0]
      });
    }
    
    handleChange = (e) => { 
      const {target: { name, value }} = e
      this.setState({ [name]: value });
    };
    
    handleSubmit = (e) => {
      e.preventDefault();
      let data = new FormData()
      data.append('file', this.state.image)
      data.append('categories', JSON.stringify(this.state.post_categories))
      //! how to update post
      const post_id = this.props.match.params.id;
      if(post_id){
        axios.put(`/api/posts/${post_id}`, data)
        .then(res => {
          const {history } = this.props
          history.goBack()
        })
        .catch(err => {
          console.log("error in handleSubmit")
        })
      }else{
        axios.post(`/api/posts?title=${this.state.title}&body=${this.state.body}`, data)
        .then(res => {
      const {history } = this.props
      history.push("/blog");
      })
      .catch(err => {
        console.log("error in handleSubmit(axios.post)")
      })
      this.setState({title: "", body: "", image: ""})
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Header>{this.props.match.params.id ? "Edit" : "New"}</Header>
        <ImageUploader
          withPreview={true}
          withIcon={true}
          buttonText="Choose image"
          onChange={this.onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
          singleImage={true}
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
          {this.categoryCheckboxes()}
        </Form.Group>
        <Form.Button primary>Post</Form.Button>
        <Link to={{ pathname: "/blog" }}>
          <Form.Button>Cancel</Form.Button>
        </Link>
      </Form>
    );
  }
}

export default PostForm;
