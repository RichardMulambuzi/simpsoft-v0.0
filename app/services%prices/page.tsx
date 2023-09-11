import * as React from "react";
import Container from "@mui/material/Container";
import { motion } from "framer-motion";
import { fadeInUpAnimation, staggerAnimation } from "../animation/animation";
import { styled } from "@mui/system";
import { Card, CardContent, Grid, Typography } from "@mui/material";

const ServiceContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(6, 0),
}));

const Heading = styled("h1")(({ theme }) => ({
  fontSize: "60px",
  textAlign: "center",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 700,
  marginBottom: "10px",
}));

const HeadingParagraph = styled("p")(({ theme }) => ({
  marginBottom: 0,
  textAlign: "center",
  lineHeight: 1.2,
}));

const ServiceBox = styled(Card)(({ theme }) => ({
  borderRadius: "10px",
  width: "100%",
  backgroundColor: "#191919",
  padding: theme.spacing(7),
  transition: ".4s ease",
  "&:hover": {
    transform: "translateY(5px)",
    backgroundImage: "linear-gradient(90deg, #f61b10, #ef0963)",
  },
}));

const Icon = styled("div")(({ theme }) => ({
  fontSize: "54px",
  fontWeight: 400,
  marginBottom: theme.spacing(3),
  display: "inline-flex",
  color: "#f9004d",
}));

const ServiceText = styled("h1")(({ theme }) => ({
  fontSize: "19px",
  fontFamily: "Poppins, sans-serif",
  padding: "10px 0px",
}));

const ServiceTextParagraph = styled("p")(({ theme }) => ({
  marginBottom: 0,
}));

export default function ServicePage() {
  return (
    <motion.div variants={fadeInUpAnimation}>
      <ServiceContainer>
        <Typography variant="h2">Latest News</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <ServiceBox>
              <Icon>{/* Add your icon here */}</Icon>
              <CardContent>
                <ServiceText>Business Strategy</ServiceText>
                <ServiceTextParagraph>
                  I throw myself down among the tall grass by the stream as I
                  lie close to the earth.
                </ServiceTextParagraph>
              </CardContent>
            </ServiceBox>
          </Grid>
          {/* Repeat similar code for other Grid items */}
        </Grid>
      </ServiceContainer>
    </motion.div>
  );
}
