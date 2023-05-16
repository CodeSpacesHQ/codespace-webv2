import useOnScreen from "../hooks/useOnScreen";
import { useRef } from "react";

export const transition = { type: "spring", duration: 0.8 };

export const slideAnimation = (direction: string) => {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);
  return {
    initial: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
      opacity: 0,
      transition: { duration: 0.8, delay: 0.5 },
    },
    animate: {
      x: isVisible
        ? 0
        : direction === "left"
        ? "-100%"
        : direction === "right"
        ? "100%"
        : 0,
      y: isVisible
        ? 0
        : direction === "up"
        ? "100%"
        : direction === "down"
        ? "-100%"
        : 0,
      opacity: isVisible ? 1 : 0,
      transition: { duration: 0.8, delay: 0.5 },
    },
    exit: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
      opacity: 0,
      transition: { ...transition, delay: 0 },
    },
    ref,
  };
};

export const fadeAnimation = {
  initial: {
    opacity: 0,
    transition: { ...transition, delay: 0.5 },
  },
  animate: {
    opacity: 1,
    transition: { ...transition, delay: 0 },
  },
  exit: {
    opacity: 0,
    transition: { ...transition, delay: 0 },
  },
};

export const headTextAnimation = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 5,
    stiffness: 40,
    restDelta: 0.001,
    duration: 0.3,
  },
};

export const headContentAnimation = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 7,
    stiffness: 30,
    restDelta: 0.001,
    duration: 0.6,
    delay: 0.2,
    delayChildren: 0.2,
  },
};

export const headContainerAnimation = {
  initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
  animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
  exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
};
