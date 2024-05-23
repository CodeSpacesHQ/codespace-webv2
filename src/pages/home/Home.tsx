import { useEffect } from "react";
import { updateThemeColor, ThemeColor } from "../../utils/Theme";
import { NextSeo } from 'next-seo';

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
      <NextSeo
        title="Code Space - One of Africa's Fastest Growing Community for Gen-Zs in Tech."
        description="We are a non-profit community focused on celebrating and Connecting Gen Z-s into the global tech scene – connecting dots, chasing dreams."
        openGraph={{
          url: 'https://www.codespaces.org/',
          title: 'Code Space - One of Africas Fastest Growing Community for Gen - Zs in Tech.',
          description: 'We are a non-profit community focused on celebrating and Connecting Gen Z-s into the global tech scene – connecting dots, chasing dreams.',
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
      <Hero />
      <Donations />
      <Services />
      <Quotes />
      <Press />
      <Partners />
    </>
  );
};
