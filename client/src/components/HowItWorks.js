// images or hardware illustractions?
// a footer with reviews?

import React from 'react'
import Icon from '../Images/PreOvIcon.jpg'
import { Container, Grid, Image, Divider, Header, Segment } from "semantic-ui-react";

const HowItWorks = () => {



return (
  <>
  <Container text >
    <Segment>
      <Header as='h1'>
      <Image src= { Icon }/>
        How It Works
      </Header>
      <h3> Our Technology </h3>
    <div>
      <p> PreOv Helps women and couples achieve their family planning goals. Our
        device is the first intravaginal ring to measure changes to the cervical environment
      </p>
      <p>
        PreOv makes identifying the fertile window nearly automatic, and provides
        you with advanced notice of ovulation
      </p>
      <p>
        Our system allows you to plan ahead, and spend less time on tracking your mestraul 
        cycle alleviating stress and giving more time for you.
      </p>

    </div>
    </Segment>
  </Container>
  </>
)
};

export default HowItWorks;