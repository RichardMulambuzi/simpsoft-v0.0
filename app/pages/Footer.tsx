"use client";
import React from "react";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  WhatsApp,
  Twitter,
  GitHub,
  LinkedIn,
} from "@mui/icons-material";

import logo from "../img/logo.png";

const Footer: React.FC = () => {
  const socialMediaLinks = [
    { icon: <Facebook />, url: "https://www.facebook.com/" },
    { icon: <Instagram />, url: "https://www.instagram.com/" },
    { icon: <WhatsApp />, url: "https://www.whatsapp.com/" },
    { icon: <Twitter />, url: "https://www.twitter.com/" },
    { icon: <GitHub />, url: "https://www.github.com/" },
    { icon: <LinkedIn />, url: "https://www.linkedin.com/" },
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
              <Link href="/" underline="none">
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
            <Link
              href="/about"
              color="inherit"
              sx={{ display: "block", marginBottom: 1 }}
            >
              About
            </Link>
            <Link
              href="/contact"
              color="inherit"
              sx={{ display: "block", marginBottom: 1 }}
            >
              Contact
            </Link>
            <Link
              href="/services"
              color="inherit"
              sx={{ display: "block", marginBottom: 1 }}
            >
              Services
            </Link>
            <Link
              href="/projects"
              color="inherit"
              sx={{ display: "block", marginBottom: 1 }}
            >
              Projects
            </Link>
            <Link
              href="/portfolio"
              color="inherit"
              sx={{ display: "block", marginBottom: 1 }}
            >
              Portfolio
            </Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Social Media
            </Typography>
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
          </Grid>
        </Grid>
        <Typography variant="body2" sx={{ marginTop: 3, textAlign: "center" }}>
          © Simpsoft 2023. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
