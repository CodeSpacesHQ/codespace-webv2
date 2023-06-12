import Hero from "../Hero-2";
import image from "../../assets/pattern.png";

import useReadingProgress from "../../hooks/useReadingProgress";

export const PerksHero = () => {
  const completion = useReadingProgress();
  return (
    <>
      <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="fixed z-[100] w-full h-1 bg-primary top-0 max-lg:hidden"
      />
      <Hero
        title="Perks and Benefits"
        h1="Jump on a shopping spree and get amazing discounts from our partners today!"
        hero={image}
      />
    </>
  );
};
