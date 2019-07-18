import React from "react";
import styled from "styled-components";
import { Header, Form, Button, Grid, Container } from "semantic-ui-react";
import {withRouter} from 'react-router-dom'
import {PostCatConsumer} from '../../../providers/PostCatProvider'

class CategoryForm extends React.Component {
  state = { label: "" };

  componentDidMount() {
    if (this.props.id) {
      this.setState({ label: this.props.label });
    }
  }

  handleChange = e => {
    this.setState({ label: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.id) {
      this.props.editCategory({ id: this.props.id, ...this.state });
      this.props.toggleEdit();
    } else {
      this.props.postcat.addCategory(this.state.label, this.props.history);
    }
    this.setState({ label: "" });
  };

  render() {
    return (
      <StyledContainer>
        <StyledGrid className="segment centered">
          <Form onSubmit={this.handleSubmit}>
            <Header as="h3">
              {this.props.id ? "Edit Category" : "Create a New Category"}
            </Header>
            <Form.Group>
              <Form.Input
                placeholder="Category Label"
                name="label"
                value={this.state.label}
                onChange={this.handleChange}
              />
              <GreenButton>Submit</GreenButton>
            </Form.Group>
          </Form>
        </StyledGrid>
      </StyledContainer>
    );
  }
}
const StyledContainer = styled(Container)`
  min-width: 600px !important;
`
const StyledGrid = styled(Grid)`
  border: none !important;
  padding: 1em !important;
`
const GreenButton = styled(Button)`
  background-color: #35e0bb !important;
  color: #fff !important;
  margin-right: 5px;
`;


  class ConnectedCategoryForm extends React.Component{
  render(){
    return(
      <PostCatConsumer>
        {postcat => (
          <CategoryForm {...this.props} postcat={postcat}/>
        )}
      </PostCatConsumer>
    )
  }

}

export default withRouter(ConnectedCategoryForm);
