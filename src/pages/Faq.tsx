import { useEffect } from "react";
import { updateThemeColor, ThemeColor } from "../utils/Theme";
import { NextSeo } from 'next-seo';

import useReadingProgress from "../hooks/useReadingProgress";

import Body from "../components/Faq/Body";
import Community from "../components/Community";
import { Helmet } from "react-helmet";

export const Faq = () => {
  const completion = useReadingProgress();
  useEffect(() => {
    const themeColor: ThemeColor = "#f8f8fd";

    updateThemeColor(themeColor);

    return () => {
      updateThemeColor("#f9f9f9");
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>FAQ</title>
        <meta name="description" content="We answered questions so you don't have to ask them." />
        <meta property="og:title" content="FAQ" />
        <meta property="og:description" content="We answered questions so you don't have to ask them." />
        <meta property="og:url" content="https://www.codespaces.org/faq" />
        <meta property="og:image" content="https://i.postimg.cc/XvRyXV10/Sitmap.png" />
      </Helmet>
      
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
