import React from "react"
import Phone from "../../Images/iPhoneXDark.jpg"
import { Header, Button, Image, Container, } from "semantic-ui-react"

const HomeHero = () => (
  <Container id="wrapper">
    <div id="left">
      <Container style={{ alignItems: "left", }} >
        <Header as="h1" color="black">PreOv</Header>
        <br />
        <p>Emporwering you in family planning.</p>
        <p>Wherever that may be.</p>
        <br />
        <br />
        <Button className="ui blue">
          Learn More
        </Button>
      </Container>
    </div>
    <div id="right">
      <Image src={ Phone } />
    </div>
  </Container>
)


export default HomeHero;
