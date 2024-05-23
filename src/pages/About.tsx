import { useEffect } from "react";
import { updateThemeColor, ThemeColor } from "../utils/Theme";
import { NextSeo } from 'next-seo';

import {
  Partners,
  AboutBanner,
  Vision,
  Team,
  Contents,
} from "../components/about";
import useReadingProgress from "../hooks/useReadingProgress";

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
      <NextSeo
        title="About Us"
        description="We are a non-profit community focused on celebrating and Connecting Gen Z-s into the global tech scene – connecting dots, chasing dreams."
        openGraph={{
          url: 'https://www.codespaces.org/about',
          title: 'About Us',
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
