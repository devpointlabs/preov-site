import React from "react"
import Phone from "../../Images/phone.png"
import { Header, Button, Image, Container, } from "semantic-ui-react"
import styled from 'styled-components'

const HomeHero = () => (
  <Container id="wrapper">
    <div id="left">
      <Container style={{ alignItems: "left", padding: "100px"}} >
        <Header as="h1" color="black">PreOv</Header>
        <br />
        <StyledParagraph>Emporwering you in family planning.</StyledParagraph>
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


const StyledParagraph = styled.p`
  margin: 1em !important;
  font-size: 16px;
`



export default HomeHero;
