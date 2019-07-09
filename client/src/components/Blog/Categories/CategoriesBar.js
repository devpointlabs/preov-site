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
    const { posts } = this.state;
    axios.get(`/api/filter_category/${value}`)
      .then( res => this.setState({ posts: res.data }));
  }

  dropdownCatSelect = () => {
    const { categories } = this.state
    return (
      <Dropdown 
        text="Filter Posts" 
        icon="filter" 
        floating
        labeled
        button
        className="icon"
      >
        <Dropdown.Menu>
          <Dropdown.Header content="Categories" />
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
          activeIndex
          onClick={this.handleAllPosts}
          >
        </Menu.Item>
        <Menu.Item>
          {this.dropdownCatSelect()}
        </Menu.Item>
        <Menu.Item>
          {/* TODO make this button available only when admin is logged in */}
          <Button basic as={Link} to="/categories" color="blue">
            Add/Edit Categories
          </Button>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Input icon='search' placeholder='Search...' />
        </Menu.Menu>
      </Menu>
      <Posts 
        posts = {this.state.posts}
      />
      </div>
    )
  }
}
export default CategoriesBar;