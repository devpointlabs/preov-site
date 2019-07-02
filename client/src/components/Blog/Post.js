import React from "react";
import axios from "axios";
import { Link, } from 'react-router-dom'
import {Header, Image, Button} from 'semantic-ui-react'
import Posts from './Posts'

class Post extends React.Component {
  state = { post: {} };

  componentDidMount() {
    axios.get(`/api/posts/${this.props.match.params.id}`).then(res => {
      this.setState({ post: res.data });
    });
  }

  timeFormat = (props) => {
    const newDate = new Date(props);
    return newDate.toDateString();
  };

  renderPost = (title, body, image, created_at) => (
    <>
    <Image size='small' src={image}></Image>
    <Header as="h2">{title}</Header>
    Published {this.timeFormat(created_at)}
    <p>{body}</p>
    </>
  )

  render() {
    const { title, body, image, created_at } = this.state.post;
    return (
      <> 
        {this.renderPost(title, body, image, created_at)}
        <Link to={{pathname: '/blog'}}>
          <Button standard>Back</Button>
        </Link>
        <hr />
        <Header as='h3'>Check out more of our posts!</Header>
        <Posts /> 
      </>
    );
  }
}
export default Post;
