import { useEffect, useRef } from "react";
import { useAnimation } from "framer-motion";
import useOnScreen from "./useOnScreen"; // Custom hook to check if element is in view

const useSlideIn = () => {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8 },
      });
    } else {
      controls.start({
        opacity: 0,
        x: "-100%",
        transition: { duration: 0.8 },
      });
    }
  }, [isVisible, controls]);

  return { controls, ref };
};

export default useSlideIn;
