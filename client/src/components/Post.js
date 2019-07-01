import React from "react";
import axios from "axios";
import { Link, } from 'react-router-dom'
import {Header, Image, Button} from 'semantic-ui-react'

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

  render() {
    const { title, body, image, created_at } = this.state.post;
    return (
      <> 
        <Image size='small' src={image}></Image>
        <Header as="h2">{title}</Header>
        Published {this.timeFormat(created_at)}
        <p>{body}</p>
        <Link to={{pathname: '/blog'}}>
          <Button standard>Back</Button>
        </Link>
      </>
    );
  }
}
export default Post;
