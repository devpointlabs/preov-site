import React from "react";
import Phone from "../../Images/phone.png";
import { Header, Button, Image, Container } from "semantic-ui-react";
import styled from "styled-components";

const HomeHero = () => (
  <StyledContainer>
    <StyledLeftDiv>
      <Container style={{ alignItems: "left", padding: "100px" }}>
        <StyledHeader>PreOv</StyledHeader>
        <br />
        <StyledParagraph>Empowering you in family planning.</StyledParagraph>
        <StyledParagraph>Wherever that may be.</StyledParagraph>
        <StyledButton>Learn More</StyledButton>
      </Container>
    </StyledLeftDiv>
    <StyledRightDiv>
      <Image src={Phone} />
    </StyledRightDiv>
  </StyledContainer>
);
const StyledContainer = styled(Container)`
  overflow: hidden;
  height: 620px;
  background-color: white;

  @media (max-width: 768px) {
    overflow: visible !important;
    display: block !important;
    width: 100%;
    height: 100% !important;
  }
`;

const StyledLeftDiv = styled.div`
  width: 50%;
  float: left;
  padding: 1em 1em 1em 2em;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

const StyledHeader = styled(Header)`
  color: black !important;
  font-size: 5em !important;

  @media (max-width: 768px) {
    font-size: 6em !important;
    text-align: center;
  }
`;
const StyledParagraph = styled.p`
  font-size: 20px;
  margin-bottom: 2em !important;
  color: #5d6870;

  @media (max-width: 768px) {
    font-size: 2em !important;
    text-align: center;
  }
`;
const StyledButton = styled(Button)`
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2) !important;
  background-color: #a5d4ef !important;
  color: white !important;
  margin: 1.3em !important;
  padding: 1.2em, 1.1em !important;
  font-size: 1.4em !important;
  transition: background 0.3s ease;

  &:hover {
    background: #aee0fc !important;
    transition: background 0.3s ease;
  }

  @media(max-width: 992px){
    margin: 2em auto !important;
    width: 9em !important;
  }

  @media (max-width: 768px) {
    display: block !important;
    margin: 2em auto !important;
    font-size: 1.2em !important;
  }
`;
const StyledRightDiv = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0 !important;

  @media (max-width: 768px) {
    display: block !important;
    width: 100%;
  }
`;

export default HomeHero;
