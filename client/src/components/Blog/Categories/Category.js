import React from "react"
import { Button, Header, Icon, Segment, Menu, } from "semantic-ui-react"
import CategoryForm from "./CategoryForm"

class Category extends React.Component {
  state = { editing: false, };

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing, });
  };

  render() {
    return (
      <Segment style={styles.segment}>
        {
          this.state.editing ?
            <CategoryForm 
              {...this.props}
              editCategory={this.props.editCategory}
              toggleEdit={this.toggleEdit}
            />
          :
            <div>
              <Header as="h3">{this.props.name}</Header>
            </div>
        }
        <div>
          <Button basic icon color="blue" onClick={this.toggleEdit}>
            <Icon name="edit outline" />
          </Button>
          <Button basic icon color="red" floated="right" onClick={() => this.props.deleteCategory(this.props.id)}>
            <Icon name="trash alternate outline" />
          </Button>
        </div>
      </Segment>
    )
  }
};

const styles = {
  segment: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

export default Category;