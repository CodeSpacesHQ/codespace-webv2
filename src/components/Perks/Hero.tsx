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
        text="We're working with top-notch companies to provide all Code Space members with great discounts and cashback that you wouldn't be able to take advantage of otherwise."
        hero={image}
      />
    </>
  );
};
