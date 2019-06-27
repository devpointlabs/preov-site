import React from "react"
import { Container, Header, Button, } from "semantic-ui-react"

const GetInTouch = () => (
  <Container style={{ height: "500px", padding: "220px"}}>
    <div style={{ textAlign: "center" }}>
      <Header as="h1" style={styles.header}>Get In Touch</Header>
      <p>PreOv, LLC is continually building upon our technology,
        so stay in touch to learn more about our progress.</p>
      <Button style={styles.button}>
        PreOvLLC@gmail.com
      </Button>
    </div>
  </Container>
)

const styles = {
  header: {
    color: "#5d6870",
    fontSize: "40px",
  },
  button: {
    backgroundColor: "#f7b1b7",
    color: "white",
  }
}

export default GetInTouch;