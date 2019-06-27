import React from "react"
import Icon from "../../Images/PreOvIcon.jpg"
import { Container, Header, Button, Image, } from "semantic-ui-react"

const OurStory = () => (
  <Container id="wrapper">
    <div id="left">
      <Header as="h1" style={styles.header}>Our Story</Header>
      <hr style={styles.hr} />
      <p>The idea for PreOv was conceived one late evening in Sugar House Coffee, 
        over hot tea, cookies, and a shared passion for helping women better 
        understand their bodies without the guesswork and hassle of daily testing.</p>
      <p>PreOv is a female-led company focused on empowering women and couples in all stages of life.</p>
      <Button className="ui blue">
        Read More
      </Button>
    </div>
    <div id="right">
      <Image src={ Icon } style={styles.image} />
    </div>
  </Container>
)

const styles = {
  header: {
    color: "#5d6870",
    fontSize: "50px",
  },
  hr: {
    border: "3px solid #a5d4ef",
    width: "50%",
    marginLeft: "0",
  },
  image: {
    transform: "rotate(-20deg)",
  }
}

export default OurStory;