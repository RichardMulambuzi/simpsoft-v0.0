// Menu Slide Animation
export const menuSlideAnimation = {
  initial: {
    x: "calc(100% + 100px)", // Start off-screen
  },
  animate: {
    x: "0%", // Animate to on-screen
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1], // Smoother easing curve
    },
  },
  exit: {
    x: "100%", // Animate off-screen
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

// Slide Animation with Dynamic Delay
export const slideAnimation = (i: number) => ({
  initial: {
    x: "80%",
  },
  animate: {
    x: "0%",
    transition: {
      duration: 0.7,
      ease: [0.42, 0, 0.58, 1],
      delay: 0.05 * i, // Reduced delay for faster sequences
    },
  },
  exit: {
    x: "80%",
    transition: {
      duration: 0.7,
      ease: [0.42, 0, 0.58, 1],
      delay: 0.05 * i,
    },
  },
});

// Navigation Animation
export const navAnimation = {
  initial: {
    y: -20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12, // Softer spring effect
      stiffness: 80,
      duration: 0.7,
    },
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 80,
      duration: 0.7,
    },
  },
};

// Loader Animation
export const loaderAnimation = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
    transition: {
      duration: 0.6, // Increased duration for a smoother load
      ease: "easeOut",
    },
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
    transition: {
      duration: 0.4, // Matched timing for consistency
      ease: "easeIn",
    },
  },
};

// Fade-In Up Animation
export const fadeInUpAnimation = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6, // Faster for snappy feedback
      ease: [0.42, 0, 0.58, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4, // Shorter exit for responsiveness
    },
  },
};

// Hover Animation
export const hoverAnimation = {
  whileHover: {
    scale: 1.1, // More subtle scaling
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  whileTap: {
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

// Stagger Animation
export const staggerAnimation = {
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Reduced stagger for snappier feel
    },
  },
};

// Image Animation
export const imageAnimation = {
  initial: {
    x: 40,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7, // Smoother image load
      ease: [0.42, 0, 0.58, 1],
      delay: 0.15,
    },
  },
  exit: {
    x: 40,
    opacity: 0,
    transition: {
      duration: 0.7,
      ease: [0.42, 0, 0.58, 1],
      delay: 0.15,
    },
  },
};

// Page Variants for Transition
export const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100%",
  },
  animate: {
    opacity: 1,
    x: "0%",
    transition: {
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1],
    },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};
