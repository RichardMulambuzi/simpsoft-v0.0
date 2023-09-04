"use client";
import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  SwipeableDrawer,
} from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ParticlesContainer from "../animation/particlesContainer";
import {
  menuSlideAnimation,
  navAnimation,
  hoverAnimation,
  fadeInUpAnimation,
  staggerAnimation,
  slideAnimation,
} from "../animation/animation";

const Header: React.FC = () => {
  const navLinksData = [
    { text: "Home", href: "/" },
    { text: "About us", href: "/about" },
    { text: "Services and prices", href: "/services&prices" },
    { text: "Blog", href: "/blog" },
    { text: "Portfolio", href: "/portfolio" },
    { text: "Contacts", href: "/contacts" },
  ];

  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [navBackground, setNavBackground] = useState<string>("transparent");

  useEffect(() => {
    const handleScroll = () => {
      setNavBackground(window.scrollY > 500 ? "white" : "transparent");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <Container
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        marginTop: "-10px",
        bgcolor: navBackground === "transparent" ? "transparent" : "#121212",
        transition: "background-color 0.5s ease-in-out",
      }}
    >
      <ParticlesContainer />
      <motion.div
        key={1}
        variants={fadeInUpAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.4 }}
      >
        <motion.div variants={staggerAnimation} animate="animate">
          <motion.nav
            variants={navAnimation}
            animate="animate"
            exit="exit"
            initial="initial"
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <AppBar
              position="fixed"
              sx={{
                backgroundColor: navBackground,
                boxShadow: "none",
                transition: "background-color 0.5s ease-in-out",
                "&.MuiPaper-elevated": {
                  boxShadow: "none",
                },
              }}
            >
              <Toolbar
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Link href="/">
                  <Image src="/logo.png" height={30} width={180} alt="" />
                </Link>

                {isMobileScreen ? (
                  <IconButton
                    color="inherit"
                    edge="start"
                    aria-label="menu"
                    onClick={openDrawer}
                    sx={{
                      color:
                        navBackground === "transparent" ? "white" : "black",
                      backgroundColor: "transparent",
                    }}
                  >
                    {drawerOpen ? <CloseIcon /> : <MenuIcon />}
                  </IconButton>
                ) : (
                  <Box sx={{ display: "flex", gap: "1rem" }}>
                    {navLinksData.map((link, index) => (
                      <motion.div
                        key={index}
                        variants={hoverAnimation}
                        whileHover="whileHover"
                        whileTap="whileTap"
                      >
                        <Button
                          key={index}
                          component={Link}
                          href={link.href}
                          color="inherit"
                          sx={{
                            color:
                              navBackground === "transparent"
                                ? "white"
                                : "black",
                            backgroundColor: "transparent",
                            padding: "0.5rem 1rem",
                            borderRadius: "0.5rem",
                          }}
                        >
                          {link.text}
                        </Button>
                      </motion.div>
                    ))}
                  </Box>
                )}
              </Toolbar>
            </AppBar>
          </motion.nav>
          <motion.div
            key={1}
            variants={menuSlideAnimation}
            animate="animate"
            exit="exit"
            initial="initial"
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <SwipeableDrawer
              anchor="top"
              open={drawerOpen}
              onClose={closeDrawer}
              onOpen={() => {}}
              sx={{
                zIndex: 1500,
                width: "80vw",
                maxWidth: "400px",
              }}
            >
              <motion.div
                variants={hoverAnimation}
                whileHover="whileHover"
                whileTap="whileTap"
                onClick={closeDrawer}
              >
                <CloseIcon
                  sx={{
                    position: "absolute",
                    right: theme.spacing(1),
                    top: theme.spacing(1),
                  }}
                />
              </motion.div>
              <List>
                {navLinksData.map((text, index) => (
                  <ListItemButton
                    key={text.text}
                    onClick={closeDrawer}
                    sx={{
                      backgroundColor: "transparent",
                      color:
                        navBackground === "transparent" ? "white" : "black",
                    }}
                  >
                    <motion.div
                      custom={index}
                      variants={slideAnimation(index)}
                      animate="animate"
                      exit="exit"
                      initial="initial"
                    >
                      <Link
                        href={index === 0 ? "/" : `/${text.text.toLowerCase()}`}
                        passHref
                      >
                        <ListItemText primary={text.text} />
                      </Link>
                    </motion.div>
                  </ListItemButton>
                ))}
              </List>
            </SwipeableDrawer>
          </motion.div>
          <motion.div
            key={1}
            variants={staggerAnimation}
            animate="animate"
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Container
              sx={{
                paddingTop: 35,
                position: "relative",
                zIndex: 1000,
                textAlign: "center",
              }}
            >
              <Typography
                variant="h2"
                component="h1"
                color={
                  navBackground === "transparent"
                    ? "common.white"
                    : "common.black"
                }
                fontWeight="600"
              >
                Welcome to my website
              </Typography>
              <Typography
                variant="h6"
                component="p"
                color={
                  navBackground === "transparent"
                    ? "common.white"
                    : "common.black"
                }
                fontWeight="600"
              >
                CREATORS OF WORLD-CLASS WEBSITES
              </Typography>
            </Container>
          </motion.div>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Header;
