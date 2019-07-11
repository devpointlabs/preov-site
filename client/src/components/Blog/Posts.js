import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Image, Button } from "semantic-ui-react";
import styled from 'styled-components'

class Posts extends React.Component {
  timeFormat = (props) => {
    const newDate = new Date(props);
    return newDate.toDateString();
  };

  editPost = (post) => {
    debugger
    axios.put(`/api/posts/${post.id}`, post)
    .then(res => {
      const posts = this.props.posts.map(p => {
        if(p.id === post.id)
          return res.data;
        return p
      })
      this.setState({posts, })
    })
  }

  adminButtons = (post) => (
    // TODO conditional render if auth
    <Button.Group>
      <Link to={`/post/${post.id}`}>
      <Button primary>View</Button>
      </Link>
      <Button.Or />
      <Link to={`/blog/posts/${post.id}/edit`}>
        <Button>Edit</Button>
      </Link>x
      {/* TODO onclick edit Post  */}
      <Button.Or />
      <Button color="red" onClick={() => this.props.delete(post.id)}>
        Delete
      </Button>
    </Button.Group>
  );

  postCards = (posts) => (
    <>
    <Card.Group itemsPerRow={4}>
      {posts.map(post => (
        <Card key={post.id}>
          <Link to={{ pathname:`/post/${post.id}`}}>
            <Image src={post.image} />
          </Link>
          <Card.Content>
            <Card.Header>{post.title}</Card.Header>
            <Card.Meta>
              Published {this.timeFormat(post.updated_at)}
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>{this.adminButtons(post)}</Card.Content>
        </Card>
        ))}
      </Card.Group>
      </>
  )
  
  render() {
    const { posts } = this.props;
    //this used to be this.props - changing it to state seemed to fix it
    return (
      <StyledDiv>
      <Link to={{pathname: '/blog/posts/new'}}>
      <Button className='green'>New Post</Button>
      </Link>
      <br />
      <br />
      {this.postCards(this.props.posts)}
      </StyledDiv>
    );
  }
}
const StyledDiv = styled.div`
  margin: 1em;
`
export default Posts;
