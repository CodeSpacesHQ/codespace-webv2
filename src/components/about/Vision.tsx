import { icon1, icon2 } from "../../assets/icon";
import { motion } from "framer-motion";
import { slideAnimation } from "../../config/motion";

import AnimateWords from "../../config/textAnimation";

export const Vision = () => {
  return (
    <section className=" bg-[#FFFFFF] px-7 xl:px-[102px] sm:px-[64px] pb-9 pt-10 sm:pt-[94px] sm:pb-28">
      <div className="flex flex-col max-lg:flex-wrap justify-center md:flex-row gap-x-12 max-w-[1500px] mx-auto px-0 [@media(min-width:1600px)]:px-[54px] [@media(min-width:1670px)]:px-[84px]">
        <motion.div {...slideAnimation("left")} className="w-full max-lg:mb-6">
          <p className="font-gelion text-[20px]/6 text-primary font-normal tracking-[0.08em] mb-2 max-sm:text-[16px]/[19px] ps-[2px]">
            MISSION &VISION.
          </p>
          <h1 className="font-gelion max-xl:text-[45px] text-[55px]/[66px] max-md:text-[32px]/10 text-dark-blue tracking-[-0.02em] font-semibold mb-[26px]">
            Why we{" "}
            <span className="underline underline-offset-[11px] decoration-[#5D5CD6] decoration-[5px]">
              exist
            </span>
          </h1>
        </motion.div>
        <div className="flex flex-col items-center w-full sm:max-lg:w-[45%] mb-14 md:mb-0 lg:mt-8">
          <div className="mb-6 md:mb-9 w-[60px] h-[50px] md:w-[80px] md:h-[80px] object-cover">
            <img
              src={icon1}
              alt="Our Vision"
              className="object-cover w-full h-full animate-float"
            />
          </div>

          <div>
            <h2 className="text-[#000000] text-center font-poppins text-2xl sm:text-[32]/[64px] mb-[20px] tracking-[-1px] font-medium">
              <AnimateWords text="OUR VISION" />
            </h2>
          </div>

          <div>
            <p className=" font-dm-sans text-center font-normal text-[18px]/6 lg:text-[24px]/8 leading-[23px] sm:leading-[31px] text-[#9F9A9A]">
              To be at the centre of Africa’s tech ecosystem by inspiring the
              growth of tech talents.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center w-full sm:max-lg:w-[45%] lg:mt-8">
          <div className=" mb-6 md:mb-9 w-[60px] h-[50px] md:w-[80px] md:h-[80px] object-cover">
            <img
              src={icon2}
              alt="What we do"
              className="object-cover w-full h-full animate-float"
            />
          </div>

          <div>
            <h2 className="text-[#000000] text-center font-poppins text-2xl sm:text-[32]/[64px] mb-[20px] tracking-[-1px] font-medium">
              <AnimateWords text="Our Mission" />
            </h2>
          </div>

          <div>
            <p className=" font-dm-sans text-center font-normal text-[18px]/6 lg:text-[24px]/8 leading-[23px] sm:leading-[31px] text-[#9F9A9A]">
              To promote global opportunities and resources for young tech
              talents across Africa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
