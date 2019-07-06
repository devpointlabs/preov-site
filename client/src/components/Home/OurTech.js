import React from "react"
import circle from "../../Images/ring.png"
import { Container, Header, Button, Image, } from "semantic-ui-react"
import styled from 'styled-components'

const OurTech = () => (
  <Container id="wrapper" style={styles.cont}>
    <div id="left">
      <Header as="h1" style={styles.header}>Our Technology</Header>
      <hr style={styles.hr} />
      <StyledParagraph>PreOv helps women and couples achieve their family planning goals. 
        Our device is the first intravaginal ring to measure changes to the 
        cervical environment.</StyledParagraph>
      <StyledParagraph>PreOv makes identifying the fertile window nearly automatic, and
        provides you with advanced notice of ovulation.</StyledParagraph>
      <StyledParagraph>Our system allows you to plan ahead, and spend less time on tracking
        your menstrual cycle alleviating stress and giving more time for you.</StyledParagraph>
      <Button as={StyledButton}>
        Read More
      </Button>
    </div>
    <div id="right">
      <Image src={ circle } style={styles.image} />
    </div>
  </Container>
)

const StyledParagraph = styled.p`
  margin: 1em !important;
  font-size: 16px;
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

const styles = {
  cont: {
    backgroundColor: "#f8f8f8",
  },
  header: {
    color: "#5d6870",
    fontSize: "4em",
  },
  hr: {
    border: "3px solid #a5d4ef",
    borderRadius: "6px",
    width: "66%",
    marginLeft: "0",
  },
  image: {
    width: "90%",
    margin: "0 !important",
  }


}

export default OurTech;