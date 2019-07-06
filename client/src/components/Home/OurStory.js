import React from "react"
import founders from "../../Images/founders.png"
import { Container, Header, Button, Image, } from "semantic-ui-react"
import styled from 'styled-components'

const OurStory = () => (
  <Container id="wrapper">
    <StyledHr />
    <div id="left">
      <Header as="h1" style={styles.header}>Our Story</Header>
      <hr style={styles.hr} />
      <StyledParagraph>The idea for PreOv was conceived one late evening in Sugar House Coffee, 
        over hot tea, cookies, and a shared passion for helping women better 
        understand their bodies without the guesswork and hassle of daily testing.</StyledParagraph>
      <StyledParagraph>PreOv is a female-led company focused on empowering women and couples in all stages of life.</StyledParagraph>
      <Button as={StyledButton} >
        Read More
      </Button>
    </div>
    <div id="right">
    <StyledHr />
      <Image src={ founders } />
    </div>
  </Container>
)
const StyledHr = styled.hr` 
    height: 12px;
    border: 0;
    box-shadow: inset 0 12px 12px -12px rgba(0, 0, 0, 0.3);
    margin: 0 !important;
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

const StyledParagraph = styled.p`
  margin: 1em !important;
  font-size: 16px;
`


const styles = {
  header: {
    color: "#5d6870",
    fontSize: "4em",
  },
  hr: {
    border: "3px solid #a5d4ef",
    borderRadius: "6px",
    width: "45%",
    marginLeft: "0",
  },
}

export default OurStory;