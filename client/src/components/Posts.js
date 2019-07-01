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

  timeFormat = (props) => {
    const newDate = new Date(props);
    return newDate.toDateString();
  };

  deletePost = (id, post) => {
    axios.delete(`/api/posts/${id}`, post)
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
      <Button standard>Edit</Button>
      {/* TODO onclick edit Post  */}
      <Button.Or />
      <Button color="red" onClick={() => this.deletePost(post.id)}>
        Delete
      </Button>
      {/* TODO onClick method to delete */}
    </Button.Group>
  );

  render() {
    const { posts } = this.state;
    return (
      <>
      <Link to={{pathname: '/blog/posts/new'}}>
      <Button className='green'>New Post</Button>
      </Link>
      <br />
      <br />
      <Card.Group itemsPerRow={4}>
        {posts.map(post => (
          <Card key={post.id}>
            <Link to={{ pathname: `/post/${post.id}`}}>
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
      </>
    );
  }
}

export default Posts;
