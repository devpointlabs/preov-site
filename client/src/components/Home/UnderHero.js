import React from "react"
import { Container, } from "semantic-ui-react"

const UnderHero = () => (
  <Container style={styles.underhero}>
    <p>Take control of your health with convinience and ease.</p>
  </Container>
)

const styles = {
  underhero: {
    backgroundColor: "#a5d4ef",
    color: "white",
    textAlign: "center",
    fontSize: "2em",
  }
}

export default UnderHero;