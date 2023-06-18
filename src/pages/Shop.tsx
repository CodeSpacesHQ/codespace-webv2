import { useEffect } from "react";
import { updateThemeColor, ThemeColor } from "../utils/Theme";

import useReadingProgress from "../hooks/useReadingProgress";

import Hero from "../components/Hero-2";
import Community from "../components/Community";
import Body from "../components/Shop/Body";
import image from "../assets/pattern2.png";

export const Shop = () => {
  const isPresent = true;
  const completion = useReadingProgress();

  useEffect(() => {
    const themeColor: ThemeColor = "#fafafa"; // Set the theme color type explicitly

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
      <Hero
        title="STORE"
        h1="Choose your Spacer Style and Swag with one Click!"
        text="Ignite your style. Embrace your tech brilliance. Be an CodeSpacers!"
        hero={image}
        star={isPresent}
      />
      <Body />
      <div className="bg-white px-[30px] sm:px-[100px] lg:px-[42px] xl:px-[102px]">
        <Community />
      </div>
    </>
  );
};
