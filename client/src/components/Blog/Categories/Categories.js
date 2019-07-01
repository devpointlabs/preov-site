import React from "react"
import axios from "axios"
import CategoryForm from "./CategoryForm"
import CategoriesList from "./CategoriesList"
import { Container, Header, } from "semantic-ui-react"

class Categories extends React.Component {
  state = { categories: [], };

  render() {
    return (
      <Container style={{ padding: "30px 0", }}>
        <Header as="h1" textAlign="center">Categories</Header>
        <hr />
        <br />
        <CategoryForm addCategory={this.addCategory} />
        <br />
        <br />
        <CategoriesList
          categories={this.state.categories}
          editCategory={this.editCategory}
          deleteCategory={this.deleteCategory}
        />
      </Container>
    )
  }
}

export default Categories;