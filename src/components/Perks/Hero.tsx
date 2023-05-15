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
        title="JOB OPPORTUNITIES"
        h1="Empowering the Next"
        h1Cont="Generation of Tech Innovators"
        text="We're working with top-notch companies to provide all Code Space members with great discounts and cashback that you wouldn't be able to take advantage of otherwise."
        hero={image}
      />
    </>
  );
};
