import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import useOnScreen from "../hooks/useOnScreen";

interface AnimateWordsProps {
  text: string;
  direction?: "up" | "down" | "left" | "right";
}

const AnimateWords: React.FC<AnimateWordsProps> = ({
  text,
  direction = "up",
}) => {
  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // Adjust the stagger delay as per your preference
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const words = text.split(" ");
  const animationControls = useAnimation();
  const ref = React.useRef<HTMLSpanElement>(null);
  const isIntersecting = useOnScreen(ref);

  useEffect(() => {
    if (isIntersecting) {
      animationControls.start("visible");
    } else {
      animationControls.start("hidden");
    }
  }, [animationControls, isIntersecting]);

  return (
    <motion.span
      variants={parentVariants}
      initial="hidden"
      animate={animationControls}
      ref={ref}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          style={{ display: "inline-block" }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimateWords;
