// Origin story <div>
// MEET THE TEAM grid

import React from "react";
import { Container, Header, Segment, Image } from "semantic-ui-react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import owners from "../Images/owners.png";

const AboutUs = () => {
  return (
    <>
      <StyledContainer text>
        <StyledSeg>
          <StyledHeader>
            Where It All Started 
          </StyledHeader>
          <StyledImage src={owners} />
          <div>
            <p>
              PreOv is a female-led company focused on empowering women and
              couples in all stages of life.
            </p>
            <p>
              The idea for PreOv was conceived one late evening in Sugar House
              Coffee, over hot tea, cookies, and a shared passion for helping
              women better understand their bodies without the guesswork and
              hassle of daily testing.
            </p>
            <p>
              We began with the
              <Link
                to="https://uofuhealth.utah.edu/center-for-medical-innovation/bench-2-bedside/"
                style={{ margin: ".5em" }}
              >
                University of Utah Bench to Bedside Program
              </Link>
              where we won the 2018 Grand Prize. In January of 2019, we won the
              <Link
                to="https://uofuhealth.utah.edu/center-for-medical-innovation/bench-2-bedside/"
                style={{ margin: ".5em" }}
              >
                University of Utah Opportunity Quest Grand Prize.
              </Link>
              In April 2019, we won the
              <Link
                to="https://uofuhealth.utah.edu/center-for-medical-innovation/bench-2-bedside/"
                style={{ margin: ".5em" }}
              >
                Fred Lampropoulos Innovation Award
              </Link>
              at the 2019 University of Utah Bench to Bedside program. We have
              also been busy with product development. Check back soon for
              updates.
            </p>
          </div>
        </StyledSeg>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled(Container)`
  display: table;
  height: 100% !important;
`;

const StyledSeg = styled(Segment)`
  border-radius: 0px !important;
  border: none !important;
  background-color: white;
  padding: 2.4em !important;
  font-size: 1em !important;
  box-shadow: none !important;
  margin: 0 auto !important;
`;

const StyledHeader = styled(Header)`
  vertical-align: middle;
  color: #5d6870 !important;
  font-size: 3em !important;
  padding-bottom: 1em !important;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.4em !important;
    text-align: center;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 7px;
  margin-bottom: 2.5em !important;
`

export default AboutUs;
