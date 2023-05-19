import useReadingProgress from "../../hooks/useReadingProgress";

import Community from "../../components/Community";
import { PerksHero } from "../../components/Perks/Hero";
import Offers from "../../components/Perks/Offers";

const Perks = () => {
  const completion = useReadingProgress();
  return (
    <div>
      <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="fixed z-[100] w-full h-1 bg-primary top-0 max-lg:hidden"
      />
      <PerksHero />
      <Offers />
      <div className="bg-white px-[30px] sm:px-[100px] lg:px-[42px] xl:px-[102px]">
        <Community />
      </div>
    </div>
  );
};

export default Perks;
