// Origin story <div>
// MEET THE TEAM grid

import React from 'react'
import { Container, Grid, Image, Divider, Header, Segment } from "semantic-ui-react";
const AboutUs = () => {



return (
  <>
  <Container text >
    <Segment>
      <Header as='h1'>
      <Image circular src='../images/PreOvIcon.jpg'/>
        About Us
      </Header>
      <h3> Our Story </h3>
    <div>
      <p> The idea for PreOv was conceived one late evening in Sugar House Coffee,
        over hot tea, cookies, and a shared passion for helping women better
        understand their bodies without the guesswork and hassle of daily testing.</p>
      <p>
        PreOv is a female-led comapny focused on empowering women and couples in all
        stages of life.
      </p>

    </div>
    </Segment>
  </Container>
  </>
)
};

export default AboutUs;