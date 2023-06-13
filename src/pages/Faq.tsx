import { useEffect } from "react";
import { updateThemeColor, ThemeColor } from "../utils/Theme";

import useReadingProgress from "../hooks/useReadingProgress";

import Body from "../components/Faq/Body";
import Community from "../components/Community";
export const Faq = () => {
  const completion = useReadingProgress();
  useEffect(() => {
    const themeColor: ThemeColor = "#f8f8fd"; // Set the theme color type explicitly

    updateThemeColor(themeColor); // Set the theme color for this specific page

    return () => {
      updateThemeColor("#f9f9f9"); // Set the default theme color when leaving this page
    };
  }, []);
  return (
    <>
      <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="fixed z-[100] w-full h-1 bg-primary top-0 max-lg:hidden"
      />
      <div className="absolute top-0 left-0 w-full bg-[#f7f7fd] bg-cover h-20 sm:h-28"></div>
      <Body />
      <div className="bg-white px-[30px] sm:px-[100px] lg:px-[42px] xl:px-[102px]">
        <Community />
      </div>
    </>
  );
};
