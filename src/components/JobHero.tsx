import arrow from "../assets/Arrow 3.svg";
import pattern from "../assets/Frame 48.svg";
import art from "../assets/art.png";

const JobHero = () => {
  return (
    <div className="relative w-full bg-[url('../assets/pattern.png')] bg-no-repeat bg-center bg-cover h-screen overflow-hidden">
      <div className="absolute wideScreen:right-0 -right-36  xl:-right-9 sm:top-[156px] max-md:bottom-[134px] max-smallest:bottom-[94px] max-sm:-right-9">
        <img src={arrow} alt="shapes" className="h-24 sm:h-full" />
      </div>
      <div className="absolute -right-[17px] -bottom-8 max-smallest:-bottom-16 sm:bottom-[9px]">
        <img src={pattern} alt="shapes" className="h-[143px]" />
      </div>
      <div className="w-full h-full">
        <div className="xl:ps-[104px] pt-[236px] max-md:pt-[189px] max-xl:px-[65px] pb-[120px] flex justify-between items-center max-md:items-end wideScreen:pe-[280px] xl:pe-[175px] max-md:px-7 max-md:flex-col">
          <div className="xl:me-44 me-16 max-md:me-0">
            <p className="font-gelion text-[20px]/6 text-primary font-normal tracking-[0.08em] mb-2 max-md:text-[20px]/6 ps-[2px]">
              JOB OPPORTUNITIES
            </p>
            <h1 className="font-gelion text-[55px]/[66px] max-md:text-[32px]/10 text-dark-blue tracking-[-0.02em] font-semibold mb-[26px]">
              Empowering the Next Generation of Tech Innovators
            </h1>
            <p>
              We are a non-profit organization focused on celebrating and
              empowering Genz in technology across Africa.{" "}
            </p>
          </div>
          <div className="relative md:-bottom-2 bottom-4 right-5 w-24 h-24 md:w-40 md:h-40 max-md:me-[34px] max-md:mt-8">
            <div className="border-2 w-24 h-24 md:w-32 md:h-32 border-primary border-dashed rounded-full animate-spin-slow"></div>
            <div className="absolute top-[8px] left-[8px] bg-primary rounded-full mx-auto">
              <img className="w-20 md:w-28 h-20 md:h-28" src={art} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobHero;
