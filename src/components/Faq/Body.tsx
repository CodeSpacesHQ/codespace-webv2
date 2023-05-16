import FAQ from "./FAQ";
import { motion } from "framer-motion";
import { slideAnimation, fadeAnimation } from "../../config/motion";
import { faqData } from "../../data/faqData";

import art from "../../assets/art2.png";
import arrow from "../../assets/Arrow 4.svg";

const Body = () => {
  return (
    <section className="relative sm:pt-[296px] pt-[166px] xl:px-64 lg:px-44 sm:px-24 px-[42px] pb-[109px] sm:pb-[343px] bg-[#F7F7FD]">
      <div className="mb-16 text-center">
        <h1 className="mb-5 font-inter font-semibold text-[#101828] text-3xl/[38px] sm:text-[42px]/[44px] tracking-normal sm:tracking-[-0.02em]">
          Frequently asked questions
        </h1>
        <p className="font-inter font-normal tracking-normal mx-auto text-[#667085] text-lg sm:text-2xl/[30px]">
          Everything you need to know about the product and billing.
        </p>
      </div>

      {faqData.map((faq, index) => (
        <FAQ
          key={index}
          index={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
      <motion.div
        {...slideAnimation("up")}
        className="absolute w-24 h-24 bottom-12 right-[27%] md:w-40 md:h-40"
      >
        <div className="w-24 h-24 border-2 border-dashed rounded-full md:w-32 md:h-32 border-primary animate-spin-slow"></div>
        <div className="absolute top-[8px] left-[8px] bg-primary rounded-full mx-auto">
          <img className="w-20 h-20 md:w-28 md:h-28" src={art} alt="" />
        </div>
      </motion.div>
      <motion.div {...fadeAnimation} className="absolute right-0 bottom-48">
        <img src={arrow} alt="arrow" className="xl:w-full max-xl:h-[91px]" />
      </motion.div>
    </section>
  );
};

export default Body;
