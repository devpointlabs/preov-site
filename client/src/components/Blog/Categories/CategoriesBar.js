import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Menu, Dropdown, Input } from "semantic-ui-react";
import Posts from "../Posts";
import Search from "../Search"
import styled from "styled-components";

class CategoriesBar extends React.Component {
  state = { categories: [], posts: [] };

  componentDidMount() {
    axios.get("/api/categories").then(res => {
      this.setState({ categories: res.data });
    });
    axios.get("/api/posts").then(res => {
      this.setState({ posts: res.data });
    });
  }

  handleAllPosts = () => {
    axios.get("/api/posts").then(res => {
      this.setState({ posts: res.data });
    });
  };

  handleCatPosts = (e, { value }) => {
    axios
      .get(`/api/filter_category/${value}`)
      .then(res => this.setState({ posts: res.data }));
  };

  deletePost = id => {
    axios.delete(`/api/posts/${id}`).then(res => {
      const { posts } = this.state;
      this.setState({ posts: posts.filter(post => post.id !== id) });
    });
  };

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
            {categories.map(cat => (
              <Dropdown.Item
                key={cat.id}
                text={cat.label}
                value={cat.id}
                onClick={this.handleCatPosts}
              />
            ))}
          </Dropdown.Menu>
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  searchPosts = (e, search) => {
    e.preventDefault()

    // TODO Fix route
    // axios.get(`/api/logs?column=${this.state.column}&search=${search}`)
    //   .then(res => {
    //     this.setState({ posts: res.data })
    //   })
  }

  render() {
    return (
      <div>
        <Menu borderless secondary style={{ margin: "1em" }}>
          <Menu.Item name="All Posts" onClick={this.handleAllPosts} />
          <Menu.Item>{this.dropdownCatSelect()}</Menu.Item>
          <Menu.Item>
            {/* TODO make this button available only when admin is logged in */}
            <Link to={"/categories"}>
              <BlueButton>Add/Edit Categories</BlueButton>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={"/blog/posts/new"}>
              <GreenButton>New Post</GreenButton>
            </Link>
          </Menu.Item>
          <Menu.Item position="right">
            <Search searchPosts={this.searchPosts} />
            {/* <Input icon="search" placeholder="Search..." /> */}
          </Menu.Item>
        </Menu>
        <Posts delete={this.deletePost} posts={this.state.posts} />
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
export default CategoriesBar;
