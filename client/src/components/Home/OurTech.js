import React from "react"
import circle from "../../Images/bluecircle.png"
import { Container, Header, Button, Image, } from "semantic-ui-react"

const OurTech = () => (
  <Container id="wrapper" style={styles.cont}>
    <div id="left">
      <Header as="h1" style={styles.header}>Our Technology</Header>
      <p>PreOv helps women and couples achieve their family planning goals. 
        Our device is the first intravaginal ring to measure changes to the 
        cervical environment.</p>
      <p>PreOv makes identifying the fertile window nearly automatic, and
        provides you with advanced notice of ovulation.</p>
      <p>Our system allows you to plan ahead, and spend less time on tracking
        your menstrual cycle alleviating stress and giving more time for you.</p>
      <Button className="ui blue">
        Read More
      </Button>
    </div>
    <div id="right">
      <Image src={ circle } style={styles.image} />
    </div>
  </Container>
)

const styles = {
  cont: {
    backgroundColor: "#f8f8f8",
  },
  header: {
    color: "#5d6870",
    fontSize: "50px",
  },
  image: {
    width: "100%",
  }
}

export default OurTech;