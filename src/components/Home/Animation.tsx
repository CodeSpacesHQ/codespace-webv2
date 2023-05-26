import { useEffect, useRef, useState } from "react";
import { doubleFirst, doubleSecond, doubleThrid } from "../../assets/icon";

const AnimatedBoxes = () => {
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
    }, 2000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="flex gap-x-[14px] absolute -right-[100px] h-[524px] xl:h-[574px] max-md:hidden lg:max-xl:-right-[360px] xl:-right-[160px] lg:top-[199px] max-lg:mt-14 items-center">
      <div
        className={`h-full w-[400px] rounded-[28px] bg-[#100F3D] overflow-hidden ${
          animationStarted && activeBox === 1 ? "animate-box" : ""
        } ${animationStarted && activeBox !== 1 ? "compressed" : ""}`}
      >
        <img src={doubleFirst} alt="pattern" className="w-auto h-full" />
      </div>
      <div
        className={`h-full w-[120px] rounded-[28px] bg-[#C4C4C4] overflow-hidden ${
          animationStarted && activeBox === 2 ? "animate-box" : ""
        } ${animationStarted && activeBox !== 2 ? "compressed" : ""}`}
      >
        <img src={doubleSecond} alt="pattern" className="w-auto h-full" />
      </div>
      <div
        className={`h-full w-[120px] rounded-[28px] bg-[#0DBA67] overflow-hidden ${
          animationStarted && activeBox === 3 ? "animate-box" : ""
        } ${animationStarted && activeBox !== 3 ? "compressed" : ""}`}
      >
        <img src={doubleThrid} alt="pattern" className="w-auto h-full" />
      </div>
    </div>
  );
};

export default AnimatedBoxes;
