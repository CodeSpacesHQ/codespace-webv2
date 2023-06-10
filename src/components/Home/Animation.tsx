import { useState } from "react";
import { doubleFirst, doubleSecond, doubleThrid } from "../../assets/icon";

const AnimatedBoxes: React.FC = () => {
  const [activeBox, setActiveBox] = useState<number>(1);

  const handleBoxHover = (boxNumber: number) => {
    setActiveBox(boxNumber);
  };

  return (
    <div className="flex gap-x-[14px] cursor-cell gap-y-2 max-md:px-7 relative sm:absolute max-md:-bottom-12 max-md:mt-0 sm:-right-[40px] sm:h-[524px] lg:h-[454px] max-md:flex-col xl:h-[574px] xl:-right-[102px] wideScreen:-right-[52px] xl:top-[199px] max-xl:mt-14 items-center">
      <div
        className={`h-full w-full sm:w-[400px] rounded-[20px] sm:rounded-[28px] bg-[#100F3D] overflow-hidden ${
          activeBox === 1 ? "animate-box" : "compressed"
        }`}
        onMouseEnter={() => handleBoxHover(1)}
      >
        <img
          src={doubleFirst}
          alt="pattern"
          className="w-[400px] sm:w-full sm:h-full"
        />
      </div>
      <div
        className={`h-full w-full sm:w-[400px] rounded-[20px] sm:rounded-[28px] bg-[#C4C4C4] overflow-hidden ${
          activeBox === 2 ? "animate-box" : "compressed"
        }`}
        onMouseEnter={() => handleBoxHover(2)}
      >
        <img
          src={doubleSecond}
          alt="pattern"
          className="w-[400px] sm:w-full sm:h-full"
        />
      </div>
      <div
        className={`h-full w-full sm:w-[400px] rounded-[20px] sm:rounded-[28px] bg-[#0DBA67] overflow-hidden ${
          activeBox === 3 ? "animate-box" : "compressed"
        }`}
        onMouseEnter={() => handleBoxHover(3)}
      >
        <img
          src={doubleThrid}
          alt="pattern"
          className="w-[400px] sm:w-full sm:h-full"
        />
      </div>
    </div>
  );
};

export default AnimatedBoxes;
