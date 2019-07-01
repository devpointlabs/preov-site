import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Image, Button } from "semantic-ui-react";

class Posts extends React.Component {
  state = { posts: [] };

  componentDidMount() {
    axios.get("/api/posts").then(res => {
      this.setState({ posts: res.data });
    });
  }

  timeFormat = props => {
    const newDate = new Date(props);
    return newDate.toDateString();
  };

  adminButtons = () => (
    // TODO conditional render if auth
    <Button.Group>
      <Button primary>View</Button>
      <Button.Or />
      <Button standard>Edit</Button>
      {/* TODO onclick edit Post  */}
      <Button.Or />
      <Button color="red" inverted>
        Delete
      </Button>
      {/* TODO onClick method to delete */}
    </Button.Group>
  );

  render() {
    const { posts } = this.state;
    return (
      <Card.Group itemsPerRow={4}>
        {posts.map(post => (
          <Card key={post.id}>
            {/* TODO : make into links to Post.js show page */}
            <Link
              to={{
                pathname: `/post/${post.id}`
              }}
            >
              <Image src={post.image} />
            </Link>
            <Card.Content>
              <Card.Header>{post.title}</Card.Header>
              <Card.Meta>
                Published {this.timeFormat(post.created_at)}
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>{this.adminButtons()}</Card.Content>
          </Card>
        ))}
      </Card.Group>
    );
  }
}

export default Posts;
