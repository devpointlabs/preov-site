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
      <Link to={`/blog/posts/${post.id}/edit`}>
        <BlueButton>
          Edit
        </BlueButton>
      </Link>
      <Button.Or />
      <PinkButton onClick={() => this.props.delete(post.id)}>
        Delete
      </PinkButton>
    </Button.Group>
  );

  postCards = (posts) => (
    <>
    <Card.Group centered mobile={16} tablet={8} computer={4}>
      {posts.map(post => (
        <Card key={post.id}>
          <Link to={`/post/${post.id}`}>
          { this.props.swap ?
            <Image 
              src={post.image} 
              style={{ height: "200px", width: "500px" }} 
              onClick={() => this.props.swap(post.id)}
            />
            :
            <Image 
              src={post.image} 
              style={{ height: "200px", width: "500px" }}
            />
          } 
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
const PinkButton = styled(Button)`
  background-color: #f4b4b4 !important;
  color: #fff !important;
`
const BlueButton = styled(Button)`
  background-color: #a5d4ef !important;
  color: #fff !important;
`

const StyledDiv = styled.div`
  margin: 1em;
`
export default Posts;
