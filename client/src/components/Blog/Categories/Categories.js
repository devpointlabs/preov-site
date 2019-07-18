import React from "react";
import axios from "axios";
import CategoryForm from "./CategoryForm";
import CategoriesList from "./CategoriesList";
import { Container, Button } from "semantic-ui-react";
import {Link, } from 'react-router-dom'
import styled from "styled-components";
import {PostCatConsumer, } from "../../../providers/PostCatProvider"

class Categories extends React.Component {
  state = { categories: this.props.postcat.categories };

  // componentDidMount() {
  //   axios
  //     .get("/api/categories")
  //     .then(res => {
  //       this.setState({ categories: res.data });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.categories !== prevState.categories) {
      //sort the categories automagically 
      this.setState({ categories: this.state.categories.sort((a,b) => {
        if(a.label < b.label) { return -1; }
        if(a.label > b.label) { return 1; }
        return 0;
      }) });
    }
  }

  // addCategory = label => {
  //   axios.post("/api/categories", { label }).then(res => {
  //     const { categories } = this.state;
  //     this.setState({ categories: [...categories, res.data] });
  //   });
  // };

  // editCategory = category => {
  //   axios.put(`/api/categories/${category.id}`, category).then(res => {
  //     const categories = this.state.categories.map(cat => {
  //       if (cat.id === category.id) return res.data;
  //       return cat;
  //     });
  //     this.setState({ categories });
  //   });
  // };

  // deleteCategory = id => {
  //   axios.delete(`/api/categories/${id}`).then(res => {
  //     const { categories } = this.state;
  //     this.setState({ categories: categories.filter(cat => cat.id !== id) });
  //   });
  // };
 
  render() {
    return (
      <StyledDiv>
        <StyledContainer>
          <br />
          <CategoryForm  />
          <Link to="/blog">
            <Button floated="right">Go Back</Button>
          </Link>
          <br />
          <br />
          <CategoriesList
            categories={this.state.categories}
            editCategory={this.props.postcat.editCategory}
            deleteCategory={this.props.postcat.deleteCategory}
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

export default class ConnectedCategories extends React.Component{
  render(){
    return(
      <PostCatConsumer>
        {postcat => (
          <Categories {...this.props} postcat={postcat}/>
        )}
      </PostCatConsumer>
    )
  }

}
