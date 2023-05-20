import { useEffect } from "react";
import { updateThemeColor, ThemeColor } from "../../utils/Theme";

import useReadingProgress from "../../hooks/useReadingProgress";

import ContactBody from "../../components/Contact/Body";
import ContactHero from "../../components/Contact/Hero";
import { Partners } from "../../components/about";

const Contact = () => {
  const completion = useReadingProgress();
  useEffect(() => {
    const themeColor: ThemeColor = "#ffffff"; // Set the theme color type explicitly

    updateThemeColor(themeColor); // Set the theme color for this specific page

    return () => {
      updateThemeColor("#f9f9f9"); // Set the default theme color when leaving this page
    };
  }, []);
  return (
    <div className="max-w-[1520px] mx-auto">
      <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="fixed z-[100] w-full h-1 bg-primary top-0 max-lg:hidden"
      />
      <ContactHero />
      <ContactBody />
      <Partners />
    </div>
  );
};

export default Contact;
