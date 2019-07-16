import React from "react";
import axios from "axios";
import CategoryForm from "./CategoryForm";
import CategoriesList from "./CategoriesList";
import { Container } from "semantic-ui-react";
import styled from "styled-components";

class Categories extends React.Component {
  state = { categories: [] };

  componentDidMount() {
    axios
      .get("/api/categories")
      .then(res => {
        this.setState({ categories: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addCategory = label => {
    axios.post("/api/categories", { label }).then(res => {
      const { categories } = this.state;
      this.setState({ categories: [...categories, res.data] });
    });
  };

  editCategory = category => {
    axios.put(`/api/categories/${category.id}`, category).then(res => {
      const categories = this.state.categories.map(cat => {
        if (cat.id === category.id) return res.data;
        return cat;
      });
      this.setState({ categories });
    });
  };

  deleteCategory = id => {
    axios.delete(`/api/categories/${id}`).then(res => {
      const { categories } = this.state;
      this.setState({ categories: categories.filter(cat => cat.id !== id) });
    });
  };

  render() {
    return (
      <StyledDiv>
        <StyledContainer>
          <br />
          <CategoryForm addCategory={this.addCategory} />
          <br />
          <br />
          <CategoriesList
            categories={this.state.categories}
            editCategory={this.editCategory}
            deleteCategory={this.deleteCategory}
          />
        </StyledContainer>
      </StyledDiv>
    );
  }
}

const StyledDiv = styled.div`
`

const StyledContainer = styled(Container)`
  background-color: #f8f8f8;
  padding: 0em 10em !important;
`;  

export default Categories;
