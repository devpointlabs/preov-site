import React from "react";
import founders from "../../Images/founders.png";
import { Container, Header, Button, Image } from "semantic-ui-react";
import styled from "styled-components";
import { Link, } from "react-router-dom"

const OurStory = () => (
  <StyledContainer>
    <StyledHr />
    <StyledLeftDiv>
      <Image src={founders} />
    </StyledLeftDiv>
    <StyledRightDiv>
      <Container>
        <StyledHeader>Our Story</StyledHeader>
        <Underline />
        <StyledParagraph>
          The idea for PreOv was conceived one late evening in Sugar House
          Coffee, over hot tea, cookies, and a shared passion for helping women
          better understand their bodies without the guesswork and hassle of
          daily testing.
        </StyledParagraph>
        <StyledParagraph>
          PreOv is a female-led company focused on empowering women and couples
          in all stages of life.
        </StyledParagraph>
        <Link to="/about">
          <Button as={StyledButton}>Read More</Button>
        </Link>
      </Container>
    </StyledRightDiv>
  </StyledContainer>
);
const StyledContainer = styled(Container)`
  overflow: hidden !important;
  height: 620px;
  background-color: white;

  @media (max-width: 768px) {
    overflow: visible !important;
    display: block !important;
    width: 100% !important;
    height: 100% !important;
  }
`;
const StyledHr = styled.hr`
  height: 12px;
  border: 0;
  box-shadow: inset 0 12px 12px -12px rgba(0, 0, 0, 0.3);
  margin: 0 !important;
  width: 100% !important;

  @media (max-width: 768px) {
    display: none !important;
  }
`;
const StyledLeftDiv = styled.div`
  width: 50%;
  float: left;
  padding: 1em 2em 1em 1em;

  @media (max-width: 768px) {
    display: block !important;
    width: 100% !important;
  }
`;
const StyledHeader = styled(Header)`
  color: #5d6870 !important;
  font-size: 4em !important;
  margin-top: 1em !important;
  text-align: right;

  @media (max-width: 768px) {
    font-size: 3em !important;
    text-align: center;
  }
`;
const Underline = styled.hr`
  border: 3px solid #a5d4ef;
  border-radius: 6px;
  width: 80%;
  margin-right: 0;

  @media (max-width: 1200px) {
    width: 58% !important;
  }
  @media (max-width: 991px) {
    width: 75% !important;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const StyledParagraph = styled.p`
  margin: 1em !important;
  font-size: 16px;
  text-align: right;

  @media (max-width: 768px) {
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
  float: right;

  &:hover {
    background: #aee0fc !important;
    transition: background 0.3s ease;
  }
  @media (max-width: 768px) {
    display: block !important;
    margin: 2em auto !important;
    float: none;
    font-size: 1em !important;
  }
`;

const StyledRightDiv = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0 !important;
  padding: 1em 4em 1em 1em;

  @media (max-width: 768px) {
    display: block !important;
    width: 100% !important;
    height: 100% !important;
  }
`;

// const styles = {
//   header: {
//     color: "#5d6870",
//     fontSize: "4em",
//   },
//   hr: {
//     border: "3px solid #a5d4ef",
//     borderRadius: "6px",
//     width: "45%",
//     marginLeft: "0",
//   },
// }

export default OurStory;
