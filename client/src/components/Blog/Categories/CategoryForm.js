import React from "react"
import { Header, Form, } from "semantic-ui-react"

class CategoryForm extends React.Component {
  state = { label: "", };

  componentDidMount() {
    if (this.props.id) {
      this.setState({ label: this.props.label })
    }
  }

  handleChange = (e) => {
    this.setState({ label: e.target.value, })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.editCategory({ id: this.props.id, ...this.state, });
      this.props.toggleEdit();
    } else {
      this.props.addCategory(this.state.label);
    }
    this.setState({ label: "", })
  }

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
            value={this.state.label}
            onChange={this.handleChange}
          />
          <Form.Button inverted color="green">Submit</Form.Button>
        </Form.Group>
      </Form>
    );
  };
};

export default CategoryForm;