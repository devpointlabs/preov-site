import React from "react";
import { Container } from "semantic-ui-react";
import styled from "styled-components";

const UnderHero = () => (
  <Container as={ContainerStyled}>
    <p>Take control of your health with convenience and ease.</p>
  </Container>
);

const ContainerStyled = styled(Container)`
  background-color: #a5d4ef;
  color: white;
  text-align: center;
  font-size: 2em;
  height: 200px;
  padding: 90px;

  @media (max-width: 768px) {
    height: 100% !important;
  }
`;

export default UnderHero;
