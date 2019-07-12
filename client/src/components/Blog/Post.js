import React from "react";
import axios from "axios";
import { Link, } from 'react-router-dom'
import {Header, Image, Button} from 'semantic-ui-react'
import Posts from './Posts'
import PostForm from './PostForm'

class Post extends React.Component {
  state = { posts: [], post: {}, editing: false };

  componentDidMount() {
    axios.get(`/api/posts/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ post: res.data, editing: false });
    });
    axios.get("/api/posts").then(res => {
          this.setState({ posts: res.data });
        });
  }
  toggleEdit = () => {this.setState({editing: !this.state.editing})}

  timeFormat = (updated_at) => {
    const newDate = new Date(updated_at);
    return newDate.toDateString();
  };

  renderPost = (title, body, image, updated_at) => (
    <>
    <Image size='medium' src={image}></Image>
    <Header as="h2">{title}</Header>
    Published {this.timeFormat(updated_at)}
    <p>{body}</p>
    </>
  )

  render() {
    const { id, title, body, image, updated_at} = this.state.post;
    // const {created_at} = this.state.post_categories
    return (
      <> 
        {
          this.state.editing ? 
          <PostForm />
          :
          this.renderPost(title, body, image, updated_at)
        }
        
        { !this.state.editing ?
        <Link to={`/blog/posts/${id}/edit`}>
        <Button onClick={this.toggleEdit}>Edit</Button>
        </Link>
          :
          null
        }
        <Button>Delete</Button>
        <Link to={{pathname: '/blog'}}>
          <Button>Back</Button>
        </Link>
        <hr />
        <Header as='h3'>Check out more of our posts</Header>
        <Posts posts={this.state.posts}/> 
      </>
    );
  }
}
export default Post;
