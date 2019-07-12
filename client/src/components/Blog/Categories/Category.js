import React from "react";
import { Container, Button, Header, Icon, Segment } from "semantic-ui-react";
import CategoryForm from "./CategoryForm";
import styled from "styled-components";

class Category extends React.Component {
  state = { editing: false };

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing });
  };

  render() {
    return (
      <StyledContainer>
        <Segment style={styles.segment}>
          {this.state.editing ? (
            <CategoryForm
              {...this.props}
              editCategory={this.props.editCategory}
              toggleEdit={this.toggleEdit}
            />
          ) : (
            <div>
              <Header as="h3">{this.props.label}</Header>
            </div>
          )}
          <div>
            <BlueButton onClick={this.toggleEdit}>
              <Icon name="edit outline" />
            </BlueButton>
            <PinkButton
              floated="right"
              onClick={() => this.props.deleteCategory(this.props.id)}
            >
              <Icon name="trash alternate outline" />
            </PinkButton>
          </div>
        </Segment>
      </StyledContainer>
    );
  }
}

const StyledContainer = styled(Container)`
  background-color: white;
  padding: 1em 10em !important;
`
const PinkButton = styled(Button)`
  background-color: #f4b4b4 !important;
  color: #fff !important;
`;
const BlueButton = styled(Button)`
  background-color: #a5d4ef !important;
  color: #fff !important;
  margin-right: 5px;
`;
const styles = {
  segment: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }
};

export default Category;
