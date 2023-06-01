import { useState } from "react";
import { doubleFirst, doubleSecond, doubleThrid } from "../../assets/icon";

const AnimatedBoxes: React.FC = () => {
  const [activeBox, setActiveBox] = useState<number>(1);

  const handleBoxHover = (boxNumber: number) => {
    setActiveBox(boxNumber);
  };

  return (
    <div className="flex gap-x-[14px] cursor-cell absolute -right-[100px] h-[524px] xl:h-[574px] max-md:hidden lg:max-xl:-right-[210px] xl:-right-[110px] lg:top-[199px] max-xl:mt-14 items-center">
      <div
        className={`h-full w-[400px] rounded-[28px] bg-[#100F3D] overflow-hidden ${
          activeBox === 1 ? "animate-box" : "compressed"
        }`}
        onMouseEnter={() => handleBoxHover(1)}
      >
        <img src={doubleFirst} alt="pattern" className="w-auto h-full" />
      </div>
      <div
        className={`h-full w-[120px] rounded-[28px] bg-[#C4C4C4] overflow-hidden ${
          activeBox === 2 ? "animate-box" : "compressed"
        }`}
        onMouseEnter={() => handleBoxHover(2)}
      >
        <img src={doubleSecond} alt="pattern" className="w-auto h-full" />
      </div>
      <div
        className={`h-full w-[120px] rounded-[28px] bg-[#0DBA67] overflow-hidden ${
          activeBox === 3 ? "animate-box" : "compressed"
        }`}
        onMouseEnter={() => handleBoxHover(3)}
      >
        <img src={doubleThrid} alt="pattern" className="w-auto h-full" />
      </div>
    </div>
  );
};

export default AnimatedBoxes;
