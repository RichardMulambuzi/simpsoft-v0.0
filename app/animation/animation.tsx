// Animation Definitions
export const menuSlideAnimation = {
  initial: {
    x: "calc(100% + 100px)", // Start off-screen
  },
  animate: {
    x: "0%", // Animate to on-screen
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    x: "100%", // Animate off-screen
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
export const slideAnimation = (i) => ({
  initial: {
    x: "80%",
  },
  animate: {
    x: "0%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.09 * i },
  },
  exit: {
    x: "80%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.09 * i },
  },
});

export const navAnimation = {
  initial: {
    y: 0,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    y: 0,
    opacity: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const loaderAnimation = {
  initial: {
    x: "100%", // Start off-screen
    width: "100%", // Initially full width
  },
  animate: {
    x: "0%", // Animate to on-screen
    width: "0%", // Animate to no width
    transition: {
      duration: 0.4, // Shorter duration for faster transition
      ease: "easeOut", // Use a built-in easing function
    },
  },
  exit: {
    x: ["0%", "100%"], // Animate off-screen
    width: ["0%", "100%"], // Animate to full width
    transition: {
      duration: 0.2, // Shorter duration for faster exit
      ease: "easeIn", // Use a built-in easing function
    },
  },
};


export const fadeInUpAnimation = {
  initial: {
    y: 60, // Start slightly below final position
    opacity: 0,
  },
  animate: {
    y: 0, // Animate to final position
    opacity: 1,

    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    opacity: 0,
  },
};

export const hoverAnimation = {
  whileHover: {
    scale: 1.05, // Slightly scale up on hover
  },
  whileTap: {
    scale: 0.95, // Slightly scale down when tapped
  },
};

export const staggerAnimation = {
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const imageAnimation = {
  initial: {
    x: 60,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
  exit: {
    x: 60,
    opacity: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

export const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100%",
  },
  animate: {
    opacity: 1,
    x: "0%",
  },
  exit: {
    opacity: 0,
    x: "100%",
  },
};
