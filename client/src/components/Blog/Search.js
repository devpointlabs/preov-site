import React, { useState, } from "react"
// import axios from "axios"
import { Form, Input, Button, Icon, } from "semantic-ui-react"

const Search = (props) => {
  const [search, setSearch] = useState('')

// class Search extends React.Component {
//   state = { query: "", results: [], }

//   handleInputChange = (e) => {
//     this.setState({
//       query: this.search.value
//     })
//   }
  
  return (
    <Form onSubmit={props.searchPosts}>
      <Input
        placeholder="Search for..."
        // ref={input => this.search = input}
        onChange={ (e) => setSearch(e.target.value) }
      />
      {/* <p>{this.state.query}</p> */}
      <Button 
        floated="right" 
        onClick={ (e) => props.searchPosts(e, search) }
      >
        <Icon name="search" />
      </Button>
    </Form>
  )
}

export default Search;