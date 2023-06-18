import { useEffect } from "react";
import { updateThemeColor, ThemeColor } from "../utils/Theme";

import {
  Partners,
  AboutBanner,
  Vision,
  Team,
  Contents,
} from "../components/about";
import useReadingProgress from "../hooks/useReadingProgress";

export const About = () => {
  const completion = useReadingProgress();
  useEffect(() => {
    const themeColor: ThemeColor = "#ffffff"; // Set the theme color type explicitly

    updateThemeColor(themeColor); // Set the theme color for this specific page

    return () => {
      updateThemeColor("#f9f9f9"); // Set the default theme color when leaving this page
    };
  }, []);
  return (
    <section>
      <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="fixed z-[100] w-full h-1 bg-primary top-0 max-lg:hidden"
      />
      <div>
        <AboutBanner />
      </div>

      <div>
        <Contents />
      </div>

      <div>
        <Vision />
      </div>

      <div>
        <Team />
      </div>

      <div>
        <Partners />
      </div>
    </section>
  );
};
