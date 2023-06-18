import { useEffect } from "react";
import { updateThemeColor, ThemeColor } from "../../utils/Theme";

import useReadingProgress from "../../hooks/useReadingProgress";

import Community from "../../components/Community";
import CommunityBody from "../../components/community/Body";
import CommunityHero from "../../components/community/Hero";

const CommunityPage = () => {
  const completion = useReadingProgress();
  useEffect(() => {
    const themeColor: ThemeColor = "#f8f8fe"; // Set the theme color type explicitly

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
      <div className="bg-white px-[30px] sm:px-[100px] lg:px-[42px] xl:px-[102px]">
        <Community />
      </div>
    </div>
  );
};

export default CommunityPage;
