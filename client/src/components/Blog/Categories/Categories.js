import React from "react"
import axios from "axios"
import CategoryForm from "./CategoryForm"
import CategoriesList from "./CategoriesList"
import { Container, Header, } from "semantic-ui-react"

class Categories extends React.Component {
  state = { categories: [], };

  componentDidMount() {
    axios.get("/api/categories")
      .then( res => {
        this.setState({ categories: res.data, })
      })
      .catch( err => {
        console.log(err);
      })
  }  

  addCategory = (label) => {
    axios.post("/api/categories", {label})
      .then( res => {
        const { categories, } = this.state;
        this.setState({ categories: [...categories, res.data], });
      })
  }

  editCategory = (category) => {
    axios.put(`/api/categories/${category.id}`, category)
      .then( res => {
        const categories = this.state.categories.map( cat => {
          if (cat.id === category.id)
            return res.data;
          return cat;
        });
        this.setState({ categories, });
      })
  }

  deleteCategory = (id) => {
    axios.delete(`/api/categories/${id}`)
      .then( res => {
        const { categories, } = this.state;
        this.setState({ categories: categories.filter(cat => cat.id !==id), })
      })
  }

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