import JobHero from "../components/JobOpp/JobHero";
import Community from "../components/Community";
import Opportunities from "../components/JobOpp/Opportunities";

import useReadingProgress from "../hooks/useReadingProgress";

export const JobOpp = () => {
  const completion = useReadingProgress();
  return (
    <>
      <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="fixed z-[100] w-full h-1 bg-primary top-0 max-lg:hidden"
      />
      <JobHero />
      <Opportunities />
      <div className="bg-white px-[30px] sm:px-[100px] lg:px-[42px] xl:px-[102px]">
        <Community />
      </div>
    </>
  );
};
