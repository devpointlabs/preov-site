import React from "react"
import axios from "axios"
import { Link, } from "react-router-dom"
import { Button, Menu, Dropdown, Input, } from "semantic-ui-react"

class Categories extends React.Component {
  state = { categories: [] }

  componentDidMount(){
    axios.get('/api/categories')
    .then( res => {
      this.setState({ categories: res.data, });
    })
  }
  
  handleAllPosts = () => {
    // TODO render posts component
    
  }
  
  renderCats = () => {
    return this.state.categories.map(cat => (
        <Dropdown.Item text={cat.label} />
    ))
  }

  render() {
    return (
      <Menu borderless secondary>
        <Menu.Item>
        {/* onClick={handleAllPosts} */}
          {/* TODO: show all posts */}
          {/* TODO default emphasis here */}
          All Posts
        </Menu.Item>
        <Dropdown item text="Filter by Category">
          <Dropdown.Menu>
            {this.renderCats()}
              {/* TODO show each categories
              TODO make each category clikable
              TODO render all posts in each catergory when clicked */}
          </Dropdown.Menu>
        </Dropdown>
        {/* TODO make this button available only when admin is logged in */}
        <Button basic as={Link} to="/categories" color="blue">
          Add/Edit Categories
        </Button>
        <Menu.Menu position='right'>
          <Input icon='search' placeholder='Search...' />
        </Menu.Menu>
      </Menu>
    )
  }
}
export default Categories;