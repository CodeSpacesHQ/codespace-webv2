import React, { useEffect, useRef, useState } from "react";

const TestComponent = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [activeBox, setActiveBox] = useState(1);
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    setAnimationStarted(true);
    intervalRef.current = setInterval(() => {
      setActiveBox((prevActiveBox) => {
        if (prevActiveBox === 3) {
          return 1;
        } else {
          return prevActiveBox + 1;
        }
      });
    }, 6000); // Change the interval to 6000ms (6 seconds) for smooth transition

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="flex">
      <div
        className={`h-96 w-80 rounded-[28px] bg-black ${
          animationStarted && activeBox === 1 ? "animate-box" : ""
        } ${animationStarted && activeBox !== 1 ? "compressed" : ""}`}
      ></div>
      <div
        className={`h-96 w-80 rounded-[28px] bg-primary ${
          animationStarted && activeBox === 2 ? "animate-box" : ""
        } ${animationStarted && activeBox !== 2 ? "compressed" : ""}`}
      ></div>
      <div
        className={`h-96 w-80 rounded-[28px] bg-red-600 ${
          animationStarted && activeBox === 3 ? "animate-box" : ""
        } ${animationStarted && activeBox !== 3 ? "compressed" : ""}`}
      ></div>
    </div>
  );
};

export default TestComponent;
