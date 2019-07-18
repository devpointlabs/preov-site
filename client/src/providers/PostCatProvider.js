import React from "react";
import axios from "axios";

export const PostCatContext = React.createContext();
export const PostCatConsumer = PostCatContext.Consumer;
export class PostCatProvider extends React.Component {
  state = { search: "", posts: [], categories: [] };

  componentDidMount() {
    axios.get("/api/categories").then(res => {
      this.setState({ categories: res.data });
    });
    axios.get("/api/posts").then(res => {
      this.setState({ posts: res.data });
    });
  }

  handleCatPosts = (value) => {
    axios
    .get(`/api/filter_category/${value}`)
    .then(res => {
      this.setState({ posts: res.data })
    }
    );
  }

  handleAllPosts = () => {
    axios.get("/api/posts").then(res => {
      this.setState({ posts: res.data });
    });
  };

  deletePost = (id, history) => {
    axios.delete(`/api/posts/${id}`)
    .then(res => {
      const { posts } = this.state;
      this.setState({ posts: posts.filter(post => post.id !== id) });
      history.push('/blog')
      
    });
  };

  searchPosts = (e, search) => {
    e.preventDefault();
    axios.get(`/api/search_posts?search=${search}`)
    .then(res => {
      this.setState({ posts: res.data });
    });
  };

  render() {
    return (
      <PostCatContext.Provider
        value={{
          ...this.state,
          handleCatPosts: this.handleCatPosts,
          handleAllPosts: this.handleAllPosts,
          searchPosts: this.searchPosts,
          deletePost: this.deletePost,

          // setSearch
        }}
      >
        {this.props.children}
      </PostCatContext.Provider>
    );
  }
}
