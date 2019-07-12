// Origin story <div>
// MEET THE TEAM grid

import React from 'react'
import { Container, Header, Segment, } from "semantic-ui-react";
import styled from 'styled-components'
import { Link, } from 'react-router-dom';


const AboutUs = () => {



return (
  <>
  <StyledContainer text>
        <StyledSeg>
          <StyledHeader align='center'>
        About Us
      </StyledHeader>
    <div>
       <p>
        PreOv is a female-led comapny focused on empowering women and couples in all
        stages of life.
      </p>
      <p> The idea for PreOv was conceived one late evening in Sugar House Coffee,
        over hot tea, cookies, and a shared passion for helping women better
        understand their bodies without the guesswork and hassle of daily testing.
      </p>
      <p>
        We began with the
        <a target="_blank" href="https://uofuhealth.utah.edu/center-for-medical-innovation/bench-2-bedside/" style={{ margin: '.5em'}}>
            University of Utah Bench to Bedside Program 
          </a>
        where we won the 2018 Grand Prize.
        In January of 2019, we won the 
        <a target="_blank" href="https://lassonde.utah.edu/oq" style={{ margin: '.5em'}}>
        University of Utah Opportunity Quest Grand Prize.
        </a>
        In April 2019, we won the 
        <a target="_blank" href="https://www.preovring.com/post/preov-wins-the-fred-lampropoulos-innovation-award-at-bench-to-bedside" style={{ margin: '.5em'}}>
        Fred Lampropoulos Innovation Award
        </a>
        at the 2019 University of Utah Bench to Bedside program.
        We have also been busy with product development.  Check back soon for updates.
      </p>

    </div>
    </StyledSeg>
  </StyledContainer>
  </>
)
};



const StyledContainer = styled(Container)`
  display: table;
  height: 100% !important;
`

const StyledSeg = styled(Segment)`
  border-radius: 0px !important;
  border: none !important;
  background-color: white;
  padding: 2.4em !important;
  font-size: 1em !important;
  box-shadow: none !important;
  `

const StyledHeader = styled(Header)`
  vertical-align: middle;
  color: #5d6870 !important;
  font-size: 3em !important;
  margin: 1em !important;
  padding-bottom: 1em !important;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.4em !important;
    text-align: center;
  }
`;
const StyledLink = styled(Link) `
  text-decoration: none;
  color: #5d6870;
  font-weight: 400;
  font-size: 1.4em;
  transition: background 0.4s ease;
  padding: .75em 1em;

  @media(max-width: 602px){
    font-size: .9em !important;
  }`

export default AboutUs;