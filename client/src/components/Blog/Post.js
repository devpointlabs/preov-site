import React from "react";
import axios from "axios";
import { Link, } from 'react-router-dom'
import {Header, Image, Button, Container} from 'semantic-ui-react'
import Posts from './Posts'
import PostForm from './PostForm'
import styled from 'styled-components'

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
    <StyledContainer>
    <Image size='medium' src={image}></Image>
    <Header as="h2">{title}</Header>
    <p><i>Published {this.timeFormat(updated_at)}</i></p>
    <p>{body}</p>
    </StyledContainer>
  )

  deletePost = (id) => {
    axios.delete(`/api/posts/${id}`)
    .then(res => {
      const {history} = this.props
      history.push('/blog')
    })
    .catch( "err" )
  }

  swapPost = (id) => {
    axios.get(`/api/posts/${id}`)
    .then(res => this.setState({ post: res.data }));
  }

  render() {
    const { id, title, body, image, updated_at} = this.state.post;
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
        <BlueButton onClick={this.toggleEdit}>Edit</BlueButton>
        </Link>
          :
          null
        }
        <PinkButton onClick={() => this.deletePost(id)}>Delete</PinkButton>
        <Link to={{pathname: '/blog'}}>
          <Button>Back</Button>
        </Link>
        <hr />
        <Header as='h3'>Check out more of our posts</Header>
        <Posts posts={this.state.posts}
          swap = {this.swapPost}
        /> 
      </>
    );
  }
}
const StyledContainer = styled(Container)`
  padding: 5em 6em;
`

const PinkButton = styled(Button)`
  background-color: #f4b4b4 !important;
  color: #fff !important;
`
const BlueButton = styled(Button)`
  background-color: #a5d4ef !important;
  color: #fff !important;
  margin-right: 5px;
`;

export default Post;
