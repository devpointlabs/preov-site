import React from "react";
import { Link } from "react-router-dom";
import { Header, Container } from "semantic-ui-react";

const NoMatch = () => (
  <Container >
    <Header as="h1" textAlign="center" style={{margin: '1.5em',}}>
      We're sorry, this page does not exist yet.
    </Header>
    <Header as="h2" textAlign="center" style={{margin: '1.5em',}}>
      Please check back soon!
    </Header>
    <Header as="h2" textAlign="center" style={{margin: '1.5em',}}>
      <Link to="/blog"> Return To Our Blog</Link>
    </Header>
  </Container>
);

export default NoMatch;
