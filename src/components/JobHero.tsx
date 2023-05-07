import Header from "./Header-B";
import arrow from "../assets/Arrow 3.svg";
import pattern from "../assets/Frame 48.svg";
import art from "../assets/art1.png";

const JobHero = () => {
  return (
    <div className="relative w-full bg-[url('assets/pattern.png')] bg-no-repeat bg-center bg-cover h-screen overflow-hidden">
      <div className="absolute wideScreen:right-0 -right-36  xl:-right-9 sm:top-[156px] max-md:bottom-[134px] max-smallest:bottom-[94px] max-sm:-right-9">
        <img src={arrow} alt="shapes" className="h-24 sm:h-full" />
      </div>
      <div className="absolute -right-[17px] -bottom-8 max-smallest:-bottom-16 sm:bottom-[9px]">
        <img src={pattern} alt="shapes" className="h-[143px]" />
      </div>
      <div className="w-full h-full">
        <Header />
        <div className="xl:ps-[104px] pt-[236px] max-md:pt-[189px] max-xl:px-[65px] pb-[120px] flex justify-between items-center max-md:items-end wideScreen:pe-[269px] xl:pe-[175px] max-md:px-7 max-md:flex-col">
          <div className="xl:me-40 me-12 max-md:me-0">
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
          <img
            src={art}
            className=" h-[146px] max-md:h-[103px] max-md:me-[34px] max-md:mt-8"
            alt="art"
          />
        </div>
      </div>
    </div>
  );
};

export default JobHero;
