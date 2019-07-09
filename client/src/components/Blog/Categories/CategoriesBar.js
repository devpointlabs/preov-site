import React from "react"
import axios from "axios"
import { Link, } from "react-router-dom"
import { Button, Menu, Dropdown, Input, } from "semantic-ui-react"

class CategoriesBar extends React.Component {
  state = { categories: [], activeItem: "All Posts" }

  componentDidMount(){
    axios.get('/api/categories')
    .then( res => {
      this.setState({ categories: res.data, });
    })
  }
  
  handleAllPosts = () => {
    // TODO render posts component
    
  }
  
  dropdownCatSelect = () => {
    const { categories } = this.state
    const catOptions = []
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
          <Input icon="search" iconPosition="left" className="search" />
          <Dropdown.Divider />
          <Dropdown.Header content="Categories" />
          <Dropdown.Menu scrolling>
            {categories.map(cat => (
              <Dropdown.Item 
                multiple
                selection
                key={cat.id}
                // {...cat}
                text={cat.label} 
                options={catOptions}
                // onClick={}
              />
            ))}
          </Dropdown.Menu>
        </Dropdown.Menu>
      </Dropdown>
    )
  }

  render() {
    return (
      <Menu borderless secondary style={{margin: "1em"}}>
        <Menu.Item
          name="All Posts"
          // active={activeItem === "All Posts"} 
          // onClick={handleAllPosts}
        >
        </Menu.Item>
        <Menu.Item>
          {this.dropdownCatSelect()}
        </Menu.Item>
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
export default CategoriesBar;