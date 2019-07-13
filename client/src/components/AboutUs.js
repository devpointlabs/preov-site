import React from "react";
import { Container, Header, Segment, Image } from "semantic-ui-react";
import styled from "styled-components";
import owners from "../Images/owners.png";

const AboutUs = () => {
  return (
    <>
      <StyledContainer text>
        <StyledSeg>
          <StyledHeader>Where It All Started</StyledHeader>
          <StyledImage src={owners} />
          <div>
            <p>
              PreOv is a female-led comapny focused on empowering women and
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
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://uofuhealth.utah.edu/center-for-medical-innovation/bench-2-bedside/"
                style={{ margin: ".5em" }}
              >
                University of Utah Bench to Bedside Program
              </a>
              where we won the 2018 Grand Prize. In January of 2019, we won the
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://lassonde.utah.edu/oq"
                style={{ margin: ".5em" }}
              >
                University of Utah Opportunity Quest Grand Prize.
              </a>
              In April 2019, we won the
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.preovring.com/post/preov-wins-the-fred-lampropoulos-innovation-award-at-bench-to-bedside"
                style={{ margin: ".5em" }}
              >
                Fred Lampropoulos Innovation Award
              </a>
              at the 2019 University of Utah Bench to Bedside program. We have
              also been busy with product development. Check back soon for
              updates.
            </p>
            <h3>Meet the Co-Founders</h3>
            <h5>Joni Aoki</h5>
            <p>
              Co-Founder with experience in accounting and finance. She is a
              Certified Public Accountant and served as a Senior Tax Accountant
              for Ernst & Young LLP and later as Assistant Director of Financial
              Planning & Analysis for Sundance Institute. She is a pre-medicine
              student at the University of Utah. Her major roles involve
              executive/management, finance, legal, fundraising, regulatory
              affairs/strategy, marketing, and branding. She serves on the Board
              of Directors for the Rape Recovery Center and enjoys volunteering
              at the VA Nursing Home. Joni loves cooking and spending time with
              her husband and two young boys.
            </p>
            <h5>Jeanna Ryan</h5>
            <p>
              Co-Founder with a diverse background in technology, education, and
              the health Sciences. She has a Master of Science in Nutrition,
              Master of Science in Computer Information Systems with a
              concentration in health informatics, and a Master of Physician
              Assistant Studies. Jeanna is a Certified Physician Assistant
              (PA-C), and Registered Dietitian Nutritionist (RDN) with over 12
              years of clinical experience in healthcare. She has also won
              several awards for her excellence in teaching and research. Her
              major roles involve software, hardware, medical/clinical,
              website/social media, innovation/technology, regulatory
              affairs/strategy, and fundraising. During her free time, Jeanna
              enjoys hanging out with her husband and 3 daughters.
            </p>
            <h5>Young Hong</h5>
            <p>
              Co-Founder with a background in the health and social sciences
              with a B.A. in Psychology. She is a pharmacy student in the
              University of Utah College of Pharmacy. Her major roles involve
              hardware, engineering, regulatory affairs/strategy, marketing and
              branding.
            </p>
            <h5>June Chen</h5>
            <p>
              {" "}
              Co-Founder and Active Advisor and member of the founding team with
              a dual background in medicine and English. She is a current
              Managing Partner at Mountain Pacific Venture Fund, Managing
              Partner at
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ldd.com/"
                style={{ margin: ".2em" }}
              >
                LDD Partners
              </a>
              , and Co-Founder of
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.cs1893.com/"
                style={{ margin: ".2em" }}
              >
                Church & State
              </a>
              . She has extensive experience in business development, strategic
              communications and angel investing for start-ups and established
              companies, including life sciences, finance, technology and
              consumer healthcare.
            </p>
            <h5>Ron Heffernan</h5>
            <p>
              {" "}
              Co-Founder and Active Advisor and member of the founding team with
              extensive experience in executive leadership, sales, strategy,
              finance and capital raising. He is a current Managing Partner at
              Mountain Pacific Venture Partners, Managing Partner of
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ldd.com/"
                style={{ margin: ".2em" }}
              >
                LDD Partners
              </a>
              , and Co-Founder of
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.cs1893.com/"
                style={{ margin: ".2em" }}
              >
                Church & State
              </a>
              . He has been a CEO of multiple technology and medical device
              companies and is a serial entrepreneur and angel investor.
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
`;

export default AboutUs;
