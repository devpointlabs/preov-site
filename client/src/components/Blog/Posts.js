import React from "react";
import { Link } from "react-router-dom";
import { Card, Image, Button, Icon } from "semantic-ui-react";
import styled from "styled-components";
import { AuthConsumer } from "../../providers/AuthProvider";

class Posts extends React.Component {
  timeFormat = props => {
    const newDate = new Date(props);
    return newDate.toDateString();
  };

  adminButtons = post => (
    // TODO conditional render if auth
    <>
      <Link to={`/blog/posts/${post.id}/edit`}>
        <BlueButton animated>
          <Button.Content visible>Edit</Button.Content>
          <Button.Content hidden>
            <Icon name="edit" />
          </Button.Content>
        </BlueButton>
      </Link>
      <PinkButton animated onClick={() => this.props.delete(post.id)}>
        <Button.Content visible>Delete</Button.Content>
        <Button.Content hidden>
          <Icon name="trash" />
        </Button.Content>
      </PinkButton>
    </>
  );

  postCards = (posts, authenticated) => (
    <>
      <Card.Group centered mobile={16} tablet={8} computer={4}>
        {posts.map(post => (
          <Card key={post.id}>
            <Link to={`/post/${post.id}`}>
              {this.props.swap ? (
                <Image
                  src={post.image}
                  style={{ height: "200px", width: "500px" }}
                  onClick={() => this.props.swap(post.id)}
                />
              ) : (
                <Image
                  src={post.image}
                  style={{ height: "200px", width: "500px" }}
                />
              )}
            </Link>
            <Card.Content>
              <Card.Header>{post.title}</Card.Header>
              <Card.Meta>
                Published {this.timeFormat(post.updated_at)}
              </Card.Meta>
            </Card.Content>
            {authenticated ? (
              <Card.Content extra>
                {this.adminButtons(post, authenticated)}
              </Card.Content>
            ) : null}
          </Card>
        ))}
      </Card.Group>
    </>
  );

  render() {
    const { authenticated } = this.props.auth;
    const { posts } = this.props;
    return <StyledDiv>{this.postCards(posts, authenticated)}</StyledDiv>;
  }
}
const PinkButton = styled(Button)`
  background-color: #f4b4b4 !important;
  color: #fff !important;
`;
const BlueButton = styled(Button)`
  background-color: #a5d4ef !important;
  color: #fff !important;
  margin-right: 5px !important;
`;

const StyledDiv = styled.div`
  margin: 1em;
`;
export default class ConnectedPosts extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Posts {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  }
}
