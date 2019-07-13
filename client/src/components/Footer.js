import React from "react";
import { Link } from "react-router-dom";
import PreIcon from "../Images/PreOvIcon.jpg";
import { Menu, Grid, Image, Icon, Segment, Header } from "semantic-ui-react";
import axios from "axios";
import styled from "styled-components";
// ! how to link to filtered posts from footer category

class Footer extends React.Component {
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

  renderCats = () => {
    let catsArr = this.state.categories;
    catsArr = catsArr.slice(0, 5);
    return catsArr.map(cat => (
      
      <Link to={`api/filter_category/${cat.id}`}>
      <StyledItem>{cat.label}</StyledItem>
      </Link>
    ))
    }

  render() {
    return (
      <Segment
        style={{
          marginTop: "0 !important",
          padding: "0 !important",
          border: "none"
        }}
      >
        <StyledGrid columns={3} divided>
          <StyledColumn>
            <StyledMenu compact vertical>
              <Link to="/">
                <StyledItem>Home</StyledItem>
              </Link>
              <Link to="/about">
                <StyledItem>About Us</StyledItem>
              </Link>
              <Link to="/howitworks">
                <StyledItem>How It Works</StyledItem>
              </Link>
              <Link to="/blogs">
                <StyledItem>Blog</StyledItem>
              </Link>
              <Link to="/contactus">
                <StyledItem>Contact</StyledItem>
              </Link>
            </StyledMenu>
          </StyledColumn>

          <StyledColumn>
            <StyledMenu compact vertical>
              {this.renderCats()}
            </StyledMenu>
          </StyledColumn>

          <Grid.Column>
            <StyledMenu compact vertical>
              <Link to="/">
                <StyledItem>
                  <Icon size="big" name="instagram" />
                  Instagram
                </StyledItem>
              </Link>
              <Link to="/">
                <StyledItem>
                  <Icon size="big" name="facebook" />
                  Facebook
                </StyledItem>
              </Link>
              <Link to="/">
                <StyledItem>
                  <Icon size="big" name="twitter" />
                  Twitter
                </StyledItem>
              </Link>
              <Link to="/">
                <StyledItem>
                  <Icon size="big" name="youtube" />
                  Youtube
                </StyledItem>
              </Link>
            </StyledMenu>
          </Grid.Column>
        </StyledGrid>
        <Header as="h1" textAlign="center">
          <Image src={PreIcon} />
        </Header>
        <div>
          <p style={{ textAlign: "center" }}>© 2019 by PreOv, LLC. </p>
        </div>
      </Segment>
    );
  }
}

const StyledGrid = styled(Grid)`
  background-color: white;
  padding: 2.5em !important;
`;

const StyledColumn = styled(Grid.Column)`
  position: static !important;
`

const StyledMenu = styled(Menu)`
  border: none !important;
  box-shadow: none !important;
  background-color: white !important;
  `;      

const StyledItem = styled(Menu.Item)`
  color: #5d6870 !important;
  font-weight: 600 !important;
  position: static !important;
`;

export default Footer;
