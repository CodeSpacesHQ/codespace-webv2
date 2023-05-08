import JobHero from "../components/JobHero";
import Community from "../components/Community";

export const JobOpp = () => {
  return (
    <>
      <JobHero />
      <div className="bg-white px-[30px] sm:px-[100px] lg:px-[42px] xl:px-[102px]">
        <Community />
      </div>
    </>
  );
};
