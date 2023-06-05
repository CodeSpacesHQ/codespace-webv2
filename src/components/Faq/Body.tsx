import FAQ from "./FAQ";
import { motion } from "framer-motion";
import { slideAnimation, fadeAnimation } from "../../config/motion";
import textAnimation from "../../config/textAnimation";
import { faqData } from "../../data/faqData";
import art from "../../assets/art2.png";
import art2 from "../../assets/art3.png";
import arrow from "../../assets/Arrow 4.svg";
import arrow2 from "../../assets/Arrow 5.svg";
import pattern from "../../assets/Frame 48.svg";
import { star2 } from "../../assets/icon";

const Body = () => {
  const animateWords = textAnimation("up");
  return (
    <section
      className={`relative bg-gradient-to-b from-[#f7f7fd] to-white overflow-hidden`}
    >
      <div className="sm:pt-[296px] pt-[166px] xl:px-64 lg:px-44 sm:px-24 px-[42px] pb-[109px] sm:pb-[343px] max-w-[1500px] mx-auto">
        <div className="mb-16 text-center">
          <h1 className="mb-5 font-inter font-semibold text-[#101828] text-3xl/[38px] sm:text-[42px]/[44px] tracking-normal sm:tracking-[-0.02em]">
            {animateWords("Questions we get the most")}
          </h1>
          <p className="font-inter font-normal tracking-normal mx-auto text-[#667085] text-lg sm:text-2xl/[30px]">
            {animateWords(
              "We answered questions so you don't have to ask them."
            )}
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
        <div className="absolute top-[9%] sm:top-[14%] right-[10%] w-[20px] sm:w-[40px] object-cover">
          <img
            src={star2}
            alt={`star logo`}
            className="object-cover w-full animate-float max-sm:[36px]"
          />
        </div>
        <div className="max-lg:hidden">
          <motion.div
            {...slideAnimation("up")}
            className="absolute left-[5%] xl:left-[8%] bottom-[28%]"
          >
            <img src={art2} alt="art" className="h-24 2-24" />
          </motion.div>
          <motion.div
            {...fadeAnimation}
            className="absolute left-0 bottom-[40%]"
          >
            <img
              src={arrow2}
              alt="arrow"
              className="xl:w-full max-xl:h-[91px]"
            />
          </motion.div>
        </div>
        <div className="max-md:hidden">
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
            <img
              src={arrow}
              alt="arrow"
              className="xl:w-full max-xl:h-[91px]"
            />
          </motion.div>
          <div className="absolute lg:-right-[17px] -right-[38px] top-[28%]">
            <img src={pattern} alt="shapes" className="h-[143px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
