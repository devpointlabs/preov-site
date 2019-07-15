import React from "react";
import axios from "axios";
import { Form, Header, Container } from "semantic-ui-react";
import ImageUploader from "react-images-upload";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
class PostForm extends React.Component {
  state = {
    title: "",
    body: "",
    image: "",
    categories: [],
    post_categories: []
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
        this.setState({ ...res.data});
      });
    } else {
      axios.get("/api/categories")
       .then(res => {
        this.setState({ ...this.state, categories: res.data, });
        })
        .catch(err => {
          console.log("error in componentDidMount");
        });
    }
  }

  handleChecked = (e, target) => {
    const { post_categories } = this.state;
    //if props.checked is true
    if (target.checked) {
      //take what post_categories already is and add this category id
      this.setState({...this.state.post, post_categories: [...post_categories, { id: target.id }]});
      //if target.checked is false (for unchecking a box)
    } else {
      //map through post_categories and return all where the id doesn't match the unchecked category id
      let unchecked = post_categories.filter(cat => {
        return cat.id !== target.id
      });
      // setState to not include target.id (remove it if it's there)
      this.setState({...this.state, post_categories: unchecked});
    }
  };

  checked = (cat) => {
    const { post_categories } = this.state;
    let checked = false;
    post_categories.map( c => {
      if (c.id === cat)
        checked = true;
    })
    return checked;
  };

  categoryCheckboxes = () => {
    const { categories, } = this.state;
    return categories.map(cat => {
      return <Form.Checkbox
        key={cat.id}
        id={cat.id}
        name={cat.label}
        label={cat.label}
        // checked={post_categories.includes(cat.id)}
        checked={this.checked(cat.id)}
        //if post_categories includes category id, it will render a checked box
        onChange={(e, target) => this.handleChecked(e, target)}
        /*when the checkbox is checked or unchecked (event/e), 
        it will pass the checkbox's props to handleChecked (we will use id and checked)*/
      />
    });
  };

  onDrop(image) {
    this.setState({
      image: image[0]
    });
  }

  handleChange = (e, { name, value }) => { 
    this.setState({ [name]: value } );
  };

  handleQuillChange = (html) => {
  	this.setState({ body: html });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { post_categories, title, body, image, } = this.state
    let data = new FormData()
    data.append('file', image)
    data.append('categories', JSON.stringify(post_categories))
    data.append("title", title);
    data.append("body", body);
    const post_id = this.props.match.params.id;
    if(post_id){
      axios.put(`/api/posts/${post_id}`, data)
      .then( res => {
        const {history } = this.props
        history.push('/blog')
      })
      .catch(err => {
        console.log("error in handleSubmit")
      })
    }else{
    axios.post(`/api/posts?title=${title}&body=${body}`, data)
      .then( res => {
        const {history } = this.props
        history.push('/blog')
      })
      .catch(err => {
        console.log("error")
      })
      this.setState({title: "", body: "", image: ""})
    }
  }

  render() {
    return (
      <StyledContainer>
      <Form onSubmit={this.handleSubmit}>
        <Header>{this.props.match.params.id ? "Edit This Post" : "Create New Post"}</Header>
        {typeof(this.state.image) === "string" ? null : <StyledImg src={this.state.image} /> }
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
        <ReactQuill
          theme="snow"
          onChange={this.handleQuillChange}
          label="Body"
          name="body"
          type="text"
          value={this.state.body}
          style={{ height: 500 }}
          required />
        <Form.Group inline>
          <h3 style={{ marginRight:"2em"}}><label>Categories:</label></h3>
          {this.categoryCheckboxes()}
        </Form.Group>
        <Form.Button primary >
          {this.props.match.params.id ? "Update Post" : "Post"}
        </Form.Button>
        <Link to={{ pathname: "/blog" }}>
          <Form.Button >Cancel</Form.Button>
        </Link>
      </Form>
       </StyledContainer>
    );
  }
}

const StyledImg = styled.img`
display: block;
margin: 0 auto;
height: 300px;
width: 300px;
`
const StyledContainer = styled(Container)`
  background-color: white;
  padding: 1.3em !important;

  @media (max-width: 768px) {
    overflow: visible !important;
    display: block !important;
    width: 100%;
    height: 100% !important;
  }
`;
export default PostForm;
