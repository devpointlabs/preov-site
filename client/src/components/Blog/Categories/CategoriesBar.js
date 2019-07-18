import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Menu, Dropdown } from "semantic-ui-react";
import Posts from "../Posts";
import Search from "../Search";
import { AuthConsumer } from "../../../providers/AuthProvider";
import { PostCatConsumer } from "../../../providers/PostCatProvider";
import styled from "styled-components";
// import NoMatch from '../../NoMatch'

class CategoriesBar extends React.Component {
  state = {
    categories: this.props.postcat.categories,
    posts: this.props.postcat.posts
  };

  // componentDidMount() {
  //   axios.get("/api/categories").then(res => {
  //     this.setState({ categories: res.data });
  //   });
  //   axios.get("/api/posts").then(res => {
  //     this.setState({ posts: res.data });
  //   });
  // }

  

  // handleCatPosts = (e, { value }) => {
  //   axios
  //     .get(`/api/filter_category/${value}`)
  //     .then(res => this.setState({ posts: res.data }));
  // };

  // deletePost = id => {
  //   axios.delete(`/api/posts/${id}`).then(res => {
  //     const { posts } = this.state;
  //     this.setState({ posts: posts.filter(post => post.id !== id) });
  //   });
  // };

  dropdownCatSelect = () => {
    const { categories } = this.state;
    return (
      <Dropdown
        text="Browse Categories"
        icon="angle down"
        floating
        labeled
        button
        className="icon"
      >
        <Dropdown.Menu>
          {/* <Dropdown.Header content="Categories" /> */}
          <Dropdown.Menu scrolling>
            <Dropdown.Item text="All Posts" onClick={this.props.postcat.handleAllPosts} />
            <Dropdown.Divider />
            {categories.map(cat => (
              <Dropdown.Item
                key={cat.id}
                text={cat.label}
                value={cat.id}
                onClick={() => this.props.postcat.handleCatPosts(cat.id)}
              />
            ))}
          </Dropdown.Menu>
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  // searchPosts = (e, search) => {
  //   e.preventDefault();
  //   axios.get(`/api/search_posts?search=${search}`).then(res => {
  //     this.setState({ posts: res.data });
  //   });
  // };

  render() {
    const { authenticated } = this.props.auth;
    return (
      <div>
        <Menu borderless secondary style={{ margin: "1em" }}>
          {/* <Menu.Item name="All Posts" onClick={this.handleAllPosts} /> */}
          <Menu.Item>{this.dropdownCatSelect()}</Menu.Item>
          {authenticated ? (
            <>
              <Menu.Item>
                <Link to={"/categories"}>
                  <BlueButton>Add/Edit Categories</BlueButton>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to={"/blog/posts/new"}>
                  <GreenButton>New Post</GreenButton>
                </Link>
              </Menu.Item>
            </>
          ) : null}
          <Menu.Item position="right">
            <Search searchPosts={this.props.postcat.searchPosts} />
          </Menu.Item>
        </Menu>
        {this.state.posts.length > 0 ? (
          <Posts delete={this.props.postcat.deletePost} posts={this.props.postcat.posts} />
        ) : (
          <div style={{ margin: "5em", textAlign: "center" }}>
            <h1 style={{ color: "black" }}>No Results Found</h1>
            <StyledLink onClick={this.props.postcat.handleAllPosts}>
              Go Back To All Posts
            </StyledLink>
          </div>
        )}
      </div>
    );
  }
}
const BlueButton = styled(Button)`
  background-color: #a5d4ef !important;
  color: #fff !important;
  margin-right: 5px;
`;
const GreenButton = styled(Button)`
  background-color: #35e0bb !important;
  color: #fff !important;
  margin-right: 5px;
`;
export default class ConnectedCategoriesBar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => (
          <PostCatConsumer>
            {postcat => (
              <CategoriesBar {...this.props} auth={auth} postcat={postcat} />
            )}
          </PostCatConsumer>
        )}
      </AuthConsumer>
    );
  }
}
const StyledLink = styled(Link)`
  font-weight: bold;
`;
