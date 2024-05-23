import { useEffect } from "react";
import { ThemeColor, updateThemeColor } from "../utils/Theme";
import { NextSeo } from 'next-seo';

import useReadingProgress from "../hooks/useReadingProgress";

import Hero from "../components/Hero-2";
import Community from "../components/Community";
import Body from "../components/Donate/Body";
import image from "../assets/pattern.png";

export const Donate = () => {
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
      <NextSeo
        title="Donate"
        description="$1/day can make all the"
        openGraph={{
          url: 'https://www.codespaces.org/donate',
          title: 'Donate',
          description: '$1/day can make all the',
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
      <Hero
        title="Donate to our programs"
        h1="$1/day can make all the"
        h1Cont="difference"
        text="According to data gathered by the World Bank, 736 million Africans are living on less than $1.90 per day; the majority of people greatly affected are women and children. However, we can make a difference by providing teens with tech opportunities that can transform their lives."
        hero={image}
      />
      <Body />
      <div className="bg-white px-[30px] sm:px-[100px] lg:px-[42px] xl:px-[102px]">
        <Community />
      </div>
    </>
  );
};
