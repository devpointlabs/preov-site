import React from "react"
import axios from "axios"
import { Link, } from "react-router-dom"
import { Button, Menu, Dropdown, Input, } from "semantic-ui-react"
import Posts from "../Posts"

class CategoriesBar extends React.Component {
  state = { categories: [], posts: []}

  componentDidMount(){
    axios.get('/api/categories')
    .then( res => {
      this.setState({ categories: res.data, });
    });
    axios.get("/api/posts").then(res => {
      this.setState({ posts: res.data });
    });
  }
  
  handleAllPosts = () => {
    axios.get("/api/posts").then(res => {
      this.setState({ posts: res.data });
    });
  }
  
  handleCatPosts = (e, {value}) => {
    axios.get(`/api/filter_category/${value}`)
      .then( res => this.setState({ posts: res.data }));
  }

  deletePost = (id) => {
    axios.delete(`/api/posts/${id}`)
    .then(res => {
      const {posts} = this.state
      this.setState({posts: posts.filter(post => post.id !== id)})
    })
  } 

  dropdownCatSelect = () => {
    const { categories } = this.state
    return (
      <Dropdown 
        text="Filter by Category" 
        icon="filter" 
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
    )
  }

  render() {
    return (
      <div>
        <Menu borderless secondary style={{margin: "1em"}}>
        <Menu.Item
          name="All Posts"
          onClick={this.handleAllPosts}
          >
        </Menu.Item>
        <Menu.Item>
          {this.dropdownCatSelect()}
        </Menu.Item>
        <Menu.Item>
          {/* TODO make this button available only when admin is logged in */}
          <Button as={Link} to="/categories" color="blue" style={{marginRight: "5px"}}>
            Add/Edit Categories
          </Button>
          <Link to={'/blog/posts/new'}>
            <Button className='green'>New Post</Button>
          </Link>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Input icon='search' placeholder='Search...' />
        </Menu.Menu>
      </Menu>
      <Posts 
        delete={this.deletePost}
        posts = {this.state.posts}
      />
      </div>
    )
  }
}
export default CategoriesBar;