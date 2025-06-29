import { easeInOut } from "motion";

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      // ease: [0.25, 0.46, 0.45, 0.94],
      ease: easeInOut,
    },
  },
};

export const floatVariants = {
  float: {
    y: [-15, 15, -15],
    x: [-5, 5, -5],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: easeInOut,
    },
  },
};
