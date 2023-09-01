"use client";
import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  useScrollTrigger,
  SwipeableDrawer,
} from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ParticlesContainer from "../components/particlesContainer";
import {
  menuSlideAnimation,
  navAnimation,
  hoverAnimation,
  fadeInUpAnimation,
  staggerAnimation,
} from "../utils/animation/transition";

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
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 700,
  });

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        marginTop: "-10px",
        bgcolor: "#121212",
      }}
    >
      <motion.div
        key={1}
        variants={fadeInUpAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.4 }}
      >
        <motion.div
          variants={staggerAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <ParticlesContainer />
          <motion.nav
            variants={navAnimation}
            animate="animate"
            exit="exit"
            initial="initial"
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <AppBar
              position="fixed"
              className={`${trigger ? "MuiPaper-elevated blackAppBar" : ""}`}
              sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
                transition: "background-color 0.5s ease-in-out",
                "&.MuiPaper-elevated": {
                  boxShadow: "none",
                },
              }}
            >
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <Button component={Link} href="/" color="inherit">
                    <Image src="/logo.png" height={30} width={180} alt="" />
                  </Button>
                </Typography>

                {isMediumScreen ? (
                  <IconButton
                    color="inherit"
                    edge="start"
                    aria-label="menu"
                    onClick={handleDrawerOpen}
                    sx={{
                      color: "inherit",
                      backgroundColor: "transparent",
                    }}
                  >
                    {drawerOpen ? <CloseIcon /> : <MenuIcon />}
                  </IconButton>
                ) : (
                  <Box>
                    {navLinksData.map((link, index) => (
                      <Button
                        key={index}
                        component={Link}
                        href={link.href}
                        color="inherit"
                        sx={{
                          color: "inherit",
                          backgroundColor: "transparent",
                        }}
                        variants={hoverAnimation}
                        whileHover="whileHover"
                        whileTap="whileTap"
                      >
                        {link.text}
                      </Button>
                    ))}
                  </Box>
                )}
              </Toolbar>
            </AppBar>
          </motion.nav>
          <motion.div
            key={1}
            animate="animate"
            exit="exit"
            initial="initial"
            variants={menuSlideAnimation}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <SwipeableDrawer
              anchor="top"
              open={drawerOpen}
              onClose={handleDrawerClose}
              onOpen={() => {}}
              sx={{ zIndex: 1500 }}
            >
              {" "}
              <motion.div
                whileTap={{ scale: 0.9 }} // Add the animation here
                onClick={handleDrawerClose}
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
                    onClick={handleDrawerClose}
                    sx={{
                      color: "inherit",
                      backgroundColor: "transparent",
                    }}
                  >
                    <motion.div
                      custom={index}
                      variants={menuSlideAnimation}
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
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Header;
