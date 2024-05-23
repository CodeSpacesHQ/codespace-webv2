import { useEffect } from "react";
import { updateThemeColor, ThemeColor } from "../../utils/Theme";
import { Helmet } from 'react-helmet';


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
    const themeColor: ThemeColor = "#f9f9f9";

    updateThemeColor(themeColor);

    return () => {
      updateThemeColor("#f9f9f9");
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Code Space - One of Africa's Fastest Growing Community for Gen-Zs in Tech.</title>
        <meta name="description" content="We are a non-profit community focused on celebrating and Connecting Gen Z-s into the global tech scene – connecting dots, chasing dreams." />
        <meta property="og:title" content="Code Space - One of Africa's Fastest Growing Community for Gen-Zs in Tech." />
        <meta property="og:description" content="We are a non-profit community focused on celebrating and Connecting Gen Z-s into the global tech scene – connecting dots, chasing dreams." />
        <meta property="og:url" content="https://www.codespaces.org/" />
        <meta property="og:image" content="https://i.postimg.cc/XvRyXV10/Sitmap.png" />
      </Helmet>

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
