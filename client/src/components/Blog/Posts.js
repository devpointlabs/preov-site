import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Image, Button } from "semantic-ui-react";
import styled from 'styled-components'

class Posts extends React.Component {
  state = { posts: [] };

  componentDidMount() {
    axios.get("/api/posts").then(res => {
      this.setState({ posts: res.data });
    });
  }

  timeFormat = (props) => {
    const newDate = new Date(props);
    return newDate.toDateString();
  };

  editPost = (post) => {
    axios.put(`/api/posts/${post.id}`, post)
    .then(res => {
      const posts = this.state.posts.map(p => {
        if(p.id === post.id)
          return res.data;
        return p
      })
      this.setState({posts, })
    })
  }

  deletePost = (id) => {
    axios.delete(`/api/posts/${id}`)
    .then(res => {
      const {posts} = this.state
      this.setState({posts: posts.filter(post => post.id !== id)})
    })
  } 

  adminButtons = (post) => (
    // TODO conditional render if auth
    <Button.Group>
      <Link to={{pathname: `/post/${post.id}`}}>
      <Button primary>View</Button>
      </Link>
      <Button.Or />
      <Link to={`/blog/posts/${post.id}/edit`}>
      <Button onClick={() => this.editPost(post)}>Edit</Button>
      </Link>x
      {/* TODO onclick edit Post  */}
      <Button.Or />
      <Button color="red" onClick={() => this.deletePost(post.id)}>
        Delete
      </Button>
    </Button.Group>
  );

  postCards = (posts) => (
    <Card.Group itemsPerRow={4}>
      {posts.map(post => (
        <Card key={post.id}>
          <Link to={{ pathname:`/post/${post.id}`}}>
            <Image src={post.image} />
          </Link>
          <Card.Content>
            <Card.Header>{post.title}</Card.Header>
            <Card.Meta>
              Published {this.timeFormat(post.created_at)}
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>{this.adminButtons(post)}</Card.Content>
        </Card>
        ))}
      </Card.Group>
  )

  render() {
    const { posts } = this.props;
    return (
      <StyledDiv>
      <Link to={{pathname: '/blog/posts/new'}}>
      <Button className='green'>New Post</Button>
      </Link>
      <br />
      <br />
      {this.postCards(posts)}
      </StyledDiv>
    );
  }
}
const StyledDiv = styled.div`
  margin: 1em;
`
export default Posts;
