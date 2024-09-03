import { useEffect } from "react";
import { updateThemeColor, ThemeColor } from "../utils/Theme";

import {
  Hero,
  Note,
  Apply,
  Contributors
} from "../components/ambassadors";
import useReadingProgress from "../hooks/useReadingProgress";
import { Helmet } from "react-helmet";
import { Vision } from "../components/about";
// import Note from "../components/ambassadors/note";

export const Ambassadors = () => {
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
        <title>Ambassadors</title>
        <meta name="description" content="We are a non-profit community focused on celebrating and Connecting Gen Z-s into the global tech scene – connecting dots, chasing dreams." />
        <meta property="og:title" content="Ambassadors" />
        <meta property="og:description" content="We are a non-profit community focused on celebrating and Connecting Gen Z-s into the global tech scene – connecting dots, chasing dreams." />
        <meta property="og:url" content="https://www.codespaces.org/ambassadors" />
        <meta property="og:image" content="https://i.postimg.cc/XvRyXV10/Sitmap.png" />
      </Helmet>

      <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="fixed z-[100] w-full h-1 bg-primary top-0 max-lg:hidden"
      />
      <div>
        <Hero />
      </div>
      <div>
        <Note />
      </div>
      <div>
        <Vision />
      </div>
      <div>
        <Apply />
      </div>
      <div>
        <Contributors />
      </div>

      
    </section>
  );
};
