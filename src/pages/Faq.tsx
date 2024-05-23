import { useEffect } from "react";
import { updateThemeColor, ThemeColor } from "../utils/Theme";
import { NextSeo } from 'next-seo';

import useReadingProgress from "../hooks/useReadingProgress";

import Body from "../components/Faq/Body";
import Community from "../components/Community";

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
      <NextSeo
        title="FAQ"
        description="We answered questions so you don't have to ask them."
        openGraph={{
          url: 'https://www.codespaces.org/faq',
          title: 'FAQ - Codespaces',
          description: 'We answered questions so you dont have to ask them.',
          images: [
            {
              url: 'https://i.postimg.cc/XvRyXV10/Sitmap.png',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
          ],
          site_name: 'Code Space',
        }}
      />
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
