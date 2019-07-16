import React from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import styled from 'styled-components'
import device from '../Images/device.png'

const HowItWorks = () => {
  return (
    <>
      <StyledContainer text>
        <StyledSeg>
          <StyledHeader>
            How The PreOv Device Works
          </StyledHeader>
          <StyledImg src={device}></StyledImg>
          <div>
            <p>
              PreOv Helps women and couples achieve their family planning goals.
              Our device is the first intravaginal ring to measure changes to
              the cervical environment.
            </p>
            <p>
              PreOv makes identifying the fertile window nearly automatic, and
              provides you with advanced notice of ovulation.
            </p>
            <p>
              Our system allows you to plan ahead, and spend less time on
              tracking your mestraul cycle alleviating stress and giving more
              time for you.
            </p>
            <ol>
              <li>Simply insert the ring after menstruation</li>
              <li>Access or be alerted of fertility data using your mobile phone, tablet or computer</li>
              <li> Remove the ring about 1-2 weeks after insertion when you've been notified that ovulation occurred
              </li>
            </ol>
          </div>
        </StyledSeg>
      </StyledContainer>
    </>
  );
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
  padding-bottom: 0em !important;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.4em !important;
    text-align: center;
  }
`;

const StyledImg = styled.img`
  width: 40% !important;
  display: block;
  margin: 0 auto !important;
padding-bottom: 1em;
`

export default HowItWorks;
