import React from "react";
import { Link } from "react-router-dom";
import { Header, Container } from "semantic-ui-react";

const NoMatch = () => (
  <Container style={{margin: '4.5em'}}>
    <Header as="h1" textAlign="center">
      We're sorry, this page does not exist yet.
    </Header>
    <Header as="h2" textAlign="center">
      <Link to="/blog"> Return To Our Blog</Link>
    </Header>
  </Container>
);

export default NoMatch;
