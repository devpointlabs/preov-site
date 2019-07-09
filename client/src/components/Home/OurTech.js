import React from "react";
import circle from "../../Images/ring.png";
import { Container, Header, Button, Image } from "semantic-ui-react";
import styled from "styled-components";
import { Link, } from "react-router-dom"

const OurTech = () => (
  <StyledContainer>
    <StyledLeftDiv>
      <StyledHeader>Our Technology</StyledHeader>
      <Underline />
      <StyledParagraph>
        PreOv helps women and couples achieve their family planning goals. Our
        device is the first intravaginal ring to measure changes to the cervical
        environment.
      </StyledParagraph>
      <StyledParagraph>
        PreOv makes identifying the fertile window nearly automatic, and
        provides you with advanced notice of ovulation.
      </StyledParagraph>
      <StyledParagraph>
        Our system allows you to plan ahead, and spend less time on tracking
        your menstrual cycle alleviating stress and giving more time for you.
      </StyledParagraph>
      <Link to="/howitworks">
        <Button as={StyledButton}>Read More</Button>
      </Link>
    </StyledLeftDiv>
    <StyledRightDiv>
      <Image src={circle} style={styles.image} />
    </StyledRightDiv>
  </StyledContainer>
);

const StyledContainer = styled(Container)`
  height: 720px;
  background-color: #f8f8f8;
  overflow: hidden !important;
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
  padding: 1em 2em 1em 4em;
  background-color: #f8f8f8 !important;
  
  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;
const StyledHeader = styled(Header)`
  color: #5d6870 !important;
  font-size: 4em !important;
  margin-top: 1em !important;

  @media (max-width: 768px) {
    font-size: 3em !important;
    text-align: center;
  }
`;
const Underline = styled.hr`
  border: 3px solid #a5d4ef;
  border-radius: 6px;
  width: 80%;
  margin-left: 0;

  @media (max-width: 1200px) {
    width: 90% !important;
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

  &:hover {
    background: #aee0fc !important;
    transition: background 0.3s ease;
  }

  @media (max-width: 768px) {
    display: block !important;
    margin: 2em auto !important;
    font-size: 1em !important;

  }
`;
const StyledRightDiv = styled.div`
  display: flex;
  justify-content: center !important;
  align-content: center !important;
  padding: 1em 1em 1em 2em;

  @media (max-width: 768px) {
    display: none;
  }
`;

const styles = {
  cont: {
    backgroundColor: "#f8f8f8"
  },
  image: {
    width: "80%",
  }
};

export default OurTech;
