import React from "react";
import styled from "styled-components";
import { Header, Form, Button, Grid, Container, Icon } from "semantic-ui-react";

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
      this.props.addCategory(this.state.label);
    }
    this.setState({ label: "" });
  };

  render() {
    return (
      <StyledContainer>
        <StyledGrid className="segment centered">
          <Form onSubmit={this.handleSubmit}>
            <Header as="h3">
              {this.props.id ? "Edit Topic" : "Create a New Topic"}
            </Header>
            <Form.Group>
              <Form.Input
                placeholder="Topic Label"
                name="label"
                value={this.state.label}
                onChange={this.handleChange}
              />
              <GreenButton animated>
                <Button.Content visible>
                  <Icon name="add" />
                  </Button.Content>
                <Button.Content hidden>
                  Add
                </Button.Content>
              </GreenButton>
            </Form.Group>
          </Form>
        </StyledGrid>
      </StyledContainer>
    );
  }
}
const StyledContainer = styled(Container)`
  min-width: 100% !important;
  text-align: center !important;
  margin: 0 auto !important;
`;
const StyledGrid = styled(Grid)`
  border: none !important;
  padding: 1em !important;
  margin: 0 auto !important;
`;
const GreenButton = styled(Button)`
  background-color: #35e0bb !important;
  color: #fff !important;
  margin-right: 5px;
`;
export default CategoryForm;
