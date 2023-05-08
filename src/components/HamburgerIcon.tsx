import React from "react";

interface InputProps {
  isOpen: boolean;
}
const HamburgerIcon: React.FC<InputProps> = ({ isOpen }) => {
  const listStyles =
    "h-[3px] bg-primary duration-300 transform transition-transform";

  return (
    <div className="relative flex flex-col items-end">
      <div
        id="left"
        className={`${listStyles} w-7 ${isOpen && "rotate-45"}`}
      ></div>
      <div
        id="hide"
        className={`${listStyles} w-[21px] mt-[6px] ${isOpen && "hidden"}`}
      ></div>
      <div
        id="right"
        className={`${listStyles} ${
          isOpen ? "-rotate-45 absolute top-0 w-7" : "w-[14px] mt-[6px]"
        }`}
      ></div>
    </div>
  );
};

export default HamburgerIcon;
