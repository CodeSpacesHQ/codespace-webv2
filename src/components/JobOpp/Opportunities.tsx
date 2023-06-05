import React, { useState } from "react";
const typeJobs = ["All", "Remote", "Hybrid", "Onsite jobs"];

import textAnimation from "../../config/textAnimation";

const Opportunities: React.FC = () => {
  const [active, setActive] = useState<string>("All");

  const setActiveElement = (item: string): void => {
    setActive(item);
  };
  const textColor = (item: string) => {
    if (item === "Onsite jobs" && item !== active) {
      return "text-[#A6A6A6]";
    } else if (item === active) {
      return "text-[#5B5AD1]";
    } else {
      return "text-black";
    }
  };

  const animateWords = textAnimation("up");
  return (
    <section className="relative h-screen bg-white px-[29px] sm:px-[64px] lg:px-[69.83px] xl:px-[102px] max-w-[1500px] mx-auto pt-20">
      <div className="flex sm:gap-8 sm:justify-start justify-between border-b-[#C2C2F0] border-b-[0.2px] w-full">
        {typeJobs.map((item, index) => {
          return (
            <p
              key={index}
              onClick={() => setActiveElement(item)}
              className={`font-gelion text-[16px]/[19px] tracking-[-0.02em] cursor-pointer pb-4 ${textColor(
                item
              )} ${active === item ? "border-b-[#5B5AD1] border-b-4" : ""} ${
                item === "All" ? "w-10" : ""
              }`}
            >
              {item}
            </p>
          );
        })}
      </div>
      <div className="flex justify-center w-full mt-[164px] sm:mt-64">
        <h2 className="font-gelion text-[#868687] font-semibold max-sm:font-medium max-sm:text-[20px]/6 max-xl:text-[40px] text-[55px]/[66px] tracking-[-0.02em]">
          {animateWords("Jobs list coming soon... 🚀🚀")}
        </h2>
      </div>
    </section>
  );
};

export default Opportunities;
