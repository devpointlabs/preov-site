import React from "react"
import { Header, Form, } from "semantic-ui-react"

class CategoryForm extends React.Component {
  state = { label: "", };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Header as="h3">
          { this.props.id ? "Edit Category" : "Create a New Category"}
        </Header>
        <Form.Group>
          <Form.Input 
            placeholder="Category Label"
            name="label"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Form.Group>
      </Form>
    );
  };
};

export default CategoryForm;