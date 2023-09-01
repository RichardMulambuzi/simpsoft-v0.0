"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import WebDesign from "./works/webDesign";
import ProductDesign from "./works/productDesign";
import Development from "./works/development";
import Illustration from "./works/illustration";
import SocialMedia from "./works/socialMedia";

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];

const listItemStyle = {
  fontSize: "50px",
  fontWeight: "900",
  cursor: "pointer",
  WebkitTextStroke: "1px #000",
  position: "relative",
  "&::after": {
    top: "0",
    left: "0",
    width: "0",
    overflow: "hidden",
    color: "transparent",
    position: "absolute",
    whiteSpace: "nowrap",
  },
  "&:hover": {
    color: "transparent",
    "&::after": {
      animation: "moveText 0.5s linear both",
      animationName: {
        to: {
          width: "100%",
        },
      },
    },
  },
};

export default function Section1() {
  const [work, setWork] = useState("Web Design");

  const handleWorkClick = (item) => {
    setWork(item);
  };

  return (
    <Container
      sx={{
        height: "100vh",
        scrollSnapAlign: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container
        sx={{
          width: "100vw",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            flex: "1",
            alignItems: "center",
          }}
        >
          <List
            sx={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {data.map((item) => (
              <ListItem
                key={item}
                onClick={() => handleWorkClick(item)}
                sx={listItemStyle}
              >
                {item}
              </ListItem>
            ))}
          </List>
        </Box>
        <Box sx={{ flex: "1", alignItems: "right" }}>
          <Typography variant="h4" sx={{ marginBottom: 2, fontWeight: "bold" }}>
            {work}
          </Typography>
          {work === "Web Design" ? (
            <WebDesign />
          ) : work === "Product Design" ? (
            <ProductDesign />
          ) : work === "Social Media" ? (
            <SocialMedia />
          ) : work === "Illustration" ? (
            <Illustration />
          ) : (
            <Development />
          )}
        </Box>
      </Container>
    </Container>
  );
}
