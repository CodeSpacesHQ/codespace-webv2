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
import { Helmet } from "react-helmet";

export const About = () => {
  const completion = useReadingProgress();
  useEffect(() => {
    const themeColor: ThemeColor = "#ffffff";

    updateThemeColor(themeColor);

    return () => {
      updateThemeColor("#f9f9f9");
    };
  }, []);

  return (
    <section>
      <Helmet>
        <title>About Us</title>
        <meta name="description" content="We are a non-profit community focused on celebrating and Connecting Gen Z-s into the global tech scene – connecting dots, chasing dreams." />
        <meta property="og:title" content="About Us" />
        <meta property="og:description" content="We are a non-profit community focused on celebrating and Connecting Gen Z-s into the global tech scene – connecting dots, chasing dreams." />
        <meta property="og:url" content="https://www.codespaces.org/about" />
        <meta property="og:image" content="https://i.postimg.cc/XvRyXV10/Sitmap.png" />
      </Helmet>

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
