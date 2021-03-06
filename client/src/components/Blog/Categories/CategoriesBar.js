import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Menu, Dropdown, Form, Input, Icon, } from "semantic-ui-react";
import Posts from "../Posts";
import { AuthConsumer } from '../../../providers/AuthProvider'
import styled from "styled-components";
// import NoMatch from '../../NoMatch'

class CategoriesBar extends React.Component {
  state = { categories: [], posts: [], search: '' };

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
      this.setState({ search: "" });
    });
  };

  handleCatPosts = (e, { value }) => {
    axios
      .get(`/api/filter_category/${value}`)
      .then(res => this.setState({ posts: res.data }));
      this.setState({ search: "" });
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
        text="Browse Topics"
        icon="angle down"
        floating
        labeled
        button
        className="icon"
      >
        <Dropdown.Menu>
          {/* <Dropdown.Header content="Categories" /> */}
          <Dropdown.Menu scrolling>
            <Dropdown.Item 
              text="All Posts"
              onClick={this.handleAllPosts}
            />
            <Dropdown.Divider />
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

  handleSearchChange = (e, { name, value }) => {
    this.setState({ [name]: value, });
  }

  searchPosts = (e, search) => {
    e.preventDefault()
    axios.get(`/api/search_posts?search=${search}`)
      .then(res => {
        this.setState({ posts: res.data })
      })
  }

  render() {
    const { authenticated} = this.props.auth
    const { search } = this.state
    return (
      <div>
        <Menu borderless secondary style={{ margin: "1em" }}>
          <Menu.Item name="All Posts" >
            <PinkButton onClick={this.handleAllPosts}>All Posts</PinkButton>
          </Menu.Item>
          <Menu.Item>{this.dropdownCatSelect()}</Menu.Item>
          {authenticated ?
          <>
            <Menu.Item>
              <Link to={"/categories"}>
                <BlueButton>Add/Edit Topics</BlueButton>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to={"/blog/posts/new"}>
                <GreenButton>New Post</GreenButton>
              </Link>
            </Menu.Item>
            </>
            :
            null
            }
          <Menu.Item position="right">
            <Form>
              <Input
                placeholder="Search for..."
                onChange={this.handleSearchChange}
                value={search}
                name="search"
              />
              <Button 
                floated="right" 
                onClick={(e) => this.searchPosts(e, search)}
              >
                <Icon name="search" />
              </Button>
            </Form>
          </Menu.Item>
        </Menu>
        { this.state.posts.length > 0 ? 
          <Posts delete={this.deletePost} posts={this.state.posts} /> 
        : 
          <div style={{margin: "5em", textAlign: "center"}}>
            <h1 style={{color: "black"}}>No Results Found</h1>
            <PinkButton onClick={this.handleAllPosts}>Go Back To All Posts</PinkButton>
          </div>
        }
      </div>
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
  margin-right: 5px;
`;
const GreenButton = styled(Button)`
  background-color: #35e0bb !important;
  color: #fff !important;
  margin-right: 5px;
`;
export default class ConnectedCategoriesBar extends React.Component{
  render(){
      return(
      <AuthConsumer>
        {auth => <CategoriesBar {...this.props} auth={auth}/>}
      </AuthConsumer>
        )
      }
}
