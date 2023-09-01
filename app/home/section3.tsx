import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image"; // Assuming you're using Next.js for images
import f6 from "../img/f6.png"; // Replace with your image path
import '../styles/global.css';
export default function Section3() {
  return (
    <Container
      sx={{
        height: "100vh",
        width: "100%",
        scrollSnapAlign: "center",
        display: "flex",
        justifyContent: "center",
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
        overflowY: "auto",
      }}
    >
      <Container
        sx={{
          flex: "2",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Improved alignment
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          color="inherit"
          fontWeight="600"
          fontSize="clamp(40px, 10vw, 74px)" // Responsive font size
          textAlign="center"
        >
          THINK. MAKE. SOLVE.
        </Typography>
        <Typography
          variant="h6"
          component="p"
          fontSize="18px"
          color="inherit"
          fontWeight="400"
          textAlign="center"
        >
          What we Do
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="inherit"
          fontSize="24px"
          fontWeight="300"
          textAlign="center"
        >
          We enjoy creating delightful, human-centered digital experiences.
        </Typography>
        <Button
          href="/blog"
          sx={{
            backgroundColor: "#da4ea2",
            color: "white",
            fontWeight: "500",
            width: "150px", // Increased button width
            padding: "12px", // Increased padding
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Learn More
        </Button>
      </Container>
      <Container sx={{ flex: "3", position: "relative" }}>
        {/* 3D Model */}
        <Image
          src={f6}
          width={500}
          height={270}
          objectFit="contain"
          alt="Simpsoft feature 6"
          className="animated-image"
        />
      </Container>
    </Container>
  );
}
