import React from "react"
import axios from "axios"
import { Menu, Dropdown, Input, SearchCategory, } from "semantic-ui-react"

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
      <Dropdown.Item 
      key={cat.id}
      text={cat.label} />
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
        <Menu.Menu position='right'>
          <Input icon='search' placeholder='Search...' />
        </Menu.Menu>
      </Menu>
    )
  }
}
export default Categories;