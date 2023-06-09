import { arrow, box } from "../../assets/images";
import art from "../../assets/art.png";
import useSlideIn from "../../hooks/useSlideIn";
import { motion } from "framer-motion";
import { slideAnimation } from "../../config/motion";

export const AboutBanner = () => {
  const { controls, ref } = useSlideIn();
  return (
    <>
      <div className="absolute top-0 left-0 w-full bg-[#ffffff] h-20 sm:h-28"></div>
      <div className="relative w-full h-full overflow-hidden mx-auto bg-[url('/assets/Elements2.png')] bg-no-repeat bg-left bg-cover">
        <div className="absolute right-0 xmd:top-[10rem] xl:top-[8rem] max-lg:bottom-28 max-sm:-right-[10px]">
          <img src={arrow} alt="arrow" className="xl:w-full max-xl:h-[91px]" />
        </div>
        <div className="absolute bottom-0 right-0">
          <img src={box} alt="" />
        </div>
        <div className="xl:ps-[102px] pt-[136px] max-w-[1500px] mx-auto max-xl:px-[65px] pb-[129px] max-md:pb-[42px] flex justify-between items-center max-lg:items-end wideScreen:pe-[280px] xl:pe-[175px] max-md:px-7 max-lg:flex-col sm:px-16 lg:px-[65px]">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: "-100%" }}
            animate={controls}
            className="max-lg:me-16 max-sm:me-0"
          >
            <p className="font-gelion text-[20px]/6 text-primary font-normal tracking-[0.08em] mb-2 max-sm:text-[16px]/[19px] ps-[2px]">
              KNOW ABOUT US
            </p>
            <h1 className="font-gelion max-lg:text-[45px] text-[55px]/[66px] max-md:text-[32px]/10 text-dark-blue tracking-[-0.02em] font-semibold mb-[26px]">
              Connecting African Techies to <br className="max-lg:hidden" />{" "}
              Global Opportunities
            </h1>
          </motion.div>
          <motion.div
            {...slideAnimation("up")}
            className="relative md:-bottom-2 bottom-4 right-5 max-md:right-8 w-24 h-24 md:w-40 md:h-40 max-md:me-[34px] max-md:mt-20 max-sm:me-[75px] xl:me-8"
          >
            <div className="w-24 h-24 border-2 border-dashed rounded-full md:w-32 md:h-32 border-primary animate-spin-slow"></div>
            <div className="absolute top-[8px] left-[8px] bg-primary rounded-full mx-auto">
              <img className="w-20 h-20 md:w-28 md:h-28" src={art} alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
