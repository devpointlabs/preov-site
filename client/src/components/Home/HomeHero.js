import React from "react"
import Phone from "../../Images/phone.png"
import { Header, Button, Image, Container, } from "semantic-ui-react"
import styled from 'styled-components'

const HomeHero = () => (
  <Container id="wrapper">
    <div id="left">
      <Container style={{ alignItems: "left", padding: "100px"}} >
        <StyledHeader>PreOv</StyledHeader>
        <br />
        <StyledParagraph>Empowering you in family planning.</StyledParagraph>
        <StyledParagraph>Wherever that may be.</StyledParagraph>
        <br />
        <br />
        <StyledButton>
          Learn More
        </StyledButton>
      </Container>
    </div>
    <div id="right" >
      <Image src={ Phone } />
    </div>
  </Container>
)
const StyledHeader = styled(Header)`
  color: black !important;
  font-size: 5em !important;
`
const StyledParagraph = styled.p`
  font-size: 20px;
  margin-bottom: 0 !important;
  color:  #5d6870;
`
const StyledButton = styled(Button)`
  box-shadow: 0px 5px 10px rgba(0,0,0,0.2) !important;
  background-color: #a5d4ef !important;
  color: white !important;
  margin: 1.3em !important;
  padding: 1.2em, 1.1em !important;
  font-size: 1.4em !important;
  transition: background 0.3s ease;

  &:hover{
    background: #AEE0FC !important;
    transition: background 0.3s ease;
  }
`

export default HomeHero;
