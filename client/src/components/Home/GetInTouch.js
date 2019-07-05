import React from "react"
import { Link, } from 'react-router-dom';
import { Container, Header, Button, } from "semantic-ui-react"
import styled from 'styled-components'

const GetInTouch = () => (
  <Container style={{ height: "500px", padding: "220px", backgroundColor:"white"}}>
    <div style={{ textAlign: "center" }}>
      <Header as="h1" style={styles.header}>Get In Touch</Header>
      <StyledParagraph>PreOv, LLC is continually building upon our technology,
        so stay in touch to learn more about our progress.</StyledParagraph>
        <Link to="/EmailForm">
      <Button as={StyledButton}>
        PreOvLLC@gmail.com
      </Button>
      </Link>
    </div>
  </Container>
)

const StyledParagraph = styled.p`
  margin: 1em !important;
  font-size: 16px;
`

const StyledButton = styled(Button)`
  box-shadow: 0px 5px 10px rgba(0,0,0,0.2) !important;
  background-color: #f7b1b7 !important;
  color: white !important;
  margin: 1.3em !important;
  padding: 1.3em, 1.1em !important;
  font-size: 1.4em !important;
  transition: background 0.3s ease;

  &:hover{
    background: #F8C3CD !important;
    transition: background 0.3s ease;
  }
`

const styles = {
  header: {
    color: "#5d6870",
    fontSize: "40px",
  },

}

export default GetInTouch;