import { useEffect } from "react";
import { updateThemeColor, ThemeColor } from "../../utils/Theme";

import Hero from "../../components/Home/Hero";
import Donations from "../../components/Home/Donations";
import Services from "../../components/Home/Services";
import Quotes from "../../components/Home/Quotes";
import useReadingProgress from "../../hooks/useReadingProgress";
import Press from "../../components/Home/Press";
import { Partners } from "../../components/about";

export const Home = () => {
  const completion = useReadingProgress();
  useEffect(() => {
    const themeColor: ThemeColor = "#ffffff"; // Set the theme color type explicitly

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
      <Hero />
      <Donations />
      <Services />
      <Quotes />
      <Press />
      <Partners />
    </>
  );
};
