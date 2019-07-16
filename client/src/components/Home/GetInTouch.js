import React from "react";
import { Link } from "react-router-dom";
import { Container, Header, Button, } from "semantic-ui-react";
import styled from "styled-components";

const GetInTouch = () => (
  <StyledContainer>
    <StyledDiv>
      <StyledHeader>
        Get In Touch
      </StyledHeader>
      <StyledParagraph>
        PreOv, LLC is continually building upon our technology, so stay in touch
        to learn more about our progress.
      </StyledParagraph>
      <Link to="/EmailForm">
        <Button as={StyledButton}>PreOvLLC@gmail.com</Button>
      </Link>
    </StyledDiv>
  </StyledContainer>
);

const StyledContainer = styled(Container)`
  height: 320px;
  overflow: visible !important;
  background-color: white;
  
  @media (max-width: 768px) {
    display: block !important;
    width: 100%;
    height: 100% !important;
    margin: 2em !important;
  }
  `
const StyledDiv = styled.div`
  width: 70%;
  margin: 0em auto;
  padding-top: .7em;
  text-align: center;
  overflow: visible !important
  `
const StyledHeader = styled(Header)`
color: #5d6870 !important;
font-size: 3em !important;
margin-top: .6em !important;

@media (max-width: 768px) {
  font-size: 3em !important;
}
`;

const StyledParagraph = styled.p`
  margin: 1em !important;
  font-size: 16px;
  }
`;

const StyledButton = styled(Button)`
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2) !important;
  background-color: #f7b1b7 !important;
  color: white !important;
  margin: 1.3em !important;
  padding: 1.3em, 1.1em !important;
  font-size: 1.4em !important;
  transition: background 0.3s ease;

  &:hover {
    background: #f8c3cd !important;
    transition: background 0.3s ease;
  }
    @media (max-width: 768px) {
    display: block !important;
    margin: 2em auto !important;
    font-size: 1em !important;
  }
`;

export default GetInTouch;
