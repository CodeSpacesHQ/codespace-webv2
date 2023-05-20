import { useEffect } from "react";
import { updateThemeColor, ThemeColor } from "../../utils/Theme";

import useReadingProgress from "../../hooks/useReadingProgress";

import Community from "../../components/Community";
import CommunityBody from "../../components/community/Body";
import CommunityHero from "../../components/community/Hero";

const CommunityPage = () => {
  const completion = useReadingProgress();
  useEffect(() => {
    const themeColor: ThemeColor = "#f7f7fd"; // Set the theme color type explicitly

    updateThemeColor(themeColor); // Set the theme color for this specific page

    return () => {
      updateThemeColor("#f9f9f9"); // Set the default theme color when leaving this page
    };
  }, []);
  return (
    <div>
      <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="fixed z-[100] w-full h-1 bg-primary top-0 max-lg:hidden"
      />
      <CommunityHero />
      <CommunityBody />
      <Community />
    </div>
  );
};

export default CommunityPage;
