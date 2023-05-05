import Header from "./Header-B";
import arrow from "../assets/Arrow 3.svg";
import pattern from "../assets/Frame 48.svg";
import art from "../assets/art1.png";

const JobHero = () => {
  return (
    <div className="relative w-full bg-[url('assets/pattern.png')] bg-no-repeat bg-center bg-cover h-screen overflow-hidden">
      <div className="absolute right-0 top-44" id="arrow">
        <img src={arrow} alt="shapes" className="h-24 sm:h-full" />
      </div>
      <div className="w-full h-full">
        <Header />
        <div className=" ps-[104px] pt-[236px] pb-[120px] flex justify-between wideScreen:pe-[269px] pe-[175px]">
          <div className="me-40">
            <p className="font-gelion text-[20px]/6 text-primary font-normal tracking-[0.08em] mb-2">
              JOB OPPORTUNITIES
            </p>
            <h1 className="font-gelion text-[55px]/[66px] text-dark-blue tracking-[-0.02em] font-semibold mb-[26px]">
              Empowering the Next Generation of Tech Innovators
            </h1>
            <p>
              We are a non-profit organization focused on celebrating and
              empowering Genz in technology across Africa.{" "}
            </p>
          </div>
          <img src={art} className=" h-[146px]" alt="art" />
        </div>
      </div>
    </div>
  );
};

export default JobHero;
