"use client";
import React from "react";
import {
  Box,
  BottomNavigation,
  Container,
  Grid,
  Link,
  Typography,
  BottomNavigationAction,
  Button,
} from "@mui/material";
("@mui/material/");
import {
  Facebook,
  Instagram,
  WhatsApp,
  Twitter,
  GitHub,
  LinkedIn,
} from "@mui/icons-material";
import "../styles/global.css";
import logo from "../img/logo.png";
import "../styles/global.css";
import Image from "next/image";
import { hoverAnimation } from "../animation/animation";
import { motion } from "framer-motion";
const Footer: React.FC = () => {
  const socialMediaLinks = [
    { icon: <Facebook />, url: "https://www.facebook.com/" },
    { icon: <Instagram />, url: "https://www.instagram.com/" },
    { icon: <WhatsApp />, url: "https://www.whatsapp.com/" },
    { icon: <Twitter />, url: "https://www.twitter.com/" },
    { icon: <GitHub />, url: "https://www.github.com/" },
    { icon: <LinkedIn />, url: "https://www.linkedin.com/" },
  ];
  const navLinksData = [
    { text: "Home", href: "/" },
    { text: "About us", href: "/about" },
    { text: "Services and prices", href: "/services&prices" },
    { text: "Blog", href: "/blog" },
    { text: "Portfolio", href: "/portfolio" },
    { text: "Contacts", href: "/contacts" },
  ];
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        bgcolor: "#121212",
        color: "#fff",
      }}
    >
      <Container sx={{ paddingTop: 35, position: "relative", zIndex: 1000 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box>
              <Link href="/">
                <Image src={logo} height={30} width={180} alt="Simpsoft Logo" />
              </Link>
              <Typography variant="body2" sx={{ marginTop: 2 }}>
                We are a technology company dedicated to innovation and
                excellence.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Navigation
            </Typography>
            {navLinksData.map((link, index) => (
              <motion.div
                key={index}
                variants={hoverAnimation}
                whileHover="whileHover"
                whileTap="whileTap"
              >
                {" "}
                <Button
                  key={index}
                  component={Link}
                  href={link.href}
                  color="inherit"
                  sx={{
                    display: "block",
                    marginBottom: 1,
                  }}
                >
                  {link.text}
                </Button>
              </motion.div>
            ))}
            ;
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Social Media
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" sx={{ marginTop: 3, textAlign: "center" }}>
          © Simpsoft 2023. All rights reserved.
        </Typography>
        <BottomNavigation sx={{ background: "#222" }}>
          <BottomNavigationAction
            sx={{
              "& .MuiSvgIcon-root": {
                fill: "tan",
                "&:hover": {
                  fill: "tomato",
                  fontSize: "1.8rem",
                },
              },
            }}
          >
            {" "}
            <Box sx={{ display: "flex" }}>
              {socialMediaLinks.map((link, index) => (
                <Link
                  href={link.url}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ display: "block", marginRight: 2 }}
                >
                  {link.icon}
                </Link>
              ))}
            </Box>
          </BottomNavigationAction>
        </BottomNavigation>
      </Container>
    </Box>
  );
};

export default Footer;
