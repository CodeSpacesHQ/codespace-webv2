import Hero from "../components/Hero-2";
import Community from "../components/Community";
import Opportunities from "../components/JobOpp/Opportunities";
import image from "../assets/pattern.png";

import useReadingProgress from "../hooks/useReadingProgress";

export const JobOpp = () => {
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
        text="We are a non-profit organization focused on celebrating and
        empowering Genz in technology across Africa."
        hero={image}
      />
      <Opportunities />
      <div className="bg-white px-[30px] sm:px-[100px] lg:px-[42px] xl:px-[102px]">
        <Community />
      </div>
    </>
  );
};
