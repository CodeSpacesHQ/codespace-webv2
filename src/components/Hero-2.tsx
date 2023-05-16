import React from "react";
import useSlideIn from "../hooks/useSlideIn";
import { motion } from "framer-motion";
import { slideAnimation } from "../config/motion";

import arrow from "../assets/Arrow 3.svg";
import pattern from "../assets/Frame 48.svg";
import art from "../assets/art.png";
import starPattern from "../assets/Star 2.svg";

interface JobHeroProps {
  title: string;
  h1: string;
  h1Cont?: string;
  text: string;
  hero: string;
  star?: boolean;
}

const JobHero: React.FC<JobHeroProps> = ({
  title,
  h1,
  h1Cont,
  text,
  hero,
  star,
}) => {
  const { controls, ref } = useSlideIn();
  const backgroundImageStyle = {
    backgroundImage: `url(${hero})`,
  };

  return (
    <div
      className="relative w-full bg-cover bg-center overflow-hidden"
      style={backgroundImageStyle}
    >
      <div className="absolute right-0 xmd:top-[11rem] xl:top-[8rem] max-lg:bottom-28 max-sm:-right-[10px]">
        <img src={arrow} alt="arrow" className="xl:w-full max-xl:h-[91px]" />
      </div>
      <div className="absolute -right-[17px] max-lg:right-0 -bottom-12 max-smallest:-bottom-16 lg:bottom-14">
        <img src={pattern} alt="shapes" className="h-[143px]" />
      </div>
      <div
        className={`xl:ps-[104px] pt-[232px] max-md:pt-[189px] max-xl:px-[65px] pb-[129px] max-md:pb-[42px] flex justify-between items-center max-md:items-end wideScreen:pe-[280px] xl:pe-[175px] max-md:px-7 ${
          star ? "max-lg:flex-col max-lg:items-end" : "max-md:flex-col"
        }`}
      >
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: "-100%" }}
          animate={controls}
          className="max-xl:me-16 me-36 max-md:me-0"
        >
          <p className="font-gelion text-[20px]/6 text-primary font-normal tracking-[0.08em] mb-2 ps-[2px]">
            {title}
          </p>
          <h1 className="font-gelion text-[55px]/[66px] max-md:text-[30px]/10 text-dark-blue tracking-[-0.02em] font-semibold mb-[26px]">
            {h1}
            {h1Cont && <br className="max-lg:hidden max-sm:block" />}{" "}
            {h1Cont && h1Cont}
          </h1>
          <p className=" font-poppins text-[24px]/9 max-sm:text-[18px]/[27px] tracking-[-0.20000000298023224px] font-normal">
            {text}
          </p>
        </motion.div>
        <motion.div {...slideAnimation("up")}>
          {star ? (
            <div className="relative lg:bottom-2 bottom-4 right-9 max-lg:right-8 max-lg:me-[34px] max-lg:mt-20 max-sm:me-[75px] animate-float">
              <img
                src={starPattern}
                alt="shapes"
                className="h-full max-md:h-[49px]"
              />
            </div>
          ) : (
            <div className="relative md:-bottom-2 bottom-4 right-5 max-md:right-8 w-24 h-24 md:w-40 md:h-40 max-md:me-[34px] max-md:mt-20 max-sm:me-[75px]">
              <div className="w-24 h-24 border-2 border-dashed rounded-full md:w-32 md:h-32 border-primary animate-spin-slow"></div>
              <div className="absolute top-[8px] left-[8px] bg-primary rounded-full mx-auto">
                <img className="w-20 h-20 md:w-28 md:h-28" src={art} alt="" />
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default JobHero;
