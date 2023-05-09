import React, { useState } from "react";
const typeJobs = ["All", "Remote", "Hybrid", "Onsite jobs"];

const Opportunities: React.FC = () => {
  const [active, setActive] = useState<string>("All");

  const setActiveElement = (item: string): void => {
    setActive(item);
  };
  const textColor = (item: string) => {
    if (item === "Onsite jobs" && item !== active) {
      return "text-[#A6A6A6]";
    } else if (item === active) {
      return "text-[#5D5CD6]";
    } else {
      return "text-black";
    }
  };

  return (
    <section className="relative h-screen bg-white px-[29px] sm:px-10 lg:px-[69.83px] xl:px-[102px] pt-20">
      <div className="flex sm:gap-8 sm:justify-start justify-between border-b-[#C2C2F0] border-b-[0.2px] w-full">
        {typeJobs.map((item, index) => {
          return (
            <p
              key={index}
              onClick={() => setActiveElement(item)}
              className={`font-gelion text-[16px]/[19px] tracking-[-0.02em] cursor-pointer pb-4 ${textColor(
                item
              )} ${active === item ? "border-b-[#5D5CD6] border-b-4" : ""} ${
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
          Jobs list coming soon... 🚀🚀
        </h2>
      </div>
    </section>
  );
};

export default Opportunities;
