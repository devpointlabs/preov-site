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
        <Button className="ui blue">
          Learn More
        </Button>
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



export default HomeHero;
