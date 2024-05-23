import { useEffect } from "react";
import { updateThemeColor, ThemeColor } from "../utils/Theme";
import { NextSeo } from 'next-seo';

import Hero from "../components/Hero-2";
import Community from "../components/Community";
import Opportunities from "../components/JobOpp/Opportunities";
import image from "../assets/pattern.png";

import useReadingProgress from "../hooks/useReadingProgress";
import { Helmet } from "react-helmet";

export const JobOpp = () => {
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
        <title>Job Opportunities</title>
        <meta name="description" content="Let’s connect you to your next big deal!" />
        <meta property="og:title" content="About Us" />
        <meta property="og:description" content="Let’s connect you to your next big deal!" />
        <meta property="og:url" content="https://www.codespaces.org/job" />
        <meta property="og:image" content="https://i.postimg.cc/XvRyXV10/Sitmap.png" />
      </Helmet>
      
      <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="fixed z-[100] w-full h-1 bg-primary top-0 max-lg:hidden"
      />
      <Hero
        title="JOB OPPORTUNITIES"
        h1="Let’s connect you to your next big deal!"
        text="We are a non-profit organization focused on celebrating and empowering Genz in technology across Africa."
        hero={image}
      />
      <Opportunities />
      <div className="bg-white px-[30px] sm:px-[100px] lg:px-[42px] xl:px-[102px]">
        <Community />
      </div>
    </>
  );
};
