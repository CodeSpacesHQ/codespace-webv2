import { NavLink } from "react-router-dom";
import { donateContents } from "../../data/donateContent";
import { motion } from "framer-motion";
import { zoomAnimation } from "../../config/motion";

import AnimateWords from "../../config/textAnimation";

const Body = () => {
  return (
    <section className="bg-[#FFFFFF] px-7 sm:px-16 lg:px-[65px] xl:px-[101px] pt-[60px] sm:pt-[126px] pb-[126px] max-sm:pb-[161px] max-w-[1500px] mx-auto">
      <div className="sm:mb-[87px] mb-[31px]">
        <h2 className="font-gilroy text-[27px]/7 sm:text-[48px]/[53px] font-extrabold tracking-[-0.005em] mb-4">
          <AnimateWords text="Donate to our programs" />
        </h2>
        <p className="font-gilroy text-[#8C8C8C] font-normal tracking-[-0.20000000298023224px] sm:text-[22px]/8 text-[18px]/6 w-full sm:w-10/12 lg:w-2/3">
          <AnimateWords text="Our partners and donors go a long way in creating an impact and helping us reach thousands of genz-s in tech across Africa!" />
        </p>
      </div>
      <div className="flex flex-wrap max-xl:justify-center gap-y-6 gap-x-5">
        {donateContents.map((item, index) => {
          const { title, text, buttonText, link } = item;
          return (
            <motion.div
              {...zoomAnimation()}
              key={index}
              className="xl:flex-1 max-xl:w-[48%] max-lg:w-full relative bg-[#F9F9F9] rounded-t-[48px] pt-[94px] pl-8 pr-[26px] pb-[164px]"
            >
              <h3 className="font-gelion text-[22px]/[26px] lg:text-[32px]/10 tracking-[-0.005em] lg:tracking-[-0.01em] font-semibold mb-3 sm:mb-2">
                {title}
              </h3>
              <p className="font-gelion text-[#8C8C8C] font-normal text-[20px]/8 tracking-[-0.20000000298023224px]">
                {text}{" "}
                {index === 2 && (
                  <span>
                    <a
                      href={link}
                      className="text-[#5B5AD1] underline hover:no-underline text-inherit"
                    >
                      info@codespaceafrica.com.
                    </a>{" "}
                    We would be happy to discuss delivery logistics with you and
                    appreciate your generous contribution in advance
                  </span>
                )}
              </p>
              {index === 0 ? (
                <NavLink
                  to={link}
                  className="absolute bottom-[35px] left-0 right-0 mx-8 font-poppins font-semibold tracking-normal py-[19px] text-white rounded-[10px] text-center text-base
                    bg-[#5B5AD1] hover:bg-white hover:border hover:border-[#5B5AD1] 
                    transition duration-300 ease-in-out hover:text-[#5B5AD1]"
                >
                  {buttonText}
                </NavLink>
              ) : (
                <a
                  href={link}
                  className="absolute bottom-[35px] left-0 right-0 mx-8 font-poppins font-semibold tracking-normal py-[19px] text-white rounded-[10px] text-center text-base
                    bg-[#5B5AD1] hover:bg-white hover:border hover:border-[#5B5AD1] 
                    transition duration-300 ease-in-out hover:text-[#5B5AD1]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {buttonText}
                </a>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Body;
