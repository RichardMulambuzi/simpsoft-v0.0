import * as React from "react";
import { Container, Typography, Button, Avatar } from "@mui/material";
import styled from "styled-components";
import aboutImg from "./img/about.jpg";
import { motion } from "framer-motion";
import { fadeInUpAnimation, staggerAnimation } from "../animation/animation";

const AboutContainer = styled(Container)`
  background: #191919;
  padding: 6rem 0;
`;

const AboutImage = styled.img`
  border-radius: 10px;
  width: 100%;
`;

const AboutHeading = styled.h1`
  margin-bottom: 10px;
  font-weight: 700;
  text-align: start;
  font-family: Montserrat, sans-serif;
  font-size: 60px;
`;

const AboutButton = styled.div`
  padding: 20px 0px;
  display: flex;
  gap: 20px;
`;

const CustomButton = styled(Button)`
  text-transform: capitalize;
  width: 195px;
  height: 55px;
  font-size: 18px;
  transition: 0.4s ease;

  @media (max-width: 425px) {
    width: 165px;
    height: 50px;
    font-size: 13px;
  }
`;

const UpToTopButton = styled.a`
  height: 40px;
  width: 40px;
  position: fixed;
  bottom: 3%;
  right: 2%;
  background-color: #f9004d;
  border-radius: 50%;
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;
  transition: 0.4s all ease;
  z-index: 1000;

  &.active {
    display: flex;
  }
`;

const AboutPage: React.FC = () => {
  return (
    <motion.div variants={fadeInUpAnimation}>
      <AboutContainer id="About">
        <Container>
          <div className="row">
            <div className="col__2">
              <AboutImage src={aboutImg} alt="" className="about__img" />
            </div>
            <div className="col__2">
              <AboutHeading>About Me</AboutHeading>
              <div className="about__meta">
                <Typography variant="body1" className="about__text p__color">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered in some form, by
                  injected humour, or randomised words which don't look even
                  slightly believable. If you are going to use a passage of
                  Lorem Ipsum,
                </Typography>
                <Typography variant="body1" className="about__text p__color">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered in some form, by
                  injected humour, or randomised words which don't look even
                  slightly believable. If you are going to use a passage of
                  Lorem Ipsum,
                </Typography>
                <Typography variant="body1" className="about__text p__color">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered in some form, by
                  injected humour,
                </Typography>
                <AboutButton className="about__button d__flex align__items__center">
                  <a href="#">
                    <CustomButton className="about btn pointer">
                      Download Cv
                    </CustomButton>
                  </a>
                  <a href="#">
                    <CustomButton className="about btn pointer">
                      Hire Me
                    </CustomButton>
                  </a>
                </AboutButton>
              </div>
            </div>
          </div>
        </Container>
        <UpToTopButton href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </UpToTopButton>
      </AboutContainer>
      <Container sx={{ padding: 20, backgroundColor: "#f2f2f2" }}>
        <Avatar
          alt="Richard Mlambuzi"
          src="/asset/img/shapes/star.png"
          sx={{ width: 100, height: 100 }}
        />
        <motion.div variants={staggerAnimation} className="div">
          <Typography variant="h4">About Me</Typography>
          <Typography variant="body1">
            Share your background and skills here.Presenting a
            product/service/company on a Wow level,We create a unique value of
            your business in the eyes of your clients. We set the highest
            standards by bringing every element to perfection . We look not for
            clients but brave men ready to create the best product that leave
            competitors somewhere behind.
          </Typography>
          <Typography variant="h4">Contact</Typography>
          <Typography variant="body1">
            Feel free to get in touch with me using the contact form or chatbot
            below.
          </Typography>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default AboutPage;
