import React from "react";
import { Link } from "react-router-dom";
import { Card, Image, Button } from "semantic-ui-react";
import styled from 'styled-components'

class Posts extends React.Component {
  timeFormat = (props) => {
    const newDate = new Date(props);
    return newDate.toDateString();
  };

  adminButtons = (post) => (
    // TODO conditional render if auth
    <Button.Group>
      {/* <Link to={`/post/${post.id}`}>
        <Button primary>
          View
        </Button>
      </Link> */}
      {/* <Button.Or /> */}
      <Link to={`/blog/posts/${post.id}/edit`}>
        <Button color="blue">
          Edit
        </Button>
      </Link>
      <Button.Or />
      <Button color="pink" onClick={() => this.props.delete(post.id)}>
        Delete
      </Button>
    </Button.Group>
  );

  postCards = (posts) => (
    <>
    <Card.Group itemsPerRow={4}>
      {posts.map(post => (
        <Card key={post.id}>
          <Link to={`/post/${post.id}`}>
            <Image src={post.image} style={{ height: "250px", width: "400px" }}/>
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
    return (
      <StyledDiv>
      {this.postCards(posts)}
      </StyledDiv>
    );
  }
}
const StyledDiv = styled.div`
  margin: 1em;
`
export default Posts;
