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
    <div id="right" style={styles.right}>
      <Image src={ Phone } />
    </div>
  </Container>
)

const styles = {
  right: {
    background: "linear-gradient(163deg, rgba(165,212,239,1) 15%, rgba(247,177,183,1) 62%)",
  }
}

export default HomeHero;
